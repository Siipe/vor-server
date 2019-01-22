import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Computer } from "./computers.entity";
import { Repository } from "typeorm";
import { ComputersDto } from "./computers.dto";

@Injectable()
export class ComputersService {
  constructor(
    @InjectRepository(Computer)
    private readonly computerRepository: Repository<Computer>
  ) {}

  async listAll(): Promise<Computer[]> {
    return await this.computerRepository.find();
  }

  async findOne(id: number): Promise<Computer> {
    return await this.computerRepository.findOne(id);
  }

  async create(computerDto: ComputersDto) {
    let computer = new Computer(computerDto);
    computer.generateKey();
    return await this.computerRepository.save(computer);
  }
}