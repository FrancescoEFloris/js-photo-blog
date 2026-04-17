const apiUrl = "https://lanciweb.github.io/demo/api/pictures/";



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
    