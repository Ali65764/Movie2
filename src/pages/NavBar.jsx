import React, { useState } from 'react';
import { ROUTER } from "../constant/router";
import { Link, useLocation } from 'react-router-dom';
import { IoSunnyOutline } from "react-icons/io5";
import { GoMoon } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import { useDarkMode } from '../contexts/DarkModeContext';

export default function NavBar() {
  const { pathname } = useLocation();
  const { handleSwitch, dark } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <div className='bg-white py-2 font-poppin dark:bg-black'>
        <div className='container flex justify-between lg:justify-around p-1'>
          <Link to={ROUTER.Home} className='text-3xl lg:text-4xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-blue-700 to-gegared dark:from-blue-500 dark:to-gegagrey flex items-center'>
            MOVIE APP
          </Link>
          <div className='text-2xl mr-6 group flex items-center'>
            <div className='hidden md:flex'>
              <Link to={ROUTER.Home} className={`${pathname === ROUTER.Home ? "text-gegared dark:text-lightgreen hover:text-gegablue hover:dark:text-lightsky transition duration-500" : "text-gegablue dark:text-lightsky hover:text-gegared hover:dark:text-lightgreen"}`}>
                MOVIES
              </Link>
              <Link to={ROUTER.WatchList} className={`ml-7 ${pathname === ROUTER.WatchList ? "text-gegared dark:text-lightgreen hover:text-gegablue hover:dark:text-lightsky transition duration-500" : "text-gegablue dark:text-lightsky hover:text-gegared hover:dark:text-lightgreen"}`}>
                WATCHLIST
              </Link>
            </div>
            <button onClick={toggleMenu} className='md:hidden text-4xl text-gegared dark:text-lightsky flex items-center'>
              <GiHamburgerMenu />
            </button>
          </div>
          <button onClick={handleSwitch} className='text-5xl text-gegared flex items-center dark:text-lightsky'>
            {dark === "dark" ? <GoMoon /> : <IoSunnyOutline />}
          </button>
        </div>
        {menuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex flex-col items-center pt-24 text-center">
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-gegablue  text-4xl">
              <FaXmark className='font-extrabold'/>
            </button>
            <Link to={ROUTER.Home} className={`text-3xl py-4 ${pathname === ROUTER.Home ? "text-gegared dark:text-lightgreen hover:text-gegablue hover:dark:text-lightsky transition duration-500" : "text-gegablue dark:text-lightsky hover:text-gegared hover:dark:text-lightgreen"} transition duration-500`} onClick={toggleMenu}>
              MOVIES
            </Link>
            <Link to={ROUTER.WatchList} className={`text-3xl py- ${pathname === ROUTER.WatchList ? "text-gegared dark:text-lightgreen hover:text-gegablue hover:dark:text-lightsky transition duration-500" : "text-gegablue dark:text-lightsky hover:text-gegared hover:dark:text-lightgreen"} transition duration-500`} onClick={toggleMenu}>
              WATCHLIST
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
