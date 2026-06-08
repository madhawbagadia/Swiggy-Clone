import { groceryGridCards } from "../Utilities/GroceryData"
import GroceryCard from "./GroceryCard"

export default function GroceryOption(){

    return (
        <>
        <div className="max-w-[80%] container mx-auto mt-20">
            <h2 className="font-bold text-2xl font-sans">Shop groceries on Instamart</h2>
            <div className="flex flex-nowrap overflow-x-auto scrollbar-hide mt-5 gap-6">
                {
                    groceryGridCards.map((groceryData)=><GroceryCard key={groceryData.id} groceryData={groceryData}></GroceryCard>)
                }
            </div>
        </div>
        </>
    )
}