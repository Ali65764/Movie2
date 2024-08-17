import React, { useState, useEffect } from 'react'
import NavBar from '../pages/NavBar'
import bgimage from "../assets/batman.jpg"
import { GetMovies, GetSingleMovie, GetSearch } from '../api/Request';
import { Link } from 'react-router-dom';
import { ROUTER } from "../constant/router"
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import EyeModal from "../Modal/EyeModal"
import Search from '../search/search';
import Footer from '../pages/Footer';
import { useGlobalContext } from '../contexts/GlobalContext';
export default function Home() {

  const {
    addWatchMovie,
    isInMovie,
    setMovies,
  } = useGlobalContext();




  const [notFound, setNotFound] = useState(false);
  const [movies, setLocalMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const fetchData = async () => {
    try {
      const response = await GetMovies();
      if (response && response.Search) {
        setMovies(response.Search)
        setLocalMovies(response.Search);
        setNotFound(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenModal = async (movie) => {
    try {
      const movieDetails = await GetSingleMovie(movie.imdbID);
      setSelectedMovie(movieDetails);
      setShowModal(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  const handleSearch = async (term) => {
    try {
      const response = await GetSearch(term);
      if (response && response.Search) {
        setLocalMovies(response.Search);
        setNotFound(false);
      } else {
        setLocalMovies([]);
        setNotFound(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const resetSearch = () => {
    fetchData();
    setSearchTerm(' ')
  }

  useEffect(() => {
    if (searchTerm) {
      handleSearch(searchTerm);
    } else {
      fetchData();
    }
  }, [searchTerm]);

  return (
    <>
      <NavBar />
      <div className="group relative bg-cover h-[400px] md:h-[550px]">
  <img 
    src={bgimage} 
    alt="batman" 
    className="h-full w-full object-cover" 
  />
  <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-gegared dark:to-blue-900">
    <div className="px-4 md:px-8 lg:pl-40 md:pl-0 mb-6 w-full md:w-[700px] lg:w-[900px] group-hover:mb-20 transition-all duration-1000">
      <p className="text-lightpink group-hover:mb-1 transition duration-1000 dark:text-lightgreen text-sm md:text-base lg:text-lg">
        Action, Drama, Thriller, Horror
      </p>
      <p className="text-2xl md:text-4xl lg:text-6xl text-lightblue">
        Join Us
      </p>
      <p className="text-lightblue mt-4 text-xs md:text-sm lg:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat at cumque maiores non consequatur veniam nesciunt mollitia! Sapiente culpa deleniti quis quam nam voluptas id, accusamus iure quisquam, officiis debitis iusto earum laudantium alias harum ad neque dolor ipsa non? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed hic culpa incidunt eveniet, reiciendis aperiam nihil nulla veniam maxime mollitia expedita natus cupiditate accusamus voluptas quasi dolore soluta consequuntur quaerat!
      </p>
    </div>
  </div>
</div>


      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} resetSearch={resetSearch} />

      <div className='flex flex-wrap justify-center gap-12 pt-12 maincards dark:bg-black'>
        {notFound ? (
          <p className='text-gegared font-bold text-4xl mt-12 '>Not Found...</p>
        ) : (
          movies.map((movie, index) => (
            <div key={index} className='group relative overflow-hidden font-bold'>
              <img
                className='h-[380px] w-[270px] group-hover:scale-110 group-hover:opacity-55 duration-500 '
                src={movie.Poster}
                alt={movie.Title}
              />
              <div className='absolute bottom-8 px-8'>
                <h2 className='text-[22px] text-gegagrey group-hover:text-yellow-500 group-hover:mb-12 font-poppin duration-500'>
                  {movie.Title.slice(0, 14)}
                  <span className='text-gegagrey group-hover:text-green-600 duration-500 ml-3'>{movie.Year}</span>
                </h2>
                <div className='group absolute bottom-2 opacity-0 flex space-x-8 group-hover:opacity-100 duration-500'>
                  <button className='text-gegared text-[35px] hover:opacity-60' onClick={() => addWatchMovie(movie.imdbID)}>
                    {isInMovie(movie.imdbID) ? (
                      <FaHeart/>
                    ) : (
                      <FaRegHeart />
                    )} 
                  </button>
                  <button onClick={() => handleOpenModal(movie)} className='text-gegablue text-[40px] hover:opacity-60'><IoEyeOutline /></button>
                  <button className='text-[43px] text-gegablue hover:opacity-60'>
                    <Link to={`${ROUTER.GoDetailsPage}/${movie.imdbID}`}>
                      <IoIosArrowDroprightCircle />
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <Footer />
      <EyeModal show={showModal} handleClose={handleCloseModal} movie={selectedMovie} />
    </>
  );
}
