//add global event listener
document.addEventListener("click", (e) => {
  // close any open dropdown menus
  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    dropdown.classList.remove("active");
  });
});

// find the right dropdown based on what was clicked
const dropdownButton = e.target.matches("[data-dropdown-button")
  ? e.target
  : e.target.closest("[data-dropdown-button");
