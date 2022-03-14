//add global event listener
document.addEventListener("click", (e) => {
  // close any open dropdown menus
  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    dropdown.classList.remove("active");
  });

  // find the right dropdown based on what was clicked
  const dropdownButton = e.target.matches("[data-dropdown-button]")
    ? e.target
    : e.target.closest("[data-dropdown-button]");

  //if click happens outside of any dropdown-button
  if (!dropdownButton) {
    return;
  }

  //dropdown-button is clicked, display dropdown-menu
  let currentDropDown = dropdownButton.querySelector("[data-dropdown]");

  currentDropDown.classList.add("active");
});

// to make the hamburger nav button interactive
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () =>
    document.body.classList.remove("nav-open")
  );
});
