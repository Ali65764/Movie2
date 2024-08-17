import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';
import NavBar from '../pages/NavBar';
import Footer from '../pages/Footer';
import Search from '../search/search';


function WatchList() {
  const {
    watchMovie,
    setWatchMovie,
    removeMovie,
  } = useGlobalContext();

  const [searchTerm, setSearchTerm] = useState('');
  const resetSearch = () => {
    fetchData();
    setSearchTerm(' ')
  }

  useEffect(() => {
    const savedMovie = JSON.parse(localStorage.getItem("movieArray") || "[]");
    setWatchMovie(savedMovie);
  }, [setWatchMovie])

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleReset = () => {
    setSearchTerm('');
  };

  const filteredMovies = watchMovie.filter(movie =>
    movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <NavBar />

      <div className=''>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} resetSearch={resetSearch} />


        {filteredMovies.length === 0 && (
          <h2 className="dark:bg-black text-gegared text-3xl pl-44 pt-24">Your Watchlist Is Empty!!!</h2>
        )}

        <div className="flex flex-wrap justify-center gap-12  pt-12 dark:bg-black">
          {filteredMovies.length > 0 && filteredMovies.map((movie, index) => (
            <div key={index} className='group relative overflow-hidden font-bold'>
              <img
                className='rounded  h-[440px] w-[300px] group-hover:scale-110 group-hover:opacity-55 duration-500'
                src={movie.Poster}
                alt={movie.Title}
              />
              <div className='absolute bottom-8 px-8'>
                <h2 className='text-[22px] text-gegagrey group-hover:text-yellow-500 group-hover:mb-12 font-poppin duration-500'>{movie.Title}
                <span className='text-gegagrey group-hover:text-green-600 duration-500 ml-3'>{movie.Year}</span>
                </h2>
              </div>
              <div className='group absolute bottom-2 opacity-0 flex space-x-8 group-hover:opacity-100 duration-500'>
                <button
                  className='ml-6 mb-5 text-sm bg-gegablue text-white py-2 px-3 rounded  hover:bg-gegared duration-500'
                  onClick={() => removeMovie(movie.imdbID)}
                >
                  Delete From Watchlist
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default WatchList; 