import {Phone} from "./phone";
import { useEffect, useState } from 'react';
export const Phonedata = ()=>{
    const [data,setData] = useState([]);
    console.log(data)
  
    useEffect(()=>{
      getdata()
    },[])
  
    const getdata = async()=>{
      const response = await fetch("http://localhost:5100/mobile").then((d)=>d.json());
      setData(response);
      console.log(response)
    }
  return (
        <div id="box">
        
        {data.map((e) => {
          return (
           <Phone
              
              image={e.image}
              description={e.Description}
              price={e.Price}
              color = {e.color}
            />
            
          );
        })}
      </div>
    )
}