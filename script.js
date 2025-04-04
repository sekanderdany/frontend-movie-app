const APILINK = "https://api.themoviedb.org/3/discover/movie?include_adult=true&language=en-US&sort_by=popularity.desc&api_key=218aa1c9f6fb8c9e382cbc539dfe21a2";
const APIKEY = "0b8f1a2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=218aa1c9f6fb8c9e382cbc539dfe21a2&query=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

getMovies(APILINK);
function getMovies(url) {
    fetch(url).then((res) => res.json())
    .then(function(data) {
        console.log(data.results);
        data.results.forEach((movie) => {
            const div_card = document.createElement("div");
            div_card.setAttribute("class", "card");

            const div_row = document.createElement("div");
            div_row.setAttribute("class", "row");

            const div_column = document.createElement("div");
            div_column.setAttribute("class", "column");

            const image = document.createElement("img");
            image.setAttribute("class", "thumbnail");
            image.setAttribute("id", "image");

            const title = document.createElement("h3");
            title.setAttribute("id", "title");
            
            const center = document.createElement("center");

            title.innerHTML = `${movie.title}`;
            image.src = IMG_PATH + movie.poster_path;

            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);

            main.appendChild(div_row);
        });
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = "";
    const searchTerm = search.value;
    if (searchTerm) {
        getMovies(SEARCHAPI + searchTerm);
        search.value = "";
    } else {
        getMovies(APILINK);
    }
});