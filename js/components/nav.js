export default function navBarToggler() {
  const toggleIcon = document.getElementById("toggle-icon");
  const closeMenuIcon = document.getElementById("close-menu");
  const navMenu = document.getElementById("res-menu");
  toggleIcon.addEventListener("click", () => {
    navMenu.classList.remove("hide");
  });
  closeMenuIcon.addEventListener("click", () => {
    navMenu.classList.add("hide");
  });
}
