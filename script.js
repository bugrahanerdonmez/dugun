// scroll
function go(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// theme
const toggle = document.getElementById("themeToggle");
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

// music
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "⏸️ Duraklat";
  } else {
    music.pause();
    musicBtn.textContent = "🎵 Müzik";
  }
});

// countdown
const weddingDate = new Date("2026-05-23T19:00:00").getTime();
setInterval(() => {
  const now = Date.now();
  const diff = weddingDate - now;
  if (diff < 0) return;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("countdown").innerText =
    `⏳ ${d} gün ${h} saat ${m} dk kaldı`;
}, 1000);
