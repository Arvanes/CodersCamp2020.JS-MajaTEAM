// import 'regenerator-runtime/runtime' //async/await with Parcel
// import {App} from "./app/App";

import {
    player
} from "./player.js";

// const ONE_SECOND_MILLIS = 1000;
// const SW_API_BASE_URL = process.env.SW_API_BASE_URL || "https://swapi.dev/api";
// const QUIZ_MAX_TIME = process.env.QUIZ_MAX_TIME_SECONDS ? process.env.QUIZ_MAX_TIME_SECONDS * ONE_SECOND_MILLIS : 120 * ONE_SECOND_MILLIS;

// window.onload = () => App({options: {swApiBaseUrl: SW_API_BASE_URL, quizMaxTime: QUIZ_MAX_TIME}})

//deklaracje divów
const divStart = document.getElementById("div-start");
const divPlay = document.getElementById("div-play");
const divMenu = document.getElementById("div-menu");
const divCategories = document.getElementById("div-categories");
const divQuiz = document.getElementById("div-quiz");
const divRules = document.getElementById("div-rules");
const divHighscores = document.getElementById("div-highscores");

//deklaracja przycisków
const btnPlay = document.getElementById("button-play");
const btnNext = document.getElementById("button-next");
const btnStart = document.getElementById("button-start");
const btnStartQuiz = document.getElementById("button-startquiz");
const btnMainMenu = document.getElementById("button-mainmenu");
const btnRules = document.getElementById("button-rules");
const btnHighscores = document.getElementById("button-highscores");

btnPlay.addEventListener('click', () => {
    divPlay.style.display = "none";
    divStart.style.display = "block";
})

btnNext.addEventListener('click', () => {
    const userNickname = document.getElementById("nickname").value;
    if (userNickname.length >= 3) {
        player.playerName = userNickname;
        divStart.style.display = "none";
        divMenu.style.display = "block";
    } else {
        alert('Name to short!')
    }
})

btnStart.addEventListener('click', () => {
    divMenu.style.display = "none";
    divCategories.style.display = "block";
})

btnStartQuiz.addEventListener('click', () => {
    divCategories.style.display = "none";
    divQuiz.style.display = "flex";

})

btnRules.addEventListener('click', () => {
    divMenu.style.display = "none";
    divRules.style.display = "flex";
})

btnHighscores.addEventListener('click', () => {
    divMenu.style.display = "none";
    divHighscores.style.display = "flex";
})

btnMainMenu.addEventListener('click', () => {
    divHighscores.style.display = "none";
    divMenu.style.display = "flex";
})

//Funkcja klik, może się przyda
// const cbox = document.querySelectorAll(".answer");

//  for (let i = 0; i < cbox.length; i++) {
//      cbox[i].addEventListener("click", function() {
//        console.log('Hello');
//      });
//  }