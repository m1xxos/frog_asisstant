import { Injectable, Response } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bot } from './entities/bot.entity';
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class BotService {
  constructor(
    @InjectRepository(Bot)
    private botRepository: Repository<Bot>
  ) {}

    async setWS() {
      const uuid = await uuidv4()
      return {id: uuid, receiverId: 'ac4950aa-70e3-4d4f-9387-79533de6cfda'}
    }

  async findInfoByKeyword(keyword: string) {
    let resMes = {text: '', data: []};
    const res = await this.botRepository.findOneBy({keyword: keyword});
    if (!res) {
      const IIres = await axios.post('http://18.198.216.89:33321/', {text: keyword})
      if (IIres.data[0].score > 90){
        const resSecond = await this.botRepository.findOneBy({keyword: IIres.data[0].keyword});
        resMes.text = resSecond.info
        resMes.data = resSecond.additionalInfo
      }
      else if (IIres.data[0].score < 50){
        resMes.text = "К сожалению, мы не можем распознать ваш запрос. Возможно, вы имели в виду что-то из этого: "
        IIres.data.forEach(element => {
          resMes.data.push(element.keyword)
        });
      }
      else {
        resMes.text = "Вероятнее всего, вы имели в виду что-то из этого: "
      IIres.data.forEach(element => {
        resMes.data.push(element.keyword)
      });
    }
    }
    else {
      resMes.text = res.info
      resMes.data = res.additionalInfo
    }
    return resMes
  }
}
