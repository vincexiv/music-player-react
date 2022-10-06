import React, {useContext, useEffect, useRef} from 'react'
import { songDetails } from '../SongDetailsContextProvider'
import { apiHost } from '../variables'
import { updateSongDetails } from '../utilityFunctions'


function CenterItemCurrentlyPlaying(){
    const {currentlyPlaying, setCurrentlyPlaying, activePlaylist, setActivePlaylist} = useContext(songDetails)
    const heartIcon = useRef()

    function handleFavoriteClick(){
        const newNoOfLikes = songIsBeingFavorited()? currentlyPlaying.likes + 1 : currentlyPlaying.likes - 1

        updateSongDetails(`
            ${apiHost}/musicInfo/${currentlyPlaying.id}`,
            {favorited: !currentlyPlaying.favorited, likes: newNoOfLikes},
            setCurrentlyPlaying
        )
    }

    function songIsBeingFavorited(){
        return heartIcon.current.classList.contains('fa-regular')
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
                <i ref={heartIcon} className={`fa fa-heart ${currentlyPlaying.favorited? 'fa-solid' : 'fa-regular'}`} id="favorite" onClick={()=>handleFavoriteClick()}></i>
            </div>

            <div id="playing-song-details">
                <p className="artist-name">{`- ${currentlyPlaying.songArtist}`}</p>
            </div>
        </div>        
    )
}

export default CenterItemCurrentlyPlaying