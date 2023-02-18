import { Injectable, Response } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bot } from './entities/bot.entity';
import axios from 'axios'
@Injectable()
export class BotService {
  constructor(
    @InjectRepository(Bot)
    private botRepository: Repository<Bot>
  ) {}

  async findInfoByKeyword(keyword: string) {
    let resMes = {text: '', data: []};
    const res = await this.botRepository.findOneBy({keyword: keyword});
    if (!res) {
      const IIres = await axios.post('http://18.198.216.89:33321/', {text: keyword})
      if (IIres.data[0].score > 90){
        const resSecond = await this.botRepository.findOneBy({keyword: IIres.data[0].keyword});
        console.log(IIres.data[0].keyword)
        resMes.text = resSecond.info
        resMes.data = resSecond.additionalInfo
      }
      else if (IIres.data[0].score < 50){
        resMes.text = "К сожалению, не очень понятно, что вы имели ввиду, " +
        "пользователь. Может это???"
      }
      else resMes.text = "Вероятнее всего, вы имели ввиду чето типа этого, " +
      "пользователь."
      IIres.data.forEach(element => {
        resMes.data.push(element.keyword)
      });
    }
    else {
      resMes.text = res.info
      resMes.data = res.additionalInfo
    }
    return resMes
  }
}
