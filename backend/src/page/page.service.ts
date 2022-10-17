import { Injectable } from '@nestjs/common';
import { Video } from 'src/video/entities/video.entity';
import { VideoService } from 'src/video/video.service';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';

@Injectable()
export class PageService {

  constructor(
    private readonly videoService: VideoService,
  ){}

  range:number = 5; 
  index:number = 0; 
  items:Video[] = [];

  create(createPageDto: CreatePageDto) {
    return 'This action adds a new page';
  }

  findAll() {
    if(this.items.length===0) this.items = this.videoService.findAll();
    return this.items;
  }

  getVideoByPage(id: string):Video[]{
    if(this.items.length===0) this.items = this.videoService.findAll();
    const start:string|number = id ?? this.index;
    const portion = this.items.slice(Number(start) * this.range, Number(start) * this.range + this.range);
    
    return portion;
  }

  findOne(id: number) {
    return `This action returns a #${id} page`;
  }

  update(id: number, updatePageDto: UpdatePageDto) {
    return `This action updates a #${id} page`;
  }

  remove(id: number) {
    return `This action removes a #${id} page`;
  }
}
