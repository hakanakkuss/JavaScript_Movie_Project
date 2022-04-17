const form = document.getElementById("film-form");
const titleInput = document.querySelector("#title");
const directorInput = document.querySelector("#director");
const urlInput = document.querySelector("#url");

eventListeners();

const ui = new UI();

function eventListeners() {
  form.addEventListener("submit", addFilm);
}

function addFilm(e) {
  const title = titleInput.value;
  const director = directorInput.value;
  const url = urlInput.value;

  const newFilm = new Film(title, director, url);
  ui.addFilmToUI(newFilm);

  e.preventDefault();
}
