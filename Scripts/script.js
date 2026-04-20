const apiUrl = "https://lanciweb.github.io/demo/api/pictures/";
let cardsContainer = document.querySelector("#cards-container");
let mod = document.querySelector("#mod");

fetch(apiUrl)
    .then(function (datiApi) {
        return datiApi.json();
    })
    .then(function (jsonData) {
        // console.log(jsonData);
        stampaCarte(jsonData);
    })
    .catch(error => {
        console.error(error);
    });

cardsContainer.addEventListener("click", addImg);
mod.addEventListener("click", closeOverlay);