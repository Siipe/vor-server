import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import md5 = require("md5");

@Entity({name: 'computer'})
export class Computer {
  @PrimaryGeneratedColumn({name: 'computer_id'})
  id: number;

  @Column({length: 100})
  name: string;

  @Column({length: 100})
  os: string;

  @Column()
  description: string;

  @Column({length: 32})
  security_key: string;

  @Column()
  date_creation: Date;

  @Column()
  online: boolean;

  constructor(partial?: Partial<Computer>) {
    partial && Object.assign(this, partial);
  }

  generateKey() {
    let str = this.name || Math.random().toString(36).substring(7);
    return this.security_key = md5(str);
  }
}