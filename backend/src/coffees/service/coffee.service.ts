import { CoffeeEntity } from './../model/coffee.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CoffeeService {

    private coffees: CoffeeEntity = {
        id: 123,
        name: "capuchino"
    }

    async getAllCf(){
        return this.coffees;
    }
}
