function checkPswd() {
  var confirmPassword = "123";
  var password = document.getElementById("pswd").value;
  if (password == confirmPassword) {
    window.location = "homepage.html";
  }
}