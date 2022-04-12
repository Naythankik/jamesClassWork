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

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
