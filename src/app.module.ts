import { Module } from '@nestjs/common';
import { SupabaseModule } from './supabase/supabase.module';
import { SongsController } from './Controller/SongsController';
import { GeminiModule } from './gemini/gemini.module';
import { GeminiController } from './Controller/gemini.controller';
import { MusicService } from './music/music.service';
import { MusicController } from './music/music.controller';

@Module({
  imports: [SupabaseModule, GeminiModule],
  controllers: [SongsController, GeminiController, MusicController],
  providers: [MusicService],
})
export class AppModule {}
