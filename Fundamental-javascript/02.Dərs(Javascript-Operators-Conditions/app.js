const log = console.log;

// Bərabər yanlı üçbucaq
let a = 13,
  b = 13,
  c = 10;

if (a + b > c || a + c > b) {
  log("üçbucaq");
} else {
  log("deyil");
}

if (a == b && a == c && b == c) {
  log("Bərabərtərəfli üçbucaq");
} else if (a == b || b == c || c == a) {
  log("Bərabər yanlı üçbucaq");
} else {
  log("Müxtəlif tərəfli üçbucaq");
}

let numberOne = 2;
let numberTwo = 10;
let numberThree = 12;

let sum = (10 * 12) / 2;

log(sum);

// Müxtəlif tərəfli üçbucaq

let d = 20,
  e = 10,
  f = 13;

if (d + e > f || e + f > d) {
  log("üçbucaq");
} else {
  log("deyil");
}

if (d == e && d == f && e == f) {
  log("Bərabərtərəfli üçbucaq");
} else if (d == e || e == f || d == f) {
  log("Bərabər yanlı üçbucaq");
} else {
  log("Müxtəlif tərəfli üçbucaq");
}

let numberFour = 20;
let numberFive = 10;
let numberSix = 12;

let result = numberFour + numberFive + numberSix;

log(result);

// Bərabər tərəfli üçbucaq

let g = 12,
  q = 12,
  m = 12;

if (g + q > m || m + q > g) {
  log("üçbucaq");
} else {
  log("deyil");
}

if (g == q && q == m && g == m) {
  log("Bərabərtərəfli üçbucaq");
} else if (q == m || g == m || g == q) {
  log("Bərabər yanlı üçbucaq");
} else {
  log("Müxtəlif tərəfli üçbucaq");
}

let numberSahə = 36;
let numberPerimetr = 36;

let total = numberPerimetr * numberSahə;

log(total);

// Problem - 1

let dayOfhour = prompt("saat neçədir?");

if (dayOfhour > 00 && dayOfhour < 23) {
  if (dayOfhour < 12) {
    notificattion = "Good morning!";
  } else if (dayOfhour < 17) {
    notificattion = "Good afternoon";
  } else if (dayOfhour < 23) {
    notificattion = "Good evening";
  }
}

alert(notificattion);

// Problem - 2

let numberMidlle = 5;
let numberBig = 20;

if (numberMidlle > numberBig || numberMidlle < numberBig) {
  log("Aktiv");
} else {
  log("Deaktiv");
}
