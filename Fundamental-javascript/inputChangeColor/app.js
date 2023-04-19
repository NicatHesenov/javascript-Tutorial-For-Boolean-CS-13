// const inputPassword = document.querySelector("#inputPassword");
const body = document.querySelector(".custom--flex");
const getBtn = document.querySelector("#btn");

function changeBackgroundColor() {
  const inputPassword = document.querySelector("#inputPassword");
  let colorCode = inputPassword.value;
  if (colorCode.length === 6) {
    document.body.style.backgroundColor = "#" + colorCode;
  }
}

getBtn.addEventListener("click", changeBackgroundColor);

// Qeyd HTML hissəyə   maxlength="6"  yazaraq simvolu 6 ilə sərhədliyə bilərik
