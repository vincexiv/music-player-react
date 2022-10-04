import React, {useState} from "react";
import { apiHost, availablePlayableSongs, lastPlayedSong } from "../variables";
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
  const [activePlaylist, setActivePlaylist] = useQuery(`${apiHost}/musicInfo?_embed=comments&favorited=true`, "favorites")
  const [currentlyPlaying, setCurrentlyPlaying] = useState(lastPlayedSong)


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

  console.log("active playlist: ", activePlaylist)


  function handleMoveToCurrentlyPlaying(song){
    setCurrentlyPlaying(song)
  }


  return (
    <>
      <NavBar />

      <section className="container">
        <div id="main-content">
          <LeftItem />
          <CenterItem currentlyPlaying={currentlyPlaying} setCurrentlyPlaying={setCurrentlyPlaying}/>
          <RightItem activePlaylist={activePlaylist} handlePlaylistChange={handlePlaylistChange} handleMoveToCurrentlyPlaying={handleMoveToCurrentlyPlaying}/>
        </div>
      </section>

      <Footer />
    </>

  )
}

export default App
