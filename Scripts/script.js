const apiUrl = "https://lanciweb.github.io/demo/api/pictures/";
let cardContainer = document.querySelector("#cards-container");

fetch(apiUrl)
    .then(function (datiApi) {
        return datiApi.json();
    })
    .then(function (jsonData) {
        console.log(jsonData);
        stampaCarte(jsonData);
    })
    .catch(error => {
        console.error(error);
    });
    