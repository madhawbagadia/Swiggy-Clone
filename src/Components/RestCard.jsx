import { Link } from "react-router"

export default function RestCard({restInfo}){


    return (
        <>
        <Link to={"/city/patna/"+restInfo?.info?.id}>
        <div className="w-70 mb-2 transition transform duration-200 hover:scale-95"> 
            <div className="relative rounded-2xl overflow-hidden">
                <img className="w-70 h-45 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo?.info?.cloudinaryImageId} />
                <div className="absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-black to-transparent rounded-b-2xl"></div>
                <div className="absolute font-bold text-white text-xl left-2 bottom-2">{restInfo?.info?.aggregatedDiscountInfoV3?.header}{" "}{restInfo?.info?.aggregatedDiscountInfoV3?.subHeader}</div>
            </div>
            <div className="max-w-[95%] mx-auto mt-2 font-sans">
                <div  className="font-bold text-lg max-w-[95%] truncate tracking-tighter">{restInfo?.info?.name}</div>
                <div className="flex gap-1 items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <circle cx="12" cy="12" r="12" fill="#16A34A" />
                        <path
                            d="M12 5.5L13.85 9.25L18 9.85L15 12.8L15.7 17L12 15.05L8.3 17L9 12.8L6 9.85L10.15 9.25L12 5.5Z"
                            fill="white"
                        />
                    </svg>
                    <span className="text-base">{restInfo?.info?.avgRating}</span>
                    <span>•</span>
                    <span className="text-base font-semibold tracking-tighter">{restInfo?.info?.sla?.slaString}</span>
                </div>
                <div className="text-base text-gray-500 truncate tracking-tight font-medium mt-1">{restInfo?.info?.cuisines.join(", ")}</div>
                <div className="text-base text-gray-500 tracking-tight font-medium">{restInfo?.info?.areaName}</div>
            </div>
        </div>
        </Link>
        </>
    )
}