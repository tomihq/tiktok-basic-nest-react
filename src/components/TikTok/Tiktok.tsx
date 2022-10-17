import React, { useState, useEffect } from "react"
import { useFetch } from "../../hooks/useFetch";
import { useItems } from "../../hooks/useItems";
import { Video } from "../../interfaces/";
import { TiktokVideo } from "../Multimedia/TiktokVideo";

export const Tiktok = () => {
  const [url, setUrl] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);
  const [response, data, isLoading] = useFetch(url, 'json');
  const [maxVideos, setMaxVideos] = useState<number>(0);
  const items:Video[] = useItems(data);

 
  useEffect(() => {
    async function fetchVideoAmounts(){
      const fetchData = await fetch("http://localhost:8080/video/amountVideos")
      const {data} = await fetchData.json()
      setMaxVideos(data);
    }
    fetchVideoAmounts();
  }, [])

  useEffect(() => {
   setUrl('http://localhost:8080/page/' +page);
  }, [page])

  const nextVideo = () =>{
    if( index + 2 === items.length){
      setPage(page + 1);
    }
    index+1<maxVideos && setIndex(index + 1)
    
  }

  const prevVideo = () =>{
    index>0 && setIndex(index - 1)
  }

  return (
    <div>
      <div>{isLoading?'Cargando...':''}</div>

      <div className="md:mx-96 relative">
          <button className="absolute z-20 right-2 top-2 md:mr-8" disabled={isLoading} onClick={() => nextVideo()}> Next Video</button>
          <button className="absolute z-20 left-2 top-2 md:ml-8" disabled={isLoading} onClick={() => prevVideo()}>Prev Video</button>
      </div>
          
      <div className="tiktoks-container-view md:flex md:items-center md:justify-center md:h-auto relative">
          <div className="tiktoks-container" style={{transform: `translateY(${-1 * index * 960 + 'px'})`}} >
            <Videos items={items} index={index} />
          </div>
      </div>
    </div>
  )
}

interface VideosProps {
  items: Video[]
  index: number
}

const Videos = React.memo(({items, index}:VideosProps) => {
  return (<> 
            {items?.map((item:Video, i:number) => (
              <TiktokVideo key={i} item={item} current={index===i}/>
            ))
            }
  </>)
});