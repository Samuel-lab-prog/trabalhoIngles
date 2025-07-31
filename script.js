const playButtons = document.getElementsByClassName("playButton");
const donateButtons = document.querySelectorAll("#donateButton");

Array.from(playButtons).forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = "game/gamePage.html";
  });
});

donateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = "donate.html";
  });
});