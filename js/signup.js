<script>
  document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent form from refreshing page

    // Get values
    let name = document.querySelector("input[type='text']").value.trim();
    let email = document.querySelector("input[type='email']").value.trim();
    let password = document.querySelector("input[type='password']").value.trim();

    // Validation
    if (name === "" || email === "" || password === "") {
      alert("Please fill all fields!");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }

    // Save data (localStorage)
    let user = {
      name: name,
      email: email,
      password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    // Success message
    alert("Signup successful!");

    // Redirect to login page
    window.location.href = "login.html";
  });
</script>