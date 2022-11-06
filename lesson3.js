// const userName = "Alex";

// if (userName === "Ivan") {
//   console.log(`Привет ${userName}`);
// } else if (userName === "Alex") {
//   console.log(`Привет друг, ${userName}!`);
// } else if (userName === "Petr") {
//   console.log(`Hi, ${userName}!`);
// } else {
//   console.log("Привет незнакомец");
// }

// const userName = "Ivan"  //Пример использования Тернарного оператора. Использовать в редких случаях, в остальном не рекомендуется (мувитон)

// const result = userName === "Alex" ? "Hello, Alex" : userName === "Ivan" ? "Hellow friend, Ivan" : "Hellow, User";

// console.log(result);

// const a = 5;
// const b = 4;
// const c = 30;

// if (a < b) {
//   b < c ? console.log("C самый большой") : console.log("B самый большой");
// } else {
//   a < c ? console.log("С самый большой") : console.log("А самый большой");
// }

// if ((a > b, a > c)) {
//   console.log("a");
// } else if (b > c) {
//   console.log("b");
// } else {
//   console.log("c");
// }

const userRole = "user";

switch (userRole) {
  case "admin":
    console.log("Это администорар, он любит кофе");
    break;

  case "manager":
    console.log("Это менеджер, он любит чай");
    break;

  case "user":
    console.log("Это администорар, он любит лимрнад");
    break;
}
