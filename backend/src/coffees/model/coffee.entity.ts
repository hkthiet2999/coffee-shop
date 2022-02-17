import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CoffeeEntity{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name: string;

}