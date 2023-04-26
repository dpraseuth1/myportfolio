const barsButton = document.getElementById("bars");
const navList = document.getElementById("nav-list");

function toggleButton() {
  navList.classList.toggle("show");
}

barsButton.addEventListener("click", toggleButton);
