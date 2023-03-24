const searchButton = document.querySelector('#searchButton');
const displayGifs = document.querySelector('#displayGifs');
const searchTerm = document.querySelector('#searchInput');
const searchForm = document.querySelector('#searchForm');
const deleteButton = document.querySelector('#deleteButton')

async function getGifUrl (searchTerm) {
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', { params: {
        q: searchTerm,
        api_key: 'MKBYPOrXy9sTTMAYLIXbO2Nx39iTsGvj',
        }
    });
    const resLength = res.data.data.length;
    const randIdx = Math.floor(Math.random() * resLength);
    const gifUrl = res.data.data[randIdx].images.original.url;
    return gifUrl;
};

function displayGif (gifUrl) {
    const newGif = document.createElement('div');
    newGif.classList.add('gif');
    const img = document.createElement('img');
    img.src = gifUrl;
    newGif.appendChild(img);
    displayGifs.appendChild(newGif);
};

document.addEventListener('DOMContentLoaded', () => {
    searchForm.addEventListener('submit', async function(evt) {
      evt.preventDefault();
      const gifUrl = await getGifUrl(searchTerm.value);
      displayGif(gifUrl);
    });

    deleteButton.addEventListener('click', () => {
        displayGifs.innerHTML = '';
    }
    );
})

