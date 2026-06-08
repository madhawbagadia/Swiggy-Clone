import { useEffect, useState } from "react"
import RestCard from "./RestCard";


export default function Restaurant(){
    
    const [RestData,setRestData] = useState([]);

    useEffect(()=>{

        async function fetchData (){
            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5943&lng=85.1352&is-seo-homepage-enabled=true";
            const response = await fetch(proxyServer+swiggyAPI);
            const data = await response.json();
            setRestData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        }

        fetchData();

    },[]);

    // console.log(RestData);

    return (
        <div className="flex flex-wrap max-w-[80%] container mx-auto mt-20 gap-5">
            {
                RestData.map((restInfo)=><RestCard key={restInfo.info.id} restInfo={restInfo}></RestCard>)
            }
        </div>
    )
}