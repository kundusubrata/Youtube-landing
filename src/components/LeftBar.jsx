
const LeftBar = () => {
  return <div className="bg-gray-100 w-48 hidden md:block mt-3">
    <div className="p-3 mt-3 flex items-center rounded-md cursor-pointer hover:bg-blue-600 hover:text-white text-black" >
      <i className="fa-solid fa-house"></i>
      <span className="mx-4 font-bold">Home</span>
    </div>

    <div className="p-3 mt-3 flex items-center rounded-md cursor-pointer hover:bg-blue-600 hover:text-white text-black" >
      <i className="fa-solid fa-photo-film"></i>
      <span className="mx-4 font-bold">Shorts</span>
    </div>

    <div className="p-3 mt-3 flex items-center rounded-md cursor-pointer hover:bg-blue-600 hover:text-white text-black" >
      <i className="fa-solid fa-clapperboard"></i>
      <span className="mx-4 font-bold">Subscription</span>
    </div>

    <Line />

    <div className="p-3 mt-3 flex items-center rounded-md cursor-pointer hover:bg-blue-600 hover:text-white text-black" >
      <i className="fa-brands fa-square-youtube"></i>
      <span className="mx-4 font-bold">You</span>
    </div>

    <div className="p-3 mt-3 flex items-center rounded-md cursor-pointer hover:bg-blue-600 hover:text-white text-black" >
      <i className="fa-solid fa-clock-rotate-left"></i>
      <span className="mx-4 font-bold">History</span>
    </div>

    <Line />

    <div className="p-3 mt-3 flex items-center rounded-md text-black" >
      <span className="mx-4 font-bold">Explore</span>
    </div>

    <div className="p-3 mt-3 flex items-center rounded-md cursor-pointer hover:bg-blue-600 hover:text-white text-black" >
      <i className="fa-solid fa-fire"></i>
      <span className="mx-4 font-bold">Trending</span>
    </div>

    <div className="p-3 mt-3 flex items-center rounded-md cursor-pointer hover:bg-blue-600 hover:text-white text-black" >
      <i className="fa-solid fa-bag-shopping"></i>
      <span className="mx-4 font-bold">Shopping</span>
    </div>

    <div className="p-3 mt-3 flex items-center rounded-md cursor-pointer hover:bg-blue-600 hover:text-white text-black" >
      <i className="fa-solid fa-music"></i>
      <span className="mx-4 font-bold">Music</span>
    </div>

    <div className="p-3 mt-3 flex items-center rounded-md cursor-pointer hover:bg-blue-600 hover:text-white text-black" >
      <i className="fa-solid fa-radio"></i>
      <span className="mx-4 font-bold">Movies</span>
    </div>

    <div className="p-3 mt-3 flex items-center rounded-md cursor-pointer hover:bg-blue-600 hover:text-white text-black" >
      <i className="fa-solid fa-satellite-dish"></i>
      <span className="mx-4 font-bold">Live</span>
    </div>

    <div className="p-3 mt-3 flex items-center rounded-md cursor-pointer hover:bg-blue-600 hover:text-white text-black" >
      <i className="fa-regular fa-newspaper"></i>
      <span className="mx-4 font-bold">News</span>
    </div>

    <div className="p-3 mt-3 flex items-center rounded-md cursor-pointer hover:bg-blue-600 hover:text-white text-black" >
      <i className="fa-solid fa-trophy"></i>
      <span className="mx-4 font-bold">Sports</span>
    </div>

    <Line />
  </div>
}

export const Line = () => {
  return <div className="w-full bg-gray-200 h-px dark:bg-gray-700 pl-3 pr-3 opacity-20	">
    <div className="bg-red-600 h-0.5 dark:bg-gray-500" style={{ width: "100%" }}></div>
  </div>
}



export default LeftBar;
