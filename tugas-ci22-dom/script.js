document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (name == "" && email == "" && password == "") {
    alert("Anda harus mengisi semua field form!");
  } else if (name == "") {
    alert("Field nama tidak boleh kosong!");
  } else if (email == "") {
    alert("Field email tidak boleh kosong!");
  } else if (password == "") {
    alert("Field password tidak boleh kosong!");
  } else {
    validatePassword(name, password);
  }

  console.log("Nama anda: " + name);
  console.log("Email anda: " + email);
  console.log("Password anda: " + password);
  console.log("Panjang password: " + password.length);
});

function validatePassword(name, password) {
  var minLength = 8;
  var upperCase = /[A-Z]/;
  var lowerCase = /[a-z]/;
  var number = /[0-9]/;

  if (
    password.length >= minLength &&
    password.match(upperCase) &&
    password.match(lowerCase) &&
    password.match(number)
  ) {
    alert(`Login berhasil, Selamat datang ${name}!`);
    clearInput();
  } else {
    alert(
      "Password harus terdiri dari minimal 8 karakter dengan kombinasi huruf besar, huruf kecil, dan angka."
    );
  }
}

function clearInput() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}
