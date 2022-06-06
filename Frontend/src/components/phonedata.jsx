import {Phone} from "./phone";
import { useEffect, useState } from 'react';
import {useNavigate} from "react-router"
export const Phonedata = ()=>{
  const navigate = useNavigate();
    const [data,setData] = useState([]);
    console.log(data)
  
    useEffect(()=>{
      getdata()
    },[])
  
    const getdata = async()=>{
      const response = await fetch("http://localhost:5100/mobile/").then((d)=>d.json());
      setData(response);
      console.log(response)
    }
    const sorteddata = async()=>{
        const response = await fetch("http://localhost:5100/mobile/asc").then((d)=>d.json());
        setData(response);
      }
      const sorteddata1 = async()=>{
        const response = await fetch("http://localhost:5100/mobile/dsc").then((d)=>d.json());
        setData(response);
      }
  return (
        <div>
            <h3>Sort By Price</h3>
           <select onChange = {(e)=>{
        if(e.target.value === "asc"){
          sorteddata()
        }
        else if(e.target.value === "dsc"){
            sorteddata1()
          
        }

        
      }}>
        <option value = "">Choose</option>
        <option value = "asc">Low to High</option>
        <option value = "dsc">High to Low</option>
      </select>
        
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
      </div>
    )
}