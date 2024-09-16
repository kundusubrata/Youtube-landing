import SearchBar from "./SearchBar";

const AppBar = () => {
  return (
    <>
      <div className="flex justify-between items-center mx-8 mt-2 ">
        <div className="text-lg sm:text-2xl font-bold">
          YouTube
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="">
          <button className="bg-gray-100 text-black text-sm sm:text-base font-semibold rounded-md hover:bg-blue-600 shadow-lg hover:shadow-xl cursor-pointer py-1 px-1.5 sm:py-1.5 sm:px-2 outline outline-2 outline-black">
            Sign in
          </button>
        </div>

      </div>
    </>
  )
}

export default AppBar;
