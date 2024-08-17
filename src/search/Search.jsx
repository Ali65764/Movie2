import React from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";

function Search({ searchTerm, setSearchTerm,resetSearch }) {
  return (
    <div className='flex justify-center pt-16 group bg-white dark:bg-black  '>
    <input type="text" placeholder='Search Movies' className='dark:text-white border-b-2 dark:bg-black border-red-500 dark:border-blue-400 focus:outline-none focus:border-red-500 focus:border-l-0 focus:border-r-0 focus:border-t-0' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
    <div className='mt-2 text-gegared dark:text-blue-400 opacity-0 group-hover:opacity-100 transition duration-500'>
      <FaMagnifyingGlass />
    </div>
    <button className='ml-2 text-gegared dark:text-blue-400 text-xl hover:bg-red-200 hover:dark:bg-sky-100 rounded px-4 ' onClick={resetSearch}>Reset</button>
  </div>
  );
}

export default Search;
  