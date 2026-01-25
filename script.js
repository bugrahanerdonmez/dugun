document.addEventListener("DOMContentLoaded", () => {

  // Smooth scroll
  window.go = function (id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll fade-in animation
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });

  sections.forEach(section => observer.observe(section));

  // Theme toggle + remember
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

  // Lightbox
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  document.querySelectorAll(".grid img").forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  if (lightbox) {
    lightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  }

});
