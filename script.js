var timer = 60;
var score = 0;
var hitrn = 0;

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
  var clutter = "";
  var bubbleSize = 60;
  var panelWidth = document.querySelector("#pbtm").offsetWidth;
  var panelHeight = document.querySelector("#pbtm").offsetHeight;

  // Calculate the number of bubbles that fit in the panel
  var bubblesPerRow = Math.max(Math.floor(panelWidth / bubbleSize), 1);
  var bubblesPerColumn = Math.max(Math.floor(panelHeight / bubbleSize), 1);
  var totalBubbles = bubblesPerRow * bubblesPerColumn;

  for (var i = 1; i <= totalBubbles; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timerinterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerinterval);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

// Event Bubbling
document.querySelector("#pbtm").addEventListener("click", function (details) {
  var clickednum = Number(details.target.textContent);
  if (clickednum === hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

makeBubble();
runTimer();
getNewHit();
