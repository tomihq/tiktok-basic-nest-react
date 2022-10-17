import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PageModule } from 'src/page/page.module';
import { VideoModule } from 'src/video/video.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [PageModule, VideoModule]
})
export class SeedModule {}