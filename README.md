# Music Player React App

## Brief Description
This is a music website, named VintageBeats. It is a place where you get to explore some of the most music gems from the past and some of the modern music that have drawn a huge inspiration from the classic awesome beats. Here are the important links that you will find in this readme.
1. [Project Live Link](https://633f2a07c0a79e054a601ece--superlative-valkyrie-a494da.netlify.app)
2. [music information data](https://music-player555.herokuapp.com/musicInfo): I used this to provide the list of songs that I displayed on various playlists such as blues/jazz and blues/rock
3. [music comments](https://music-player555.herokuapp.com/comments): For each song I fetched, I embedded the comments. You will notice that each comment has a songId, that shows which song this comment belongs to
3. [music comments](https://music-player555.herokuapp.com/users): One can only log in using the credentials in this list. When logging in, the input is checked to see if it merges with the one in the database (this list) and if no match is found, logging in fails.
4. [Live demo of the project](#)
5. [Songsterr publick API](http://www.songsterr.com/a/ra/songs): I used this to fetch songs for the recommended for you section. Songs were fetched each time the song in the "currentlyPlaying" section changed

## Date of Current Version
October 7, 2022

## Live Link
You can see a live demo of by visiting [this link](https://633f2a07c0a79e054a601ece--superlative-valkyrie-a494da.netlify.app/).

## Live Demo
Watch the project in action through this [demo video]. There, you will see what you can do when you open the app through the  live link shared above. Some of those things are discussed below too, so be sure to check them out.

## Project Owner
**Vincent Makokha**

## Description
This project is an improvement of a similar project I did sometimes back. Find the github repo for the original project [here](https://github.com/VinceXIV/music-player). The improvement has been done by using React in stead of vanilla JavaScript. Doing this is beneficial in many ways including increased productivity. Some of the features of react used in this project include;
### 1. Components
The UI was broken down into five main components; navbar, footer, right item, center, and the left item. The center, and left items were in turn made up of several subcomponents each
### 2. props
Props were used to pass down objects from parent to child components. Sometimes this were just objects, sometimes callback functions used to handle certain events in child components
### 4. Hooks
Some of the hooks used are useEffect, useContext, useRef, useState etc.
I also created a few custom hooks to handle certain scenarios
### 5. React Context
Some elements were just better handled by creating a context and wrapping some compoments in it. For instance, the object "currentlyPlaying" which shows the music item that is active and in the "currently playing" section at the center of the page, is needed by nearly every component in this app. Using props to handle this made the code feel cluttered and error prone. creating a context for it, and a few other function brought back sanity to the code.
### 6. Routing
This was done using **react-router-dom**. Thus, even though this was a single page application, routing mechanisms made it feel like it's multiple pages. Clicking on certain items such as the logout changed the content shown as well as the url. Routing also made it possible for redirecting. For instance, clicking on the homepage which ordinarily opens homepage would redirect one to log in if they are not logged in yet.
"Normal" vanilla javascript functionalities were also performed including event listening, the CRUD operations, etc. Two apis have been used, one of which I created and hosted it on Heroku. That one contained information about the users, songs, and comments. Find out more about the data by following this [link](https://music-player555.herokuapp.com).

## What You Can Do In This App

### Sign In
This is the first page you'll see when you open the app. Don't worry if you don't have an account. You can just create one by clicking on the "go to sign up" then sign in with your newly created account. If that seems like a lot of work, I provided a link above to show the existing users in the database. [Here is the link](https://music-player555.herokuapp.com/users) again. Just use one of the username with corresponding password and try to log in.

### Sign Out /Log Out
### Play Songs
Like the original project, only 5 songs are playable;
1. **Invitation to the blues - Claudia Bettinaglio**
2. **Feels Like Rain - Buddy guy**
3. **Don't Write Me Off - Mighty Sam McClain**
4. **I remember you - Eilen Jewell**
5. **A Virus Called The Blues - Billy Jenkins**

Find more functionalities from the readme in the initial version of the project which you can find [here](https://github.com/VinceXIV/music-player)

## Built With
HTML, CSS, & JavaScript (React)

## Prerequisites
You'll only need a browser to interact with the project using the livelink provided above. However, if you would like to make a few changes to the project, then you might want to know about the dependancies and set up instructions, both of which are discussed below
### Dependancies
The project uses React so you'll need to set up node, which will enable you to run commands such as `npm start` to get the project running in your browser
### Setup Instructions
1. Clone the repo to get it locally on your computer. You can also fork the repo and get your own copy that you can clone
2. Navigate to the relevant directory and open it with your preferred editor
3. Run `npm install` to install all required modules
4. Open another terminal in the same directory and run `npm run server`
5. Now you have the project working. You can make modifications to the files and see their effect on the page opened in the browser when you clicked `npm start`

## Support and Contact Details
name: Vincent Makokha
email: makokhavomondi@gmail.com

## License
MIT License

Copyright (c) 2022 VintageBeats

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.