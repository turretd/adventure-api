import { IsNotEmpty, IsInt, Min, Max } from 'class-validator';

export class Cat {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Max(10)
  age: number;

  @IsNotEmpty()
  breed: string;
}
