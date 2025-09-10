let count = 0;

const counter = document.getElementById("counter");
const clickBtn = document.getElementById("click-btn");
const gameOverScreen = document.getElementById("game-over");
const restartBtn = document.getElementById("restart-btn");
const bubbles = document.getElementById("bubbles");

function updateCounter() {
  counter.textContent = count;
}

function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.textContent = "+1";

  const drift = Math.floor(Math.random() * 100) - 50;
  bubble.style.transform = `translateX(${drift}px) translateY(0)`;

  bubbles.appendChild(bubble);

  setTimeout(() => bubble.remove(), 1000);
}

clickBtn.addEventListener("click", () => {
  if (count < 99) {
    count++;
    updateCounter();
    createBubble();

    if (count === 99) {
      clickBtn.style.display = "none";
      gameOverScreen.classList.remove("hidden");
    }
  }
});

restartBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
  clickBtn.style.display = "inline-block";
  gameOverScreen.classList.add("hidden");
});
