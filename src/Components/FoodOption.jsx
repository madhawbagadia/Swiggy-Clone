import { imageGridCards } from "../Utilities/FoodData"
import FoodCard from "./FoodCard"

export default function FoodOption(){

    return (
        <>
        <div className="w-[80%] container mx-auto mt-20">
            <h2 className="font-bold text-2xl font-sans">Order our best food options</h2>
            <div className="flex flex-wrap mt-5 gap-4">
                {
                    imageGridCards.map((foodData)=><FoodCard key={foodData.id} foodData={foodData}></FoodCard>)
                }
            </div>
        </div>
        </>
    )
}