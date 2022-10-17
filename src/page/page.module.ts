import { Module } from '@nestjs/common';
import { PageService } from './page.service';
import { PageController } from './page.controller';
import { VideoModule } from 'src/video/video.module';

@Module({
  controllers: [PageController],
  providers: [PageService],
  imports: [VideoModule],
  exports: [PageService]
})
export class PageModule {}
