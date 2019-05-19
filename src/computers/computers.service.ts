import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Computer } from './computers.entity';
import { Repository } from 'typeorm';
import { ComputersDto } from './computers.dto';

@Injectable()
export class ComputersService {
  constructor(
    @InjectRepository(Computer)
    private readonly computerRepository: Repository<Computer>) { }

  listAll(): Promise<Computer[]> {
    return this.computerRepository.find();
  }

  findOne(id: number): Promise<Computer> {
    return this.computerRepository.findOne(id);
  }

  create(computerDto: ComputersDto) {
    const computer = new Computer(computerDto);
    computer.generateKey();
    return this.computerRepository.save(computer);
  }
}
