//add global event listener
document.addEventListener("click", (e) => {
  // close any open dropdown menus
  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    dropdown.classList.remove("active");
  });
});
