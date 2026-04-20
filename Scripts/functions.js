
function stampaCarte(jsonData) {
    let html = "";
    for (let i = 0; i < jsonData.length; i++) {
        const currentPic = jsonData[i];

        html += `
        <div class="col board-item-wrapper">
            <div class="bg-white p-4 board-item">
                <img src="./imgs/pin.svg" class="pin-img" alt="">
                <img src="${currentPic.url}" class="card-img" alt="${currentPic.title}">
                <div class="card-description">
                    <h2 class="title-card">${currentPic.title}</h2>
                    <p class="date-card">${currentPic.date}</p>
                </div>
            </div>
        </div>
        `;
    }
    cardsContainer.innerHTML = html;
};

function addImg(event) {
    if (event.target.classList.contains("card-img")) {
        const img = event.target;
        mod.classList.remove("d-none");
        mod.innerHTML = `
            <div class="mod-container">
                <button class="btn btn-danger overlay-close-btn my-5"> Back </button>
                <div class="bg-white p-4">
                    <img src="${img.src}" class="mod-img img-fluid">
                </div>
            </div>
        `
    }
};

function closeOverlay(event) {
   if (event.target.classList.contains("overlay-close-btn")) {
       mod.classList.add("d-none");
   };
};