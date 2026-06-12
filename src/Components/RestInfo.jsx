

export default function RestInfo({restData}){


    return(
        <>
        <div className="flex justify-between w-full mb-2 pb-2">
            <div className="w-[70%]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-green-700"
                >
                    <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <circle
                        cx="12"
                        cy="12"
                        r="5"
                        fill="currentColor"
                    />
                </svg>
                <p className="text-xl text-gray-700 font-semibold mb-1 tracking-tighter">{restData?.name}</p>
                <p className="font-medium text-lg">{"₹"+('defaultPrice' in restData ? restData?.defaultPrice/100:restData?.price/100)}</p>
                <div className="flex items-center gap-0.5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#15803d"
                        className="w-4 h-4"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.258 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.372 21.18c-.996.608-2.231-.289-1.96-1.425l1.258-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="text-green-700">{restData?.ratings?.aggregatedRating?.rating}</span>
                    <span>{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
                </div>
                <p className="text-justify mt-2 text-gray-500 tracking-tight line-clamp-2">{restData?.description}</p>
            </div>
            <div className="w-[25%] relative">
                <img className="w-full h-45 object-cover rounded-3xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData?.imageId} />
                <button className="absolute left-1/2 bottom-4 translate-y-1/2 -translate-x-1/2 border-white rounded-2xl shadow-md text-lg text-green-600 bg-white px-8 py-2">Add</button>
            </div>

        </div>
        <hr className="mb-6 mt-2"/>
        </>
    )
}