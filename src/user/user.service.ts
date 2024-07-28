import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository:Repository<User>){

  }
 async create(createUserDto):Promise<any> {
    return await this.userRepository.save(createUserDto);
  }

 async findAll():Promise<any> {
    return await this.userRepository.find();
  }

 async findOne(id: string):Promise<any> {
    return await this.userRepository.findOneBy({id})
  }

 async  update(id: number, updateUserDto):Promise<any> {
    return await this.userRepository.update(id,updateUserDto);
  }

async  remove(id: number):Promise<any> {
     return await this.userRepository.delete(id)
  }
}
