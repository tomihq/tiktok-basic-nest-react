import { Module } from '@nestjs/common';
import { PageModule } from './page/page.module';
import { VideoModule } from './video/video.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [PageModule, VideoModule, SeedModule],
  
})
export class AppModule {}
