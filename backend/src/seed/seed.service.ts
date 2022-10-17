import { Injectable } from '@nestjs/common';
import { VIDEOS_SEED } from './data/videos.seed';
import { VideoService } from 'src/video/video.service';
import { PageService } from 'src/page/page.service';


@Injectable()
export class SeedService {

  constructor(
    private readonly videoService: VideoService,
    private readonly pageService: PageService,
  ){}

  populateDB(){
    this.videoService.fillVideosWithSeedData(VIDEOS_SEED);
    
    return 'Seed executed successfully';
  }
}