import { Routes, Route } from "react-router-dom"
import { ROUTER } from "./constant/router"
import Home from "./components/Home"
import WatchList from "./components/WatchList"
import GoDetailsPage from "./components/GoDetailsPage"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {

  return (
    <>
      <Routes>
        <Route path={ROUTER.Home} element={<Home />} />
        <Route path={ROUTER.WatchList} element={<WatchList/>}/>
        <Route path={`${ROUTER.GoDetailsPage}/:imdbID`} element={<GoDetailsPage />} />
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
