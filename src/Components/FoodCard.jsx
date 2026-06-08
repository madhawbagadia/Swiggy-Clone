export default function FoodCard({foodData}){

    return(
        <>
        <a href={foodData?.action.link}>
        <img className="h-45 w-38 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId}/>
        </a>
        </>
    )
}