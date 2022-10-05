import React, {useContext, useEffect} from 'react'
import { songDetails } from '../SongDetailsContextProvider'
import { apiHost } from '../variables'
import { updateSongDetails } from '../utilityFunctions'


function CenterItemCurrentlyPlaying(){
    const {currentlyPlaying, setCurrentlyPlaying, activePlaylist, setActivePlaylist} = useContext(songDetails)

    function handleFavoriteClick(){
        updateSongDetails(`
            ${apiHost}/musicInfo/${currentlyPlaying.id}`,
            {favorited: !currentlyPlaying.favorited},
            setCurrentlyPlaying
        )
    }

    useEffect(()=>{
        if(activePlaylist.name === "favorites"){
            fetch(`${apiHost}/musicInfo?_embed=comments&favorited=true`)
            .then(result => result.json())
            .then(data => setActivePlaylist(initial => ({name: "favorites", data: data})))
        }
    }, [currentlyPlaying])


    return (
        <div id="currently-playing">
            <div className="song-name">
                <h1>{currentlyPlaying.songName}</h1> 
                <i className={`fa fa-heart ${currentlyPlaying.favorited? 'fa-solid' : 'fa-regular'}`} id="favorite" onClick={()=>handleFavoriteClick()}></i>
            </div>

            <div id="playing-song-details">
                <p className="artist-name">{`- ${currentlyPlaying.songArtist}`}</p>
            </div>
        </div>        
    )
}

export default CenterItemCurrentlyPlaying