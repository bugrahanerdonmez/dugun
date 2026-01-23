function go(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById("themeToggle").addEventListener("change", function () {
  document.body.classList.toggle("dark");
});
