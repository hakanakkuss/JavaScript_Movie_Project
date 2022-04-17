const form = document.getElementById("film-form");
const titleInput = document.querySelector("#title");
const directorInput = document.querySelector("#director");
const urlInput = document.querySelector("#url");

eventListeners();

const ui = new UI();
const storage = new Storage();

function eventListeners() {
  form.addEventListener("submit", addFilm);
}

function addFilm(e) {
  const title = titleInput.value;
  const director = directorInput.value;
  const url = urlInput.value;

  if (title === "" || director === "" || url === "") {
    ui.displayMessages("Lütfen tüm alanları doldurunuz...", "danger");
  } else {
    const newFilm = new Film(title, director, url);
    ui.addFilmToUI(newFilm);
    storage.addFilmToStorage(newFilm);
    ui.displayMessages("Film başarıyla eklendi", "success");
  }

  ui.clearInputs(titleInput, directorInput, urlInput);

  e.preventDefault();
}
