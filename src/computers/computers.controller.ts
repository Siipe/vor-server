import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ComputersDto } from './computers.dto';
import { ComputersService } from './computers.service';

@Controller('/computers')
export class ComputersController {
  constructor(private readonly computersService: ComputersService) { }

  @Get()
  listAll() {
    return this.computersService.listAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const computer = await this.computersService.findOne(id);
    if (!computer) {
      throw new HttpException(`The requested resource [${id}] wasn't found.`, HttpStatus.NOT_FOUND);
    }
    return computer;
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() body: ComputersDto) {
    if (!body) {
      throw new HttpException('You must specify an object!', HttpStatus.BAD_REQUEST);
    }
    try {
      return this.computersService.create(body);
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
