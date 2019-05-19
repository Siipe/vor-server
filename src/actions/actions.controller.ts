import { Controller, Get } from '@nestjs/common';

@Controller('/actions')
export class ActionsController {
  @Get()
  listAll() {
    return 'Here go all the available actions!';
  }
}
