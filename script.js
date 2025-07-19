const feedButton = document.querySelector(".button");
const selectCharacter = document.getElementById("characterOptions");
const selectFood = document.getElementById("foodOptions");
const creatureImage = document.querySelector("#creatureImage img");
const happinessLevel = document.querySelector("#happinessLevel");
const healthLevel = document.querySelector("#healthLevel");
let type = null;

let happinessLevelValue = 50;
let healthLevelValue = 50;
let value = 1;

function updateCreatureImage(value) {
    creatureImage.style.setProperty("--size", value);
}
function changeCreatureImage(character) {
  creatureImage.src = `images/${character}.webp`;
  happinessLevelValue = 50;
  healthLevelValue = 50;
  value = 1;
}
function updateHappinessLevel(level) {
  happinessLevel.style.setProperty("--happiness-level", `${level}%`);
}
function updateHealthLevel(level) {
  healthLevel.style.setProperty("--health-level", `${level}%`);
}

selectCharacter.addEventListener("change", (event) => {
  selectedCharacter = event.target.value;
  changeCreatureImage(selectedCharacter.replace(/\s+/g, ""));
});
selectFood.addEventListener("change", (event) => {
  let optionSelected = event.target.selectedOptions[0];
  if (optionSelected.parentElement.label === "healthy") {
    type = "Healthy";
  } else {
    type = "Unhealthy";
  }
});
feedButton.addEventListener("click", () => {
  if (type == "Healthy") {
    if (happinessLevelValue - 10 < 0) {
      alert("Your creature is too sad to eat healthy food!");
      return;
    } else {
        if(!(value - 1 < 1)){
            value -= 1;
            updateCreatureImage(value);
        }
      happinessLevelValue -= 10;
      healthLevelValue += 10;
      updateHappinessLevel(happinessLevelValue);
      updateHealthLevel(healthLevelValue);
    }
  } else {
    if (healthLevelValue - 10 < 0) {
      alert("Your creature is too unhealthy to eat unhealthy food!");
      return;
    } else {
      if(!(happinessLevelValue >= 50 )){
            value += 1;
            updateCreatureImage(value);
        }
      happinessLevelValue += 10;
      healthLevelValue -= 10;
      updateCreatureImage(value);
      updateHappinessLevel(happinessLevelValue);
      updateHealthLevel(healthLevelValue);
    }
  }
});
