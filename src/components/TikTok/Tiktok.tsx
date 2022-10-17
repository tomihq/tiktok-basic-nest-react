import { useState, useEffect } from "react"
import { useFetch } from "../../hooks/useFetch";

export const Tiktok = () => {
  const [url, setUrl] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const [response, data, isLoading] = useFetch(url, 'json');
  
  useEffect(() => {
   setUrl('http://localhost:8080/page/' +page);
    
  }, [page])
  
 
  

  return (
    <div>Hello World</div>
  )
}
