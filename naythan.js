// let number = Math.trunc(Math.random() * 20) + 1;
// let score = document.querySelector(".score").textContent;
// let highscore = 0;

// document.querySelector(".check").addEventListener("click", function () {
//   let guess = Number(document.querySelector(".guess").value);
//   // console.log(typeof guess);
//   if (score > 1) {
//     if (guess > number) {
//       document.querySelector(".message").textContent = "Number is too high!!!";
//       score -= 1;
//       document.querySelector(".score").textContent = score;
//     } else if (guess < number) {
//       document.querySelector(".message").textContent = "Number is low";
//       score -= 1;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent =
//         "That is the correct Number, You've won!!!";
//       document.querySelector(".number").textContent = number;
//       document.querySelector("body").style.backgroundColor = "green";
//       // document.querySelector(".highscore").textContent = score;
//       if (score > highscore) {
//         highscore = score;
//         document.querySelector(".highscore").textContent = highscore;
//       }
//     }
//   } else {
//     document.querySelector(".message").textContent = "You've lost the game!!";
//     score = 0;
//     document.querySelector(".score").textContent = score;
//   }
// });

// document.querySelector(".again").addEventListener("click", function () {
//   document.querySelector(".message").textContent = "Start guessing...";
//   document.querySelector(".score").textContent = 20;
//   document.querySelector(".number").textContent = "?";
//   document.querySelector(".guess").value = "";
//   document.querySelector("body").style.background = "bisque";
// });

// Modal creator
// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const btnCloseModal = document.querySelector(".close-modal");
// const btnsOpenModal = document.querySelectorAll(".show-modal");

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener("click", function () {
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");
//   });
// }

// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// btnCloseModal.addEventListener("click", closeModal);

// overlay.addEventListener("click", closeModal);
// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   }
// });

// let check = document.querySelector(".go");

// check.addEventListener("click", function (e) {
//   console.log(e);
//   // setTimeout(function () {
//   //   window.location.href = "nath.html";
//   // }, 3000);
// });

// let nath = document.querySelector("#event");
// nath.addEventListener("click", function (e) {
//   nath.setAttribute("title", "Welcome to this Page");
//   let answer = prompt("What is your name?");
//   console.log(answer);
// });

// const me = {
//   FirstName: "Nathaniel",
//   Lastname: "Abolarin",
//   Age: 10,
// };

// const friend = Object.assign({}, me);
// friend.Age = 12;
// console.log(friend, me);

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4.0",
//   scored: ["Lewandoski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// challenge
// const [players1, players2] = game.players;
// const [gk, ...fieldPlayers] = players1;
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// //based on odds
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// // console.log(team1);

// const allPlayers = [...players2, ...players2];

// function printGoals(...goals) {
//   // console.log(goals);
// }
// // console.log(game.odds.team1 || game.odds.team2);

// printGoals(...game.scored);

// for (const bahy of players1Final.entries()) {
//   console.log(`${bahy[0] + 1} : ${bahy[1]}`);
// }

// for (const names of players1) {
//   console.log(names);
// }

// const nath = new Map();
// nath.set("name", "Nathaniel");
// nath.set(1, "Abolarin Okikiola");
// nath
//   .set("categories", ["Italian", "Pisahshs", "vegetarian", "Organic"])
//   .set("open", 11);
// const arr = [2, 3];
// nath.set(arr, "Dolapo");
// nath.delete(1);
// console.log();

// const question = new Map([
//   ["question", "What is your name?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "Javascript"],
//   ["correct", 3],
//   [true, "Correct"],
//   [false, "Try Again.."],
// ]);

// console.log(question.get(true));

// for (const [key, value] of question) {
//   console.log(key + " and the value is " + value);
// }

// let answer = Number(prompt("What is your answer?"));
// console.log(question.get(question.get("correct") === answer));

// coding challenge #3
// const gameEvents = new Map([
//   [17, "Goal"],
//   [36, "Substitution"],
//   [47, "Goal"],
//   [61, "Substitution"],
//   [64, "Yellow Card"],
//   [69, "Red Card"],
//   [70, "Substitution"],
//   [72, "Substitution"],
//   [76, "Goal"],
//   [80, "Goal"],
//   [92, "Yellow Card"],
// ]);

// const events = [...new Set(gameEvents.values())];
// console.log(events);
// gameEvents.delete(64);
// const time = [...gameEvents.keys()].pop();
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );
// for (const [mins, action] of gameEvents) {
//   mins <= 45
//     ? console.log("[FIRST HALF] " + mins + ": " + action)
//     : console.log("[SECOND HALF] " + mins + ": " + action);
// }

// const airline = "TAP Air Portugal";
// const plane = "A320";
// console.log();

// let variables = document.querySelector("#variables");
// let check = document.querySelector("#check");

// function arrays(list) {
//   let us = list.split(",");
//   for (let u of us) {
//     return u;
//   }
//   return us;
// }

// console.log(arrays("what,is,my,name?"));

// check.addEventListener("click", function () {
//   let constant = [];
//   constant.push(arrays);
//   console.log(constant);
// });

// document.body.append(document.createElement("textarea"));
// const poll = {
//   question: "What is your Favourite programming language?",
//   options: ["0: Javascript", "1: Python", "2: Rust", "3: c++"],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const quest = Number(
//       prompt(
//         `${this.question}\n${this.options.join("\n")}\n (write option number)`
//       )
//     );
//     if (typeof quest === "number" && quest <= this.answers.length) {
//       this.answers[quest] += 1;
//       this.displayResults();
//       this.displayResults("string");
//     } else {
//       alert(`${quest} is not in the options given!!`);
//     }
//   },

//   displayResults(type = "array") {
//     if (type === "string") {
//       console.log(`Poll results are ${this.answers.join(", ")}`);
//     } else {
//       console.log(this.answers);
//     }
//   },
// };
// document
//   .querySelector(".buts")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));

// const arr = [12, -23, 20, 8, 91, -09, -23, -89];

// for (const [id, arrays] of arr.entries()) {
//   arrays > 0
//     ? console.log(`${id + 1} : You've made a deposit of ${arrays}`)
//     : console.log(
//         `${id + 1} : You've made a withdrawal of ${Math.abs(arrays)}`
//       );
// }

// arr.forEach(function (arrays, id) {
//   arrays > 0
//     ? console.log(`${id + 1} : You've made a deposit of ${arrays}`)
//     : console.log(
//         `${id + 1} : You've made a withdrawal of ${Math.abs(arrays)}`
//       );
// });

// console.log(arr);
// console.log(arr.slice(1, 4));
// console.log(arr.shift());
// console.log(arr);
// console.log(arr.push(23, 24));
// console.log(arr);
// console.log(arr.join(":"));
// console.log(arr.unshift(19030));
// console.log(arr);
// console.log(arr.splice(2, 3));
// console.log(arr);

// const names = new Set(["nath", "mum", "mariam", "nath"]);
// console.log(names);

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
// */
// function checkDogs(dogsJulia, dogsKate) {
//   let JulDogs = dogsJulia.slice();
//   JulDogs.splice(0, 1);
//   JulDogs.splice(-2);
//   let newDogs = [...JulDogs, ...dogsKate];

//   // console.log(newDogs);
//   // newDogs.forEach(function (dogs) {
//   //   console.log(dogs);
//   // });

//   newDogs.forEach(function (dogs, index) {
//     dogs >= 3
//       ? console.log(
//           `Dog number ${index + 1} is an adult, and is ${dogs} years old`
//         )
//       : console.log(`Dog number ${index + 1} is still a puppy!`);
//   });
// }

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 6, 3]);
// console.log("------NEW DATA------");
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// let list = document.querySelectorAll(".checks");
// let titles = document.querySelectorAll(".title");

// titles.forEach(function (title, index, arr) {
//   list[index].addEventListener("click", function (e) {
//     title.style.textDecoration = "line-through";
// title.toggleAttribute("style", true);
// });
// });

// console.log(titles);

console.log(module);
