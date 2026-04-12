
  // document.querySelector("form").addEventListener("submit", function(e) {
  //   e.preventDefault(); // prevent form from refreshing page

  //   // Get values
  //   let name = document.querySelector("input[type='text']").value.trim();
  //   let email = document.querySelector("input[type='email']").value.trim();
  //   let password = document.querySelector("input[type='password']").value.trim();

  //   // Validation
  //   if (name === "" || email === "" || password === "") {
  //     alert("Please fill all fields!");
  //     return;
  //   }

  //   if (password.length < 6) {
  //     alert("Password must be at least 6 characters!");
  //     return;
  //   }

  //   // Save data (localStorage)
  //   let user = {
  //     name: name,
  //     email: email,
  //     password: password
  //   };

  //   localStorage.setItem("user", JSON.stringify(user));

  //   // Success message
  //   alert("Signup successful!");

  //   // Redirect to login page
  //   window.location.href = "login.html";
  // });


 document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.querySelector("input[type='text']").value;
  let email = document.querySelector("input[type='email']").value;
  let password = document.querySelector("input[type='password']").value;

  // Name validation
  let nameRegex = /^[A-Za-z ]{6,}$/;

  // Email validation
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Password validation (8 chars, uppercase, lowercase, number, symbol)
  let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8}$/;

  if (!nameRegex.test(name)) {
    alert("Invalid Name");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Invalid Email");
    return;
  }

  if (!passRegex.test(password)) {
    alert("Invalid Password");
    return;
  }

  // Store user
  users.push({ email, password });

  alert("Signup Successful");
  window.location.href = "login.html";
});