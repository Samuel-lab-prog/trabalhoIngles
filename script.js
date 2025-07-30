const playButton = document.getElementById("playButton");
const donateButtons = document.querySelectorAll("#donateButton");

playButton.addEventListener("click", () => {
  window.location.href = "game/gamePage.html";
});

donateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = "donate.html";
  });
});