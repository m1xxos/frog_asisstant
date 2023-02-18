import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bot } from './entities/bot.entity';

@Injectable()
export class BotService {
  constructor(
    @InjectRepository(Bot)
    private botRepository: Repository<Bot>
  ) {}

  findInfoByKeyword(keyword: string) {
    this.botRepository.findOneBy({keyword: keyword})
  }

  findUserSearch(keyword: string) {
    this.botRepository.findOneBy({keyword: keyword})
  }
}
