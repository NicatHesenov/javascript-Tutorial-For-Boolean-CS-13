const inputPassword = document.querySelector("#inputPassword");
const body = document.querySelector(".custom--flex");
const getBtn = document.querySelector("#btn");

inputPassword.addEventListener("input", function () {
  if (inputPassword.value.length === 6) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    document.body.style.backgroundColor = "#" + randomColor;

    document.getElementById("inputPassword").value = randomColor;
  } else {
    body.style.backgroundColor = "";
  }
});

// // Qeyd HTML hissəyə   maxlength="6"  yazaraq simvolu 6 ilə sərhədliyə bilərik

function changeColor() {

  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  document.body.style.backgroundColor = "#" + randomColor;

  document.getElementById("inputPassword").value = randomColor;
}

getBtn.addEventListener("click", changeColor);
