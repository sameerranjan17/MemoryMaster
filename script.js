let gameSeq = []; //empty array
let userSeq = []; //empty array

let btns = ["yellow", "red", "purple", "green"];

let started = false; //variable
let level = 0; //variable

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true; //since game starts once and game is already started

    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  // console.log(randIdx);
  // console.log(randColor);
  // console.log(randBtn);
  gameSeq.push(randColor);
  console.log(gameSeq);  
  gameFlash(randBtn);
}
//don't get confused here that we are using btn variable in every functions
// since every variable is getting used inside their own function so here function scope is applying.

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor = "white";
    },150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

// reset game

function reset(){
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}