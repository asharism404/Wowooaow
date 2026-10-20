const screens = [...document.querySelectorAll(".screen")];
const music = document.getElementById("bgMusic");
const musicPill = document.getElementById("musicPill");
const musicStatus = document.getElementById("musicStatus");
const musicToggle = document.getElementById("musicToggle");
const intro = document.getElementById("intro");
let musicStarted = false;

function showScreen(id) {
  screens.forEach(screen => {
    screen.classList.toggle("active", screen.id === id);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function startMusic() {
  try {
    await music.play();
    musicStarted = true;
    musicPill.classList.add("playing");
    musicStatus.textContent = "Now playing our song";
    musicToggle.textContent = "Ⅱ";
  } catch (error) {
    musicStatus.textContent = "Tap ♫ to play your song";
    // Browsers may block playback if the file is missing or unavailable.
  }
}

document.getElementById("shootButton").addEventListener("click", async () => {
  if (intro.classList.contains("shooting")) return;
  intro.classList.add("shooting");
  const button = document.getElementById("shootButton");
  button.querySelector(".bow-emoji").textContent = "💘";
  button.querySelector(".shoot-label").textContent = "right to your heart...";
  await startMusic();
  setTimeout(() => {
    showScreen("reveal");
    intro.classList.remove("shooting");
  }, 650);
});

document.querySelectorAll("[data-next]").forEach(button => {
  button.addEventListener("click", () => showScreen(button.dataset.next));
});
document.querySelectorAll("[data-prev]").forEach(button => {
  button.addEventListener("click", () => showScreen(button.dataset.prev));
});

musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    await startMusic();
  } else {
    music.pause();
    musicPill.classList.remove("playing");
    musicStatus.textContent = "Song paused";
    musicToggle.textContent = "♫";
  }
});

const compliments = [
  "so loved, more than you know. ♡",
  "beautiful in ways a mirror could never show.",
  "stronger than you give yourself credit for.",
  "the person who makes my world softer.",
  "my favourite notification and my favourite hello.",
  "someone I feel lucky to call mine.",
  "enough, exactly as you are. Always."
];
let complimentIndex = 0;
document.getElementById("complimentButton").addEventListener("click", () => {
  complimentIndex = (complimentIndex + 1) % compliments.length;
  const text = document.getElementById("complimentText");
  text.animate([{ opacity: 0, transform: "translateY(5px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 280 });
  text.textContent = compliments[complimentIndex];
});

document.getElementById("replayButton").addEventListener("click", () => {
  showScreen("intro");
  document.getElementById("shootButton").querySelector(".bow-emoji").textContent = "🏹";
  document.getElementById("shootButton").querySelector(".shoot-label").textContent = "tap the bow";
  music.currentTime = 0;
  if (!music.paused) music.pause();
  musicPill.classList.remove("playing");
  musicStatus.textContent = "Your song is ready";
  musicToggle.textContent = "♫";
  musicStarted = false;
});
