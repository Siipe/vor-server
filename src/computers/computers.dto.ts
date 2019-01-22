import { IsString } from "class-validator";

export class ComputersDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly os: string;

  @IsString()
  readonly description: string;
}