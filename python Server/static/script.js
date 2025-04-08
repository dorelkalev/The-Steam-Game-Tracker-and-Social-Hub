//Integrate the API here and instantiate variables based on data from the API. For example:

//Integration:
const gameSearch = async() => {

const url = 'https://Whatever the Steam game list JSON is';
const options = {method: 'GET'};

const response = await fetch(url, options);
const result = await response.text();
const gameObj = JSON.parse(result);

//Get the HTML elements by ID to use for Javascript logic:
const gameTitle = document.getElementById("game-title");
const gameImage = document.getElementById("game-image");
const gamePlaytime = document.getElementById("game-playtime");
const gameCompletion = document.getElementById("game-completion");
const friendsPlayingGame = document.getElementById("friends-playing-game");

//gameObj variables
gameTitle.innerHTML = gameObj.game;
gameImage.src = gameObj.image;





}







function openNav() {
    document.getElementById("mySidebar").style.left = "0";
    document.body.style.cursor = "none";
}

function closeNav() {
    document.getElementById("mySidebar").style.left = "-250px";
    document.body.style.cursor = "default";
}

const fadeEffect = document.querySelector('.fade-effect');
fadeEffect.style.animation = 'fadeInOut 3s infinite';

function gameSearch() {
    var gameTitle = document.getElementById("game-title");
    var gameImage = document.getElementById("game-image");
    var gamePlaytime = document.getElementById("game-playtime");
    var gameCompletion = document.getElementById("game-completion");
    var friendPlayedGame = document.getElementById("friends-playing-game");

   /*if (gameTitle is inside account's Steam games owned list) display game contents. */

}
function showFriendInfo() {

    var gamesPlayed = document.getElementById("gamesPlayed");
    var totalPlaytime = document.getElementById("totalPlaytime");
    var currentlyPlaying = document.getElementById("currentlyPlaying");

    if (gamesPlayed.style.display === "none") {
        gamesPlayed.style.display = "block";
        totalPlaytime.style.display = "block";
        currentlyPlaying.style.display = "block";
    }

    else {
        gamesPlayed.style.display = "none";
        totalPlaytime.style.display = "none";
        currentlyPlaying.style.display = "none";
    }
}

function communitySearch() {




}