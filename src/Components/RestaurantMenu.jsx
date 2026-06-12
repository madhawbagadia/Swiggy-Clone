import { useState, useEffect } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";
import menuData from "../Utilities/menuData";

export default function RestaurantMenu() {

    let { id } = useParams();

    const [RestData, setRestData] = useState([]);

    useEffect(() => {

        const tempData = menuData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const filterData = tempData.filter((items) => "title" in (items?.card?.card || {}));

        setRestData(filterData);

    }, []);

    return (
        <div className="w-[80%] mx-auto mt-20">
            {
                RestData.map((menuItems) => (<MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card}/>))
            }
        </div>
    );
}