// Task - 2

// Generate button-a klik etdikdə avtomatik rəng kodu yaratsın inputa menimsetsin və həmin rəngi arxa plana ötürsün .

const inputPassword = document.querySelector("#inputPassword");

const btnPassword = document.querySelector("#btn");
const body = document.querySelector(".custom--flex");

const passworBtn = function (length) {
  let charset = ["#bc6c25"];

  document.querySelector("#inputPassword").style.color = charset;

  document.body.style.backgroundColor = charset;

  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};

const inputPasswords = function () {
  inputPassword.value = passworBtn(1);
};

btnPassword.addEventListener("click", inputPasswords);
