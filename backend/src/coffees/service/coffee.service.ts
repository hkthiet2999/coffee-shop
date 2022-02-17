import { CoffeeEntity } from './../model/coffee.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CoffeeService {

    
    // private coffees: CoffeeEntity[] = [
    //     {
    //         id: 123,
    //         name: "capuchino",
    //         price: "120.000",
    //         description: "no decs"
    //     },
    //     {
    //         id: 124,
    //         name: "chocolate",
    //         price: "180.000",
    //         description: "no decs"
    //     },
    // ]
    
    constructor(
        @InjectRepository(CoffeeEntity)
        private readonly coffeeRepository: Repository<CoffeeEntity>
    ){}

    async getAllCf(){
        return await this.coffeeRepository.find();
    }

    async findCfById(id : number){
        return await this.coffeeRepository.findOne(id);
    }

    async createCf(body: any){
        console.log(body);
        const newCoffee = await this.coffeeRepository.create({
            id: +body.id,
            name: body.name,
            price: body.price,
            description: body.description

        });
        
        console.log(newCoffee);

        if(!newCoffee){
            throw new NotFoundException(`Coffee can not create`)
        }

        return await this.coffeeRepository.save(newCoffee);
    }

    async updateCf(id: number, body: any){
        // const [id, name] = [body.id, body.name]
        // console.log(...body);
        const updateCoffee = await this.coffeeRepository.update(id, body);

        if(!updateCoffee){
            throw new NotFoundException(`Coffee can not update`)
        }
        return updateCoffee
    }

    async removeCf(id: number){

        const removeCoffee = await this.coffeeRepository.delete(id);
        return removeCoffee;

    }
}
