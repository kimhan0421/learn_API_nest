import { Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `one movie with the id: ${movieId}`;
  }

  @Post()
  create() {
    return 'create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `delete movie with the id: ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `patch movie with the id : ${movieId}`;
  }
}
