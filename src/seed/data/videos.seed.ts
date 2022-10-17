import { Video } from "src/video/entities/video.entity";

export const VIDEOS_SEED: Video[] = [];

for (let i = 1; i <= 10; i++) {
    VIDEOS_SEED.push({
        id: Number(i),
        title: 'Video' +i,
        path: 'vid-' + (Number(i)<10&&'0'+i || Number(i)) + '.mp4'

    })
    
}