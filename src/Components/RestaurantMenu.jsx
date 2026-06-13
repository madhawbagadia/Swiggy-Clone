import { useState, useEffect } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";
import menuData from "../Utilities/menuData";
import { Link } from "react-router";

export default function RestaurantMenu() {

    let { id } = useParams();

    const [RestData, setRestData] = useState([]);
    const [selected, setSelected] = useState(null);

    useEffect(() => {

        const tempData = menuData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const filterData = tempData.filter((items) => "title" in (items?.card?.card || {}));

        setRestData(filterData);

    }, []);

    return (
        <div>
            <div className="w-[60%] mx-auto mb-20 mt-20">
                <Link to={`/city/patna/${id}/search`}>
                    <p className="w-full bg-gray-300 rounded-4xl text-center py-2 text-xl">Search for dishes</p>
                </Link>
            </div>

            <div className="w-[80%] mx-auto mb-6">
                <button className={`border-2 border-green-600 rounded-2xl text-lg px-8 py-2 mr-2 ${selected==='veg'?'bg-green-600':'bg-gray-300'} ${selected==='veg'?'text-white':'text-black'}`} onClick={()=>setSelected(selected==='veg'?null:'veg')}>Veg</button>
                <button className={`border-2 border-red-600 rounded-2xl text-lg px-4 py-2 ${selected==='nonveg'?'bg-red-600':'bg-gray-300'} ${selected==='nonveg'?'text-white':'text-black'}`} onClick={()=>setSelected(selected==='nonveg'?null:'nonveg')}>Non-Veg</button>
            </div>
        
            <div className="w-[80%] mx-auto mt-20">
                {
                    RestData.map((menuItems) => (<MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodselected={selected}/>))
                }
            </div>
        </div>
    );
}