import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class GeminiService {
  private readonly genAI: GoogleGenerativeAI;
  private readonly model;

  constructor() {
    this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  }

  async search(query: string, theme: string) {
    try {
      const response = await this.model.generateContent(query, theme);
      return response;
    } catch (error) {
      throw new Error(`Failed to fetch data from Gemini: ${error.message}`);
    }
  }
  async searchSongLyrics(song: string) {
    try {
      const response = await this.model.generateContent(
        `Pesquise a letra da música: ${song}. Em uma palavra ou numa frase de no máximo 3 palavras, qual é o tema dela ?`,
      );
      return response;
    } catch (error) {
      throw new Error(`Failed to fetch data from Gemini: ${error.message}`);
    }
  }

  async generateContent(prompt: string) {
    try {
      const result = await this.model.generateContent(prompt);
      console.log(result.response.text());
    } catch (error) {
      throw new Error(`Failed to generate content: ${error.message}`);
    }
  }

  private getAccessToken(): string {
    return process.env.GEMINI_API_KEY;
  }
}
