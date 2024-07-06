const toggleButton = document.getElementsByClassName("toggle-button")[0];

toggleButton.addEventListener("click", toggleButtonClicked);

function toggleButtonClicked() {
  toggleButton.classList.toggle("click");
  document.body.classList.toggle("dark-theme");
}
