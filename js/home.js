/* =========================
   LOAD DATA
========================= */
let shows = JSON.parse(localStorage.getItem("shows")) || getAllShows();

const container = document.getElementById("showsContainer");


/* =========================
   DISPLAY SHOWS
========================= */
function displayShows(data) {
  container.innerHTML = "";

  data.forEach(show => {
    let col = document.createElement("div");
    col.className = "col-md-3";

    col.innerHTML = `
      <div class="card" style="cursor:pointer">
        <img src="${show.image}" class="card-img-top">
        <div class="card-body text-center">
          <div class="card-title">${show.title}</div>
          <div class="card-text">Episodes: ${show.episodes}</div>
        </div>
      </div>
    `;

    // Click → go to details page
    col.addEventListener("click", () => {
      window.location.href = "details.html?id=" + show.id;
    });

    container.appendChild(col);
  });
}

// Initial load
displayShows(shows);


/* =========================
   SEARCH FUNCTION
========================= */
const searchInput = document.querySelector("input[placeholder='Search...']");

searchInput.addEventListener("keyup", function () {
  let value = this.value.toLowerCase();

  let filtered = shows.filter(show =>
    show.title.toLowerCase().includes(value)
  );

  displayShows(filtered);
});


/* =========================
   ALPHABET FILTER
========================= */
const alphabetContainer = document.querySelector(".alphabet div");

alphabetContainer.innerHTML = "0-9 ";

for (let i = 65; i <= 90; i++) {
  let letter = String.fromCharCode(i);

  let link = document.createElement("a");
  link.href = "#";
  link.textContent = letter;
  link.style.margin = "0 5px";

  link.addEventListener("click", function (e) {
    e.preventDefault();

    let filtered = shows.filter(show =>
      show.title.startsWith(letter)
    );

    displayShows(filtered);
  });

  alphabetContainer.appendChild(link);
}


/* =========================
   CATEGORY FILTER
========================= */
const categories = document.querySelectorAll(".categories span");

categories.forEach(cat => {
  cat.style.cursor = "pointer";

  cat.addEventListener("click", function () {
    let selected = this.textContent;

    let filtered = shows.filter(show =>
      show.category.toLowerCase() === selected.toLowerCase()
    );

    displayShows(filtered);

    // highlight active
    categories.forEach(c => c.classList.remove("active-category"));
    this.classList.add("active-category");
  });
});
