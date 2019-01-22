import { Module } from "@nestjs/common";
import { ComputersController } from "./computers.controller";
import { ComputersService } from "./computers.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Computer } from "./computers.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Computer])],
  controllers: [ComputersController],
  providers: [ComputersService]
})
export class ComputersModule {}