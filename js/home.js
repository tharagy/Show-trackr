// Filter by Alphabet
function filterByLetter(letter) {
  let filtered = shows.filter(show => show.name.startsWith(letter));
  console.log(filtered);
}

// Filter by Genre
function filterByGenre(genre) {
  let filtered = shows.filter(show => show.genre === genre);
  displayShows(filtered);
}


const searchInput = document.querySelector("#search");

searchInput.addEventListener("keyup", function() {
  let value = searchInput.value.toLowerCase();

  let filtered = shows.filter(show =>
    show.name.toLowerCase().includes(value)
  );

  displayShows(filtered);
});

function displayShows(list) {
  let container = document.querySelector("#showsContainer");
  container.innerHTML = "";

  list.forEach(show => {
    container.innerHTML += `
      <div class="col-md-3">
        <div class="card p-2 mb-3">
          <h6>${show.name}</h6>
          <small>${show.genre}</small>
        </div>
      </div>
    `;
  });
}
displayShows(shows);
