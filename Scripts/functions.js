

function stampaCarte(jsonData) {
    let html = "";
    for (let i = 0; i < jsonData.length; i++) {
        const currentPic = jsonData[i];

        html += `
        <div class="col">
            <div class="bg-white p-4 pin-item">
                <img src="${currentPic.url}" class="card-img" alt="${currentPic.title}">
                <div>
                    <h2 class="title-card">${currentPic.title}</h2>
                    <p class="date-card">${currentPic.date}</p>
                </div>
            </div>
        </div>
        `;
    }
    cardContainer.innerHTML = html;
};