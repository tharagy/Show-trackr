let shows = JSON.parse(localStorage.getItem("shows")) || getAllShows();

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const show = shows.find(s => s.id == id);

document.getElementById("showImage").src = show.image;
document.getElementById("showTitle").textContent = show.title;
document.getElementById("showRating").textContent = "❤ " + show.rating;
document.getElementById("showTime").textContent = show.time;
document.getElementById("showDescription").textContent = show.description;