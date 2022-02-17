import { CoffeeEntity } from './model/coffee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CoffeeController } from './controller/coffee.controller';
import { CoffeeService } from './service/coffee.service';

@Module({
  imports: [TypeOrmModule.forFeature([CoffeeEntity])],
  controllers: [CoffeeController],
  providers: [CoffeeService]
})
export class CoffeesModule {}
