import { Controller, Get, Query } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

@Controller('songs')
export class SongsController {
  constructor(private readonly supabaseService: SupabaseService) {}

  @Get()
  async getData() {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('songs')
      .select('*');

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  @Get('search')
  async getSong(@Query('name') name: string) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('songs')
      .select()
      .ilike('name', `%${name}%`);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
}
