export default function GroceryCard({groceryData}){

    return(
        <>
        <div className="shrink-0">
            <a href={groceryData?.action.link}>
            <img className="h-45 w-full object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+groceryData?.imageId}/>
            </a>
            <h2 className="tracking-tight text-base text-center font-bold text-[#02060CBF]">{groceryData?.action?.text}</h2>
        </div>
        </>
    )
}