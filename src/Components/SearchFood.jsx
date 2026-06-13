import { useState } from "react";
import { useParams } from "react-router";

export default function SearchFood(){

    const { id } = useParams();
    const [food, setFood] = useState("");

    return (
        <div className="w-[80%] mx-auto mt-20">
            <input className="w-full rounded-3xl bg-gray-300 px-2 py-4 pl-10 border" onChange={(e)=>setFood(e.target.value)} type="text" placeholder="Search for food in restaurant" />
        </div>
    )
}