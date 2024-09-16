
const SearchBar = () => {

  return (
    <>
      <form>
        <div className="w-96 hidden sm:flex text-gray-900 border border-black rounded-3xl p-1 pl-3 text-sm pr-2">
          <input id="default-search" className="w-full text-black border-none outline-none" placeholder="Search" required />
          <button className="text-gray-400 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </button>
        </div>
        <div className="sm:hidden flex justify-center items-center w-24 text-gray-900 border border-black rounded-3xl">
          <input id="default-search" className="w-full text-xs text-black border-none outline-none mx-2" placeholder="Search" required />
          <button className="text-gray-400 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </button>
        </div>

      </form>
    </>
  )
}

export default SearchBar;
