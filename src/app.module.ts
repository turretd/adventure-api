import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { RoomsModule } from './rooms/rooms.module';

@Module({
  imports: [CatsModule, RoomsModule],
})
export class AppModule {}
