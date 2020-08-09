import { Injectable } from '@nestjs/common';

@Injectable()
export class RoomsService {
  rooms = [
    {
      id: 1,
      roomName: 'entrance',
    },
    {
      id: 2,
      roomName: 'fighter',
    },
    {
      id: 3,
      roomName: 'boss',
    },
  ];
  getAllRooms() {
    return this.rooms;
  }
  getRoomsById(id: number) {
    return this.rooms.find(room => room.id === id);
  }
}
