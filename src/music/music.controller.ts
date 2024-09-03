import { Controller, Get, Query } from '@nestjs/common';
import { MusicService } from './music.service';

@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Get('info')
  async getMusicInfo(@Query('url') youtubeUrl: string): Promise<any> {
    return this.musicService.getMusicInfo(youtubeUrl);
  }
}
