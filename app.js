let count = 0;
const counter = document.getElementById("counter");
const clickBtn = document.getElementById("click-btn");
const gameOverScreen = document.getElementById("game-over");
const restartBtn = document.getElementById("restart-btn");
const bubbles = document.getElementById("bubbles");

clickBtn.addEventListener("click", () => {
  if (count < 99) {
    count++;
    counter.textContent = count;

    // create bubble
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.textContent = `+1`;
    bubbles.appendChild(bubble);

    // remove bubble after animation
    setTimeout(() => {
      bubble.remove();
    }, 1000);

    // check game over
    if (count === 99) {
      clickBtn.style.display = "none";
      gameOverScreen.classList.remove("hidden");
    }
  }
});

restartBtn.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
  clickBtn.style.display = "inline-block";
  gameOverScreen.classList.add("hidden");
});
