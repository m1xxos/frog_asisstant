import { Injectable, Response } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import axios from 'axios'
import { Msg } from './entities/msg.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Msg) 
    private chatRepository: Repository<Msg>) {}

    async createMessage(msg: Msg): Promise<Msg> {
        return await this.chatRepository.save(msg);
      }
      
      async getMessages(): Promise<Msg[]> {
        return await this.chatRepository.find();
      }
  
}
