import { useState } from "react"
import RestInfo from "./RestInfo"

export default function MenuCard({menuItems, foodselected}){

    const [isOpen,setisOpen] = useState(true);

    if("categories" in menuItems)
    {
        return(
            <div className="w-full">
                <p className="text-2xl font-bold">{menuItems.title}</p>
                <div>
                    {
                        menuItems?.categories?.map((items)=><MenuCard key={items?.title} menuItems={items} foodselected={foodselected}/>)
                    }
                </div>
            </div>
        )
    }

    if(!isOpen){
        return(
            <div className="w-full">
                <div className="flex justify-between w-full">
                    <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
                    <button className="text-3xl font-bold mr-20" onClick={()=>setisOpen(!isOpen)}>{isOpen?'^':'🇻'}</button>
                </div>
                <div className="h-5 bg-gray-300 mt-2 mb-2"></div>
            </div>
        )
    }

    if(foodselected==='veg'){
        return(
            <div className="w-full">
                <div className="flex justify-between w-full">
                    <p className="text-2xl font-bold mb-4">{menuItems.title}</p>
                    <button className="text-3xl font-bold mr-20" onClick={()=>setisOpen(!isOpen)}>{isOpen?'^':'🇻'}</button>
                </div>
                <div>
                    {
                        menuItems?.itemCards?.filter((food)=> food?.card?.info?.isVeg === 1).map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}/>)
                    }
                </div>
                <div className="h-5 bg-gray-300 mt-2 mb-2"></div>
            </div>
        )
    }

    if(foodselected==='nonveg'){
        return(
            <div className="w-full">
                <div className="flex justify-between w-full">
                    <p className="text-2xl font-bold mb-4">{menuItems.title}</p>
                    <button className="text-3xl font-bold mr-20" onClick={()=>setisOpen(!isOpen)}>{isOpen?'^':'🇻'}</button>
                </div>
                <div>
                    {
                        menuItems?.itemCards?.filter((food)=> food?.card?.info?.isVeg !== 1).map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}/>)
                    }
                </div>
                <div className="h-5 bg-gray-300 mt-2 mb-2"></div>
            </div>
        )
    }

    return(
            <div className="w-full">
                <div className="flex justify-between w-full">
                    <p className="text-2xl font-bold mb-4">{menuItems.title}</p>
                    <button className="text-3xl font-bold mr-20" onClick={()=>setisOpen(!isOpen)}>{isOpen?'^':'🇻'}</button>
                </div>
                <div>
                    {
                        menuItems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}/>)
                    }
                </div>
                <div className="h-5 bg-gray-300 mt-2 mb-2"></div>
            </div>

    )
}