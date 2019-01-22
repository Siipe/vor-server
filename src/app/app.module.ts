import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ComputersModule } from '../computers/computers.module';
import { ActionsModule } from '../actions/actions.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as cors from 'cors';

@Module({
  imports: [TypeOrmModule.forRoot(), ComputersModule, ActionsModule]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(cors());
  }
}
