const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const main = document.querySelector(".main")

async function getApi(api) {
  const SerApi = await fetch(api);
  const data = await SerApi.json();
  showData(data.results);
}

function showData(api) {
    main.innerHTML = ""
    api.forEach((item) => {
        let div = document.createElement("div");
        div.classList.add("box");
        div.innerHTML = `
          <img src="${IMGPATH + item.poster_path}" alt="">
          <div class="overlay">
          <div class="title">
              <span>${item.title}</span>
              <span>${item.vote_average}</span>
          </div>
          <h4>overview</h4>
          <p>${item.overview}</p>
          </div>
          `;
          main.appendChild(div)
  })
}

document.getElementById("search").addEventListener("keyup", (key) => {
    if (key.target.value !== "") {
        getApi(SEARCHAPI + key.target.value)
    }
    else {
        getApi(APIURL)
    }
})

getApi(APIURL);
