import React, {useContext} from "react";
import { songDetails } from "../SongDetailsContextProvider";
import { apiHost } from "../variables";
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
  const {activePlaylist, setActivePlaylist} = useContext(songDetails)


  function handlePlaylistChange(newPlaylist){
    if(newPlaylist === "favorites"){
      fetch(`${apiHost}/musicInfo?_embed=comments&favorited=true`)
        .then(result => result.json())
        .then(data => setActivePlaylist({name: newPlaylist, data: data}))
    }else{
      fetch(`${apiHost}/musicInfo?_embed=comments&playList=${newPlaylist}`)
        .then(result => result.json())
        .then(data => setActivePlaylist({name: newPlaylist, data: data}))
    }
  }


  return (
    <>
      <NavBar />

      <section className="container">
        <div id="main-content">
          <LeftItem />
          <CenterItem/>
          <RightItem activePlaylist={activePlaylist} handlePlaylistChange={handlePlaylistChange} />
        </div>
      </section>

      <Footer />
    </>

  )
}

export default App
