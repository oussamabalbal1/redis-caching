import { ForbiddenException, Injectable } from '@nestjs/common';
import { DatumDto } from './dto/datum.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Datum } from './entities/datum.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DataService {
  constructor(@InjectRepository(Datum) private readonly datarepository:Repository<Datum>){}
  async create(createDatumDto: DatumDto, ) {
    const data:Datum= await this.datarepository.create(createDatumDto)
    if(!data){
      throw new ForbiddenException()
    }
    return this.datarepository.save(data)
  }

  
  async findOne(id: number) {
    const data:Datum= await this.datarepository.findOne({where:{id}})
    if(!data){
      throw new ForbiddenException()
    }
    return data;
  }
}
