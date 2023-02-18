import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BotService } from './bot.service';
import { KeywordDto } from './dto/keyword.dto';

@Controller('bot')
export class BotController {
  constructor(private readonly botService: BotService) {}

  @Post('keyword')
  findInfoByKeyword(@Body() keywordDto: KeywordDto) {
    return this.botService.findInfoByKeyword(keywordDto.keyword);
  }
}
