import {  useEffect, useRef } from "react"
import { Video } from "../../interfaces";

interface Props{
    item: Video;
    current: boolean;
}

export const TiktokVideo = ({item, current}:Props) => {
    const ref = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
   
      if(current && ref.current){
        ref.current!.play();
      }else{
        ref.current!.pause();
        ref.current!.currentTime = 0; 
      }


    }, [current])
    

    return (
      <div className="tiktok-video">
          <video ref={ref}  autoPlay loop>
              <source src={`http://localhost:8080/public/${item.path}`} type="video/mp4"/>
          </video>
      </div>
    )
}
