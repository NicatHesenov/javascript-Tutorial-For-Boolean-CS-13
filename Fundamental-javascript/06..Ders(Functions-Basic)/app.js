// Tapşırıq

const applyWeightStatus = function (currenWeigt) {
  if (isNaN(currenWeigt)) {
    console.log("enter the number plz!");
    return;
  }
  if (50 > currenWeigt) {
    console.log("Aşağı çəki");
    return;
  }
  if (50 < currenWeigt && currenWeigt < 90) {
    console.log("Orta");
    return;
  }
  if (90 < currenWeigt) {
    console.log("Yüksək");
    return;
  }
  let weight = currenWeigt;
  console.log(`Weight is ${weight}`);
  return;
};

applyWeightStatus("70");

// Tapşırıq 2

const calCircum = function (radius) {
  return 2 * Math.PI * radius;
};

console.log(calCircum(5));

const calc = function (radius) {
  return Math.PI * radius * radius;
};

console.log(calc(3));
