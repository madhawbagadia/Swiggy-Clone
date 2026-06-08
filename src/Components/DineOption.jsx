import { dineoutrestaurants } from "../Utilities/DineData";
import RestaurantCard from "./RestaurantCard";

export default function DineOption(){


    return(
        <>
            <div className="max-w-[80%] container mx-auto mt-20">
                <p className="font-bold text-2xl font-sans">Discover best restaurants on Dineout</p>
                <div className="flex flex-nowrap overflow-x-auto scrollbar-hide mt-5 gap-4">
                    {
                        dineoutrestaurants.map((restaurantData)=><RestaurantCard key={restaurantData.info.id} restaurantData={restaurantData}></RestaurantCard>)
                    }
                </div>
            </div>
        </>
    )
}