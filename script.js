/* JS aktif işareti (CSS animasyon güvenliği için) */
document.documentElement.classList.add("js");

/* Scroll fonksiyonu (HTML onclick için) */
function go(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", () => {

  /* ===========================
     FADE-IN ANİMASYON
  =========================== */
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
    /* Eski tarayıcı fallback */
    sections.forEach(s => s.classList.add("show"));
  }

  /* ===========================
     TEMA SWITCH + HATIRLAMA
  =========================== */
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

  /* ===========================
     GALERİ LIGHTBOX (opsiyonel)
  =========================== */
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

});
