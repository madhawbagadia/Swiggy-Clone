export default function RestaurantCard({restaurantData}){


    return (
        <>
        <div className="max-w-sm flex-none font-sans rounded-2xl overflow-hidden">
            <a target="_blank" href={restaurantData?.cta?.link}>
                <div className="relative">
                    <img className="w-80 h-48 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restaurantData?.info?.mediaFiles[0]?.url} />
                    <p className="absolute left-3 bottom-3 z-10 max-w-55 truncate text-white font-bold text-lg">{restaurantData?.info?.name}</p>
                    <p className="absolute right-3 bottom-3 text-white font-bold text-lg z-10">{restaurantData?.info?.rating?.value}</p>
                    <div className="absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-black to-transparent z-0"></div>
                </div>
            </a>
        </div>
        </>
    )
}