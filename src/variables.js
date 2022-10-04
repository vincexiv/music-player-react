const apiHost = "https://music-player555.herokuapp.com";

const availablePlayableSongs = {
    "Invitation To The Blues": new Audio('./assets/music/blues-jazz/Claudia Bettinaglio - Invitation To The Blues.mp3'),
    "Feels Like Rain": new Audio('./assets/music/blues-jazz/03 Feels Like Rain.mp3'),
    "Don't Write Me Off": new Audio("./assets/music/blues-jazz/Don't Write Me Off.mp3"),
    "I Remember You": new Audio('assets/music/blues-jazz/Eilen Jewell - I Remember You.mp3'),
    "A Virus Called The Blues": new Audio('assets/music/blues-rock/Billy Jenkins - A Virus Called The Blues.m4a')
}

let lastPlayedSong = {
        id: 7,
        playList: "bluesJazz",
        songName: "Invitation To The Blues",
        songArtist: "Claudia Bettinaglio",
        path: "./assets/songs/blues-jazz/Claudia Bettinaglio - Invitation To The Blues.mp3",
        banner: "",
        likes: 422,
        favorited: true,
        comments: [
            {
            id: 1,
            commenterName: "Romulo",
            content: "Awesome!"
            },
            {
            id: 2,
            commenterName: "Antonio",
            content: "I think of her every time I hear this song!"
            }
        ]
    }

export {availablePlayableSongs, apiHost, lastPlayedSong}