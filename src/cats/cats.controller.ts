import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cats';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}
    @Get()
    async findAll(): Promise<Cat[]> {
      return this.catsService.findAll();
    }
    @Get(':id')
    findOne(@Param() params): string {
    return `This action returns a #${params.id} cat`;
    }
    @Post()
    async create(@Body() createCat: Cat) {
      this.catsService.create(createCat);
    }
  } 