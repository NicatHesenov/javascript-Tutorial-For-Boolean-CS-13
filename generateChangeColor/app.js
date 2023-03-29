const inputPassword = document.querySelector("#inputPassword");
const body = document.querySelector(".custom--flex");
const getBtn = document.querySelector("#btn");

function changeColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
}

getBtn.addEventListener("click", changeColor);
