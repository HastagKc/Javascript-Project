let btns = document.querySelectorAll(".btn");
let winnerMsg = document.querySelector("#winner-msg");
let newGameBtn = document.querySelector("#new-game-btn");
let hide = document.querySelector(".hide");

let count = 0;

// player-1 >O
// player-2 >X

let player1 = true;

let winningPatterns = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // console.log("btn is clicked");
    if (player1) {
      btn.innerHTML = "O";
      player1 = false;
    } else {
      btn.innerHTML = "X";
      player1 = true;
    }
    btn.disabled = true;

    count++;
    console.log(count);
    let isWinner = checkWinner();
    if (count === 9 && !isWinner) {
      showDraw();
    }
  });
});

// disabling all btns
const btnDisabled = () => {
  for (let btn of btns) {
    btn.disabled = true;
  }
};

// enable btn
const enableBtns = () => {
  for (let btn of btns) {
    btn.disabled = false;
  }
};
// draw game
const showDraw = () => {
  winnerMsg.innerHTML = "Draw";
  // hide.style.display = "block";
  hide.classList.remove("hide");
  btnDisabled();
};

// new game function
const newGameFunction = () => {
  player1 = true;
  for (let btn of btns) {
    btn.innerText = "";
    count = 0;
  }
};

// showing winner function:- printing winner in
// the game

const showWinner = (winner) => {
  winnerMsg.innerHTML = `Winner is player: ${winner}`;
  // hide.style.display = "block";
  hide.classList.remove("hide");
  btnDisabled();
};

// checking winner
const checkWinner = () => {
  for (let pattern of winningPatterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(btns[pattern[0]], btns[pattern[1]], btns[pattern[2]]);

    let pos1Value = btns[pattern[0]].innerText;
    let pos2Value = btns[pattern[1]].innerText;
    let pos3Value = btns[pattern[2]].innerText;

    if (pos1Value != "" && pos2Value != "" && pos3Value != "") {
      if (pos1Value === pos2Value && pos2Value === pos3Value) {
        // alert(`Congratulation Winner is Player ${pos1Value}`);
        // console.log("Winner", pos1Value);
        showWinner(pos1Value);
      }
    }
  }
};

newGameBtn.addEventListener("click", function () {
  newGameFunction();
  hide.classList.add("hide");
  enableBtns();
});
