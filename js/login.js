/* =========================
   LOGIN FUNCTION
========================= */
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get input values
  let email = document.querySelector("input[type='email']").value.trim();
  let password = document.querySelector("input[type='password']").value.trim();

  // Get stored user
  let storedUser = JSON.parse(localStorage.getItem("user"));

  // Check if user exists
  if (!storedUser) {
    alert("No account found! Please sign up first.");
    window.location.href = "signup.html";
    return;
  }

  // Validate credentials
  if (email === storedUser.email && password === storedUser.password) {
    alert("Login successful!");

    // Save login session
    localStorage.setItem("loggedIn", "true");

    // Redirect to home page
    window.location.href = "index.html";
  } else {
    alert("Invalid email or password!");
  }
});


/* =========================
   OPTIONAL: AUTO REDIRECT IF LOGGED IN
========================= */
if (localStorage.getItem("loggedIn") === "true") {
  // User already logged in → go to home
  window.location.href = "index.html";
}