import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { RoomsService } from './rooms.service';

@Controller('rooms')
export class RoomsController {
  constructor(private roomService: RoomsService) {}
  @Get()
  findAll() {
    return this.roomService.getAllRooms();
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.roomService.getRoomsById(id);
  }
}
