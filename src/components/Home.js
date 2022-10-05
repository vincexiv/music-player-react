import React, {useContext} from "react";
import { songDetails } from "../SongDetailsContextProvider";
import { apiHost } from "../variables";
import LeftItem from "./LeftItem";
import RightItem from "./RightItem";
import CenterItem from "./CenterItem";


function Home(){
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
        <section className="container">
          <div id="main-content">
            <LeftItem />
            <CenterItem/>
            <RightItem activePlaylist={activePlaylist} handlePlaylistChange={handlePlaylistChange} />
          </div>
        </section>
        </>
  
    )
}


export default Home