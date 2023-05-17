import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Departments {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}