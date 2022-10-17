import { useState, useEffect } from 'react';
import { Video } from '../interfaces/Video/video';
export const useItems = (data: string | Video[] | null):Video[] =>{
    const [items, setItems] = useState<Video[]>([]);

    useEffect(() => {
        if(Array.isArray(data) && data.length>0){
            setItems([...items, ...data]);
        }
    }, [data])

    return items;
    
}