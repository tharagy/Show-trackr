// /* =========================
//    1. CHECK LOGIN STATUS
// ========================= */
// const subscribeBtn = document.querySelector(".subscribe-btn");

// let user = JSON.parse(localStorage.getItem("user"));

// if (user) {
//   subscribeBtn.textContent = "Subscribe";
// } else {
//   subscribeBtn.textContent = "Login to Subscribe";
// }


// /* =========================
//    2. SUBSCRIBE BUTTON
// ========================= */
// let subscribed = false;

// subscribeBtn.addEventListener("click", function () {
//   if (!user) {
//     alert("Please login first!");
//     window.location.href = "login.html";
//     return;
//   }

//   subscribed = !subscribed;

//   if (subscribed) {
//     subscribeBtn.textContent = "Subscribed ✅";
//     subscribeBtn.classList.remove("btn-primary");
//     subscribeBtn.classList.add("btn-success");
//   } else {
//     subscribeBtn.textContent = "Subscribe";
//     subscribeBtn.classList.remove("btn-success");
//     subscribeBtn.classList.add("btn-primary");
//   }
// });


// /* =========================
//    3. LIKE (RATING CLICK)
// ========================= */
// const rating = document.querySelector(".rating");

// rating.style.cursor = "pointer";

// rating.addEventListener("click", function () {
//   this.classList.toggle("text-danger");

//   if (this.classList.contains("text-danger")) {
//     this.innerHTML = "❤ 9.6"; // increase rating slightly
//   } else {
//     this.innerHTML = "❤ 9.5";
//   }
// });


// /* =========================
//    4. NEXT EPISODE COUNTDOWN
// ========================= */
// const infoBar = document.querySelector(".info-bar");

// // Set a future date (change as needed)
// let nextEpisodeDate = new Date();
// nextEpisodeDate.setMonth(nextEpisodeDate.getMonth() + 2);

// function updateCountdown() {
//   let now = new Date();
//   let diff = nextEpisodeDate - now;

//   if (diff <= 0) {
//     infoBar.textContent = "New episode is available now!";
//     return;
//   }

//   let days = Math.floor(diff / (1000 * 60 * 60 * 24));
//   let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

//   infoBar.textContent = `Next episode starts in ${days} days and ${hours} hours.`;
// }

// // update every second
// setInterval(updateCountdown, 1000);
// updateCountdown();


// /* =========================
//    5. EPISODE CLICK EFFECT
// ========================= */
// const episodes = document.querySelectorAll(".episode-item");

// episodes.forEach(ep => {
//   ep.style.cursor = "pointer";

//   ep.addEventListener("click", function () {
//     episodes.forEach(e => e.style.background = "");
//     this.style.background = "#f1f1f1";
//   });
// });

document.querySelector(".subscribe-btn").addEventListener("click", function() {
  window.location.href = "login.html";
});