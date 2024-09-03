import { Injectable } from '@nestjs/common';
import { getInfo } from '@distube/ytdl-core';
// import { Readable } from 'stream';
// import WavDecoder from 'wav-decoder';
// import { MusicTempo } from 'music-tempo';
// import PitchFinder from 'pitchfinder';

@Injectable()
export class MusicService {
  async getMusicInfo(youtubeUrl: string): Promise<any> {
    try {
      console.log(`URL do YouTube: ${youtubeUrl}`);
      // Obter informações do vídeo do YouTube
      const info = await getInfo(youtubeUrl);
      const title = info.videoDetails.title;
      console.log(`Nome da música: ${title}`);
      console.log(`Details:`, info.videoDetails);

      // Retornar os resultados
      return {
        title,
      };
    } catch (error) {
      console.error('Erro ao processar a música:', error);
      throw new Error('Erro ao processar a música');
    }
  }
}
