import { CoffeeService } from './../service/coffee.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Put, Post } from '@nestjs/common';
import { CreateCoffeeDto } from '../dto/coffee.dto.create';

@Controller('coffee')
export class CoffeeController {
    constructor(private readonly coffeeService : CoffeeService){}

    @Get()
    async getAllCf(){
        return this.coffeeService.getAllCf();
    }

    @Get(':id')
    async findCfById(@Param('id', ParseIntPipe) id: number){
        console.log(id);
        console.log( typeof(id));
        return this.coffeeService.findCfById(id);
    }

    @Post()
    async createCf(@Body() body: CreateCoffeeDto){
        console.log(body);
        return this.coffeeService.createCf(body);
    }

    @Put(':id')
    async updateCf(@Param('id', ParseIntPipe) id: number, @Body() body: CreateCoffeeDto){
        return this.coffeeService.updateCf(id, body);
    }

    @Delete(':id')
    async removeCf(@Param('id', ParseIntPipe) id: number){
        return this.coffeeService.removeCf(id);
    }
}
