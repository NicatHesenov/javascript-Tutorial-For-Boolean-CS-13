const log = console.log;

//TAPŞIRIQ 1)-Promptan gələn dəyəri qəbul edin həmin dəyər sıfıra bərabərdirsə ekrana "əməliyyat dayandı", həmin həm 2-ə həmdə 6 bölünürsə ekrana "aktiv" əks halda "deaktiv" mesajını çıxarsın

let includeNumber = +prompt("Enter the number!");

if (includeNumber === 0) {
  log("the operation stoped!");
} else if (includeNumber % (2 & 6) === 0) {
  log("Aktive");
} else {
  log("Deaktive");
}

let number = 5;
let notificattion;

if (number < 20) {
  notificattion = "Aktive";
} else {
  notificattion = "Deaktive";
}

log(notificattion);
