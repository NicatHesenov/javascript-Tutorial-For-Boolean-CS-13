const button = document.getElementById("btn");
const inputUsarname = document.getElementById("exampleInputEmail");
const inputPassword = document.getElementById("exampleInputPassword");

const card_1 = document.getElementById("card1");
const card_2 = document.getElementById("card2");

let secretUsarname = "booleanteach";
let secretPassword = "12345";

const chlickSecretLogin = function (event) {
  event.preventDefault();
  if (
    secretUsarname === inputUsarname.value &&
    secretPassword != inputPassword.value
  ) {
    alert("Password yanlishdir");
  } else if (
    secretUsarname != inputUsarname.value &&
    secretPassword === inputPassword.value
  ) {
    alert("Login yanlishdir");
  } else if (
    secretUsarname === inputUsarname.value &&
    secretPassword === inputPassword.value
  ) {
    card_1.classList.add("hide");
    card_2.classList.remove("hide");
    card_2.classList.add("show");
  }
};

button.addEventListener("click", chlickSecretLogin);
