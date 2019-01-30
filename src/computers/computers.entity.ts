import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { AbstractEntity } from "src/shared/entity/AbstractEntity";
import { Md5 } from "ts-md5";

@Entity({name: 'computer'})
export class Computer extends AbstractEntity {
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

  generateKey() {
    let str = this.name || Math.random().toString(36).substring(7);
    return this.security_key = Md5.hashStr(str).toString();
  }
}