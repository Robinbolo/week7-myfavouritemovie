const container = document.querySelector(".container");
const movieTitle = document.querySelector(".userInputTitle");
const moviePosterUrl = document.querySelector(".userInputPosterUrl");
const btn = document.querySelector(".button");
const movieTitleToDisplay = document.querySelector(".favouriteMovieTitle");

let titleInStorage = localStorage.getItem("title");
let imageUrlInStorage = localStorage.getItem("imageUrl");

if(titleInStorage && imageUrlInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `url("${imageUrlInStorage}")`;
}


btn.addEventListener("click", () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    localStorage.setItem("title", movieTitleInput);
    localStorage.setItem("imageUrl", posterUrlInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage =`linear-gradient(rgb(54, 49, 49), rgba(77, 60, 60, 0.5)),
    url("${posterUrlInput}")`;
    movieTitle.value = ``;
    moviePosterUrl.value = ``;
});