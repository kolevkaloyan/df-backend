import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

}

@Entity()
export class UserRoles {
  @PrimaryGeneratedColumn()
  user_id: number;

  @PrimaryGeneratedColumn()
  roles_id: number;
}