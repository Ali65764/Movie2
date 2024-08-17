import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetSingleMovie } from '../api/Request'
import NavBar from '../pages/NavBar'
import { Link } from 'react-router-dom'
import { ROUTER } from "../constant/router"
import { IoIosArrowDropleftCircle } from "react-icons/io";
import Footer from '../pages/Footer'
function GoDetailsPage() {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieDetails = await GetSingleMovie(imdbID)
        setMovie(movieDetails)
      }
      catch (error) {
        console.log(error.message);

      }
    };
    fetchMovie();
  }, [imdbID])

  if (!movie) {
    return <p className='text-4xl text-red-600 text-center mt-12'>Loading...</p>;
  }

  return (
    <>
      <NavBar />

      <div>
        <div className='bg-white py-5 dark:bg-black'>
          <div className='max-w-md lg:max-w-3xl lg:flex  border rounded-lg shadow bg-gray-800 dark:bg-megalightsky border-gray-600 mx-auto'>
            <img src={movie.Poster} alt={movie.Title} className='w-full lg:w-1/2 object-cover h-[550px]' />
            <div className='group py-3 w-full lg:w-1/2 text-lightwhite flex flex-col items-center text-lg lg:text-xl'>
              <h3 className='text-lightpink dark:text-gegared text-3xl font-proximanova'>{movie.Title}</h3>
              <p className='mt-6 font-semibold dark:text-gegablack'>Year: {movie.Year}</p>
              <p className='mt-6 font-semibold dark:text-gegablack'>Rated: {movie.Rated}</p>
              <p className='mt-6 font-semibold dark:text-gegablack'>Released: {movie.Released}</p>
              <p className='mt-6 font-semibold text-green-600'>Imdb: {movie.imdbRating}</p>
              <p className='mt-6 font-semibold dark:text-gegablack'>Runtime: {movie.Runtime}</p>
              <p className='mt-6 font-semibold dark:text-gegablack'>Genre: {movie.Genre}</p>
              <p className='mt-6 font-semibold dark:text-gegablack'>Director: {movie.Director}</p>
              <p className='mt-6 font-semibold dark:text-gegablack'>Plot: {movie.Plot.slice(0, 20)}...</p>
              <Link className='mt-6 text-[43px] flex items-center' to={ROUTER.Home}>
                <IoIosArrowDropleftCircle className='dark:text-gegablack hover:dark:text-blue-400 hover:text-blue-400 duration-500' />
                <span className='text-xl text-sky-300 dark:text-sky-500 ml-2 hover:text-sky-200 duration-300'>Go Back</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}




export default GoDetailsPage