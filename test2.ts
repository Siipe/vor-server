import "reflect-metadata";
import { Type, plainToClass, classToPlain, Exclude } from "class-transformer";
import { Md5 } from "ts-md5";

class User {
  id: number;
  name: string;

  @Exclude()
  password: string;
}

class UserDto {
  id: number;
  name: string;
}

let user = {
  id: 3,
  name: 'Siipe',
}

let dto = plainToClass(UserDto, user);

console.log(1, dto);

let plain = classToPlain(dto);

let entity = plainToClass(User, plain);

console.log(2, entity);

entity = new User();
entity.id = 70;
entity.name = 'daday';
entity.password = Md5.hashStr('siipe').toString();

console.log(3, entity);

plain = classToPlain(entity);
dto = plainToClass(UserDto, plain);
console.log(4, dto);