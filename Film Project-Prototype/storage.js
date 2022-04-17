function Storage() {}

Storage.prototype.addFilmToStorage = function (newFilm) {
  let films = this.getFilmsToStorage();
  films.push(newFilm);
  localStorage.setItem("films", JSON.stringify(films));
};

Storage.prototype.getFilmsToStorage = function () {
  let films;
  if (localStorage.getItem("films") === null) {
    films = [];
  } else {
    films = JSON.parse(localStorage.getItem("films"));
  }
  return films;
};
