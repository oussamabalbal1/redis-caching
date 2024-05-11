import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { DataService } from './data.service';
import { DatumDto } from './dto/datum.dto';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import { ConfigService } from '@nestjs/config';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService,private configService: ConfigService) {}
  
  @Post()
  create(@Body() createDatumDto: DatumDto) {
    return this.dataService.create(createDatumDto);
  }
  //wotking only with get methods
  @UseInterceptors(CacheInterceptor)
  //@CacheTTL(10*1000) // time to live
  //@CacheKey('custom_key') // cache key
  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('inside controller..')
    console.log(this.configService.get('DB_USERNAME'))
    return this.dataService.findOne(+id);
  }


}
