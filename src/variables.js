const apiHost = "https://music-player555.herokuapp.com";

const availablePlayableSongs = {
    "Invitation To The Blues": new Audio('./assets/music/blues-jazz/Claudia Bettinaglio - Invitation To The Blues.mp3'),
    "Feels Like Rain": new Audio('./assets/music/blues-jazz/03 Feels Like Rain.mp3'),
    "Don't Write Me Off": new Audio("./assets/music/blues-jazz/Don't Write Me Off.mp3"),
    "I Remember You": new Audio('assets/music/blues-jazz/Eilen Jewell - I Remember You.mp3'),
    "A Virus Called The Blues": new Audio('assets/music/blues-rock/Billy Jenkins - A Virus Called The Blues.m4a')
}

export {availablePlayableSongs, apiHost}