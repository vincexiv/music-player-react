import React, {useRef} from "react";
import { apiHost, availablePlayableSongs } from "../variables";
import { useQuery } from "../customHooks";
import NavBar from "./NavBar";
import LeftItem from "./LeftItem";
import RightItem from "./RightItem";
import CenterItem from "./CenterItem";
import Footer from "./Footer"
import '../css/style.css'
import '../css/index.css'
import '../css/responsive.css'
import '../css/range-and-scrollbar.css'

function App(){
  const [activePlaylist, setActivePlaylist] = useQuery(`${apiHost}/musicInfo?favorited=true`, "favorites")

  return (
    <>
      <NavBar />

      <section className="container">
        <div id="main-content">
          <LeftItem />
          <CenterItem />
          <RightItem activePlaylist={activePlaylist}/>
        </div>
      </section>

      <Footer />
    </>

  )
}

export default App
