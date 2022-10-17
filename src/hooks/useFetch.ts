import { useEffect, useState } from "react";
import { Video } from "../interfaces/Video/video";


export const useFetch = (url:string, type:string):[Response | string[] | null,  Video[] | string | null, boolean] =>{
    const [data, setData] = useState<Video[] | null | string>(null);
    const [response, setResponse] = useState<Response | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if(!!url){
            fetchData();
        }
        async function fetchData(){
            setIsLoading(true);
            try {
            const response = await fetch(url);
            setResponse(response);

            switch(type){
                case "text":
                    const text = await response.text();
                    setData(text);
                    setIsLoading(false);
                    break;
                case "json":
                        const json:Video[] = await response.json();

                        setData(json);
                        setIsLoading(false);
                        break;
                default:
                    
            }

            } catch (error) {
                setIsLoading(false);
            }
        }
    
        fetchData();
    }, [url]);

    return [response, data, isLoading]

}