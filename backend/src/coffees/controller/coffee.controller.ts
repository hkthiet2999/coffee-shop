import { CoffeeService } from './../service/coffee.service';
import { Controller, Get } from '@nestjs/common';

@Controller('coffee')
export class CoffeeController {
    constructor(private readonly coffeeService : CoffeeService){}

    @Get()
    async getAllCf(){
        return this.coffeeService.getAllCf();
    }
}
