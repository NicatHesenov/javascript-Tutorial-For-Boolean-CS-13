// Task - 1

// dizaynda input hissəsinə rəng kodu yazacaqsınız. İnputa yazılan dəyər 6dan yuxarı olmasın maximum 6 character yazmaq olsun . 6 rəqəmli yazdıqdan sonra birbaşa arxa plan rəngi dəyişsin.

const inputPassword = document.querySelector("#inputPassword");
const body = document.querySelector(".custom--flex");
const getBtn = document.querySelector("#btn");

inputPassword.addEventListener("input", function () {
  if (inputPassword.value.length === 6) {
    body.style.backgroundColor = "green";
  } else {
    body.style.backgroundColor = "";
  }
});

// Qeyd HTML hissəyə   maxlength="6"  yazaraq simvolu 6 ilə sərhədliyə bilərik
