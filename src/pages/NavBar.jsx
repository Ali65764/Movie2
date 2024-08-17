import React, { useState } from 'react';
import { ROUTER } from "../constant/router";
import { Link, useLocation } from 'react-router-dom';
import { IoSunnyOutline } from "react-icons/io5";
import { GoMoon } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import "../index.css";
import { useDarkMode } from '../contexts/DarkModeContext';

export default function NavBar() {
  const { pathname } = useLocation();
  const { handleSwitch, dark } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <div className='bg-white py-2 font-poppin dark:bg-black'>
        <div className='container flex justify-around p-1'>
          <Link to={ROUTER.Home} className='text-4xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-blue-700 to-gegared dark:from-blue-500 dark:to-gegagrey flex items-center'>
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
          <div className='md:hidden flex flex-col items-center bg-white dark:bg-black'>
            <Link to={ROUTER.Home} className={`py-2 ${pathname === ROUTER.Home ? "text-gegared dark:text-lightgreen hover:text-gegablue hover:dark:text-lightsky transition duration-500" : "text-gegablue dark:text-lightsky hover:text-gegared hover:dark:text-lightgreen"}`} onClick={toggleMenu}>
              MOVIES
            </Link>
            <Link to={ROUTER.WatchList} className={`py-2 ${pathname === ROUTER.WatchList ? "text-gegared dark:text-lightgreen hover:text-gegablue hover:dark:text-lightsky transition duration-500" : "text-gegablue dark:text-lightsky hover:text-gegared hover:dark:text-lightgreen"}`} onClick={toggleMenu}>
              WATCHLIST
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
