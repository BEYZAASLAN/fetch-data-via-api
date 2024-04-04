async function getCards() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
}
function createCard(user) {
    const newCard = document.createElement("div");
    newCard.classList.add("col-lg-3", "mb-4");
    newCard.style.border = "none"; // border'ı none yapmak için style özelliğini kullanın

    const randomColor = getRandomColor(); // Rastgele bir renk oluştur
    newCard.style.backgroundColor = randomColor;  
    newCard.innerHTML = `
        <div>
          <div class="card-body text-left text-white py-auto">
            <h5 class="card-title"><b><b>${user.name}</b></b></h5>
            <h6 class="text-center m-2">TEMEL BİLGİLER</h6>
            <p class="card-text "><strong class="text-black"><i class="bi bi-envelope-open-heart mx-1"></i> Email:</strong> ${user.email}</p>
            <p class="card-text "><strong class="text-black"><i class="bi bi-telephone mx-1"></i> Phone:</strong> ${user.phone}</p>
            <p class="card-text "><strong class="text-black"><i class="bi bi-browser-chrome mx-1"></i>Website:</strong> <a href="${user.website}" target="_blank" class="text-white">${user.website}</a></p>
            <p class="card-text "><strong class="text-black"><i class="bi bi-buildings mx-1"></i>Company:</strong> ${user.company.name}</p>
          </div>
        </div>
      `;

    return newCard;
}

// Rastgele bir renk üreten fonksiyon
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

async function renderCards() {
    try {
        const users = await getCards();
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("row");

        users.forEach(user => {
            const card = createCard(user);
            cardContainer.appendChild(card);
        });

        document.getElementById("cardContainer").appendChild(cardContainer);
    } catch (error) {
        console.error('Veri alınamadı:', error);
    }
}

renderCards();
