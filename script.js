document.addEventListener("DOMContentLoaded", () => {

  /* JS aktif flag */
  document.documentElement.classList.add("js");

  /* Scroll */
  window.go = function (id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  /* Fade-in */
  const sections = document.querySelectorAll(".section");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });
    sections.forEach(s => observer.observe(s));
  } else {
    sections.forEach(s => s.classList.add("show"));
  }

  /* Theme switch */
  const toggle = document.getElementById("themeToggle");
  if (toggle) {
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
  }

  /* Lightbox */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (lightbox && lightboxImg) {
    document.querySelectorAll(".grid img").forEach(img => {
      img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
      });
    });
    lightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  }

  /* Countdown */
  const weddingDate = new Date("2026-05-23T19:00:00").getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const diff = weddingDate - now;
    if (diff < 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    const el = document.getElementById("countdown");
    if (el) {
      el.innerHTML = `⏳ ${days} gün ${hours} saat ${minutes} dk kaldı`;
    }
  }, 1000);
});

/* Müzik */
const music = document.getElementById("music");
function toggleMusic() {
  if (!music) return;
  if (music.paused) music.play();
  else music.pause();
}
