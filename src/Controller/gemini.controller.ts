import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { GeminiService } from '../gemini/gemini.service';

@Controller('gemini')
export class GeminiController {
  constructor(private readonly geminiService: GeminiService) {}

  @Get('search')
  async search(@Query('query') query: string, @Query('theme') theme: string) {
    if (!query) {
      throw new Error('Query parameter is required');
    }

    return await this.geminiService.search(query, theme);
  }
  @Post('song_lyrics')
  async searchSongLyrics(@Body('song') song: string) {
    return await this.geminiService.searchSongLyrics(song);
  }

  @Get('generate')
  async generateContent(@Query('prompt') prompt: string) {
    if (!prompt) {
      throw new Error('Prompt parameter is required');
    }

    return await this.geminiService.generateContent(prompt);
  }
}
