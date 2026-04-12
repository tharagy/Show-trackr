// 

document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  let email = document.querySelector("#email").value;
  let password = document.querySelector("input[type='password']").value;

  let user = users.find(u => u.email === email && u.password === password);

  if (user) {
    alert("Login Successful ✅");
  } else {
    alert("Login Unsuccessful ❌");
  }
});