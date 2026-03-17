const galleryWrapper = document.getElementById("galleryWrapper");

for (let i = 1; i <= 15; i++) {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";

  const img = document.createElement("img");
  img.src = `gallery/${i}.jpg`;

  img.onerror = () => {
    slide.remove();
  };

  slide.appendChild(img);
  galleryWrapper.appendChild(slide);
}

new Swiper(".gallerySwiper", {
  loop: true,
  centeredSlides: true,
  slidesPerView: 1.2,
  spaceBetween: 20,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

document.getElementById("musicBtn").onclick = () => {
  const music = document.getElementById("music");
  const icon = document.getElementById("musicIcon");

  if (music.paused) {
    music.play();
    icon.classList.remove("play");
    icon.classList.add("pause");
  } else {
    music.pause();
    icon.classList.remove("pause");
    icon.classList.add("play");
  }
};

function startCountdown(targetDate, elementId) {
  const el = document.getElementById(elementId);

  setInterval(() => {
    const diff = targetDate - Date.now();

    if (diff < 0) {
      el.innerText = "Bugün 🎉";
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);

    el.innerText = `⏳ ${d}g ${h}s ${m}dk`;
  }, 1000);
}

startCountdown(new Date("2026-05-23T19:00:00"), "countdown-wedding");
startCountdown(new Date("2026-05-09T14:30:00"), "countdown-nikah");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
