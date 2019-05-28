import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Md5 } from 'ts-md5';
import AbstractEntity from '../shared/entity/AbstractEntity';

@Entity({ name: 'computer' })
export class Computer extends AbstractEntity {
  @PrimaryGeneratedColumn({ name: 'computer_id' })
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  os: string;

  @Column()
  description: string;

  @Column({ name: 'security_key', length: 32 })
  securityKey: string;

  @Column({ name: 'date_creation' })
  dateCreation: Date;

  @Column()
  online: boolean;

  generateKey() {
    const str = this.name || Math.random().toString(36).substring(7);
    return this.securityKey = Md5.hashStr(str).toString();
  }
}
