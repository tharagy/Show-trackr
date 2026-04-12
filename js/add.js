// /* =========================
//    ADD SHOW FUNCTION
// ========================= */
// document.querySelector("form").addEventListener("submit", function(e) {
//   e.preventDefault();

//   let nameInput = document.querySelector("input[type='text']");
//   let title = nameInput.value.trim();

//   if (title === "") {
//     alert("Please enter a show name!");
//     return;
//   }

//   // Get existing shows from localStorage OR data.js
//   let storedShows = JSON.parse(localStorage.getItem("shows"));

//   if (!storedShows) {
//     storedShows = getAllShows(); // from data.js
//   }

//   // Create new show object
//   let newShow = {
//     id: Date.now(), // unique ID
//     title: title,
//     category: "Custom",
//     episodes: 0,
//     rating: 0,
//     image: "https://via.placeholder.com/150",
//     time: "Not scheduled",
//     description: "User added show",
//     nextEpisodeDays: 0,
//     episodesList: []
//   };

//   // Add to array
//   storedShows.push(newShow);

//   // Save back to localStorage
//   localStorage.setItem("shows", JSON.stringify(storedShows));

//   alert("Show added successfully!");

//   // Clear input
//   nameInput.value = "";

//   // Redirect to home page
//   window.location.href = "index.html";
// });

document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.querySelector("input").value;
  let message = document.createElement("div");

  // Validate name (only letters)
  let regex = /^[A-Za-z ]+$/;

  if (!regex.test(name)) {
    message.innerText = "Invalid TV Show name";
    message.style.color = "red";
  } else {
    message.innerText = name + " has been added";
    message.style.color = "green";

    shows.push({ id: shows.length + 1, name });
  }

  document.querySelector(".form-box").appendChild(message);
});
