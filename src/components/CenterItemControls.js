import React, {useContext, useEffect, useState, useRef} from 'react'
import { songDetails } from '../SongDetailsContextProvider'
import { availablePlayableSongs } from '../variables'

function CenterItemControls(){
    const {currentlyPlaying, userDetails} = useContext(songDetails)
    const [songProgress, setSongProgress] = useState(0)
    const playPauseIcon = useRef()
    const intervalId = useRef()

    
    // Make the play/pause button show whether the song on the currently playing component is playing
    useEffect(() =>{
        if(isCurrentlyPlaying()){
            playPauseIcon.current.classList.add("fa-circle-pause")
            playPauseIcon.current.classList.remove("fa-circle-play")
            showSongProgress()
        }else{
            playPauseIcon.current.classList.remove("fa-circle-pause")
            playPauseIcon.current.classList.add("fa-circle-play")
            setSongProgress(0)
            clearInterval(intervalId.current)
        }
    }, [currentlyPlaying])

    function isCurrentlyPlaying(){
        for(const audioName in availablePlayableSongs){
            if(!availablePlayableSongs[audioName].paused){
                return currentlyPlaying.songName === audioName
            }
        }

        return false
    }


    function pauseAllOtherPlayingSongs(){
        for(const audio in availablePlayableSongs){
            if(!audio.paused){
                availablePlayableSongs[audio].pause()
            }
        }
    }

    function showSongProgress(){
        intervalId.current = setInterval(()=>{
            const songExistsAndIsPlayable = Boolean(availablePlayableSongs[currentlyPlaying.songName])
            const playTime = (songExistsAndIsPlayable ? availablePlayableSongs[currentlyPlaying.songName].currentTime : 0)
            const totalTime = (songExistsAndIsPlayable ? availablePlayableSongs[currentlyPlaying.songName].duration : 1)
            setSongProgress(playTime/totalTime*100)
            console.log(songProgress)
        }, 100)
    }

    function songIsPlayable(songName){
        return Boolean(availablePlayableSongs[songName])
    }

    function playPauseSong(event){
        if(playPauseIcon.current.classList.contains("fa-circle-play")){
            pauseAllOtherPlayingSongs()
            showSongProgress()
            availablePlayableSongs[currentlyPlaying.songName].play()
            playPauseIcon.current.classList.remove("fa-circle-play")
            playPauseIcon.current.classList.add("fa-circle-pause")
        }else if(playPauseIcon.current.classList.contains("fa-circle-pause")){
            clearInterval(intervalId.current)
            availablePlayableSongs[currentlyPlaying.songName].pause()
            playPauseIcon.current.classList.remove("fa-circle-pause")
            playPauseIcon.current.classList.add("fa-circle-play")            
        }
    }



    return (
        <>
            <input type="range" start="0" end="100" value={songProgress} id="song-progress" />
            <div id="controls">
                <i className="fa-solid fa-backward-step fa-1.5x"></i>
                <i className="fa fa-solid fa-circle-play fa-1.5x" id="play-pause-button" ref={playPauseIcon} onClick={(event)=>{playPauseSong(event)}}></i>
                <i className="fa-solid fa-circle-pause display-none fa-1.5x"></i>
                <i className="fa-solid fa-forward-step fa-1.5x"></i>
            </div>    
        </>    
    )    
}

export default CenterItemControls