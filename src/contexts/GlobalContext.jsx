import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const GlobalContext = createContext();


const GlobalContextProvider =({children})=>{
    const [movies,setMovies] = useState([]);
    const [watchMovie, setWatchMovie] = useState([]);

    useEffect(()=>{
        const savedWatchMovie = JSON.parse(localStorage.getItem("movieArray")) || [];
        setWatchMovie(savedWatchMovie);
    },[]);

    const addWatchMovie = (movieId)=>{
        const addMovie = movies.find((movie)=>movie.imdbID === movieId);
        const existMovie = watchMovie.find((movie)=>movie.imdbID ===movieId);
        if(addMovie){
            if(existMovie){
                toast.warning("Movie has already been added!",{
                    autoClose:1500,
                });
            }
            else{
                const updatedMovie = [...watchMovie,{...addMovie}];
                setWatchMovie(updatedMovie);    
                localStorage.setItem("movieArray",JSON.stringify(updatedMovie));
                toast.success("Movie added successfully!"),{
                    autoClose:1500,
                }
            }
        }
        else{
            toast.error("Movie not found!",{
                autoClose:1500,
            })
        }
    };


    const isInMovie = (movieId)=>{
        const existMovie= watchMovie.find((movie)=>movie.imdbID === movieId);
        return existMovie
    };

    const removeMovie = (movieId)=>{
        const deletedMovie = watchMovie.filter((movie)=>movie.imdbID !== movieId);
        setWatchMovie(deletedMovie);
        localStorage.setItem("movieArray",JSON.stringify(deletedMovie));
        toast.success("Movie deleted successfully!",{
            autoClose:1500,
        })
    };

    const contextValue={
        setMovies,
        addWatchMovie,
        setWatchMovie,
        isInMovie,
        removeMovie,
        watchMovie,
    };


    return(
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    )
};


const useGlobalContext = ()=>useContext(GlobalContext)

export  {GlobalContextProvider,useGlobalContext};