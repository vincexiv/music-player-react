import React, {useContext, useEffect, useRef} from 'react'
import { songDetails } from '../SongDetailsContextProvider'
import { useQuery } from '../customHooks'
import { apiHost } from '../variables'
import PlaylistItem from './RightItemPlaylistItem'

function RecommendedForYou(){
    const {currentlyPlaying, setCurrentlyPlaying} = useContext(songDetails)
    const [recommendedForYou, setRecommendedForYou] = useQuery(`${apiHost}/musicInfo?playList=recommendedForYou`, "recommendedForYou")

    useEffect(()=>{
        // Update Songs on Recommended for you
        fetch(`http://www.songsterr.com/a/ra/songs/byartists.json?artists="${currentlyPlaying.songArtist}"`)
        .then(result => result.json())
        .then(data => {
            const randomStartPosition = getRandomStartPosition(data.length)
            const ourPick = data.slice(randomStartPosition, randomStartPosition + 3)

            const dataObjects = createSongObject(ourPick)
            const newRecommendedForYou = [...recommendedForYou.data]
            for(const songData of dataObjects){
                newRecommendedForYou.push(songData)
                newRecommendedForYou.shift()
            }

            setRecommendedForYou({...newRecommendedForYou, data: newRecommendedForYou})
        })
    }, [currentlyPlaying])

    console.log("recommended for you", recommendedForYou)


    function getRandomStartPosition(maxEndPosition){
        const maxStartPosition = maxEndPosition - 3 //because we are only picking 3 songs in what will be returned
        return Math.floor(Math.random()*maxStartPosition)
    }

    function createSongObject(songs){
        const result = []
        for(const song of songs){
            result.push(
                {
                    playList: "recommendedForYou",
                    songName: song.title,
                    songArtist: song.artist.name,
                    path: "",
                    banner: "",
                    likes: getRandomLikeCount(),
                    favorited: false,
                    comments: []
                }
            )
        }

        return result
    }


    function getRandomLikeCount(){
        return parseInt((Math.random() * 500))
    }

    return (
        <div className="bottom">
            <h1>Recommended For You</h1>
            <ul id="recommended-for-you">{recommendedForYou.data.map(songData => (<PlaylistItem key={songData.id} songData={songData}/>))}</ul>
        </div>
    )
}

export default RecommendedForYou