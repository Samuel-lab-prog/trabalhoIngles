const feedButton = document.querySelector(".button");
const selectCharacter = document.getElementById("characterOptions");
const selectFood = document.getElementById("foodOptions");
const creatureImage = document.querySelector("#creatureImage img");
const happinessLevel = document.querySelector("#happinessLevel");
const healthLevel = document.querySelector("#healthLevel");

let type = 'Healthy';
let character = "Hello Kitty";
let happinessLevelValue = 50;
let healthLevelValue = 50;
let value = 1;

function updateCreatureImage(size) {
  creatureImage.style.setProperty("--size", size);
}

function changeCreatureImage(character) {
  creatureImage.src = `images/${character}.webp`;
  value = 1; 
  happinessLevelValue = 50; 
  healthLevelValue = 50; 
  updateCreatureImage(value);
  updateHappinessLevel(happinessLevelValue);
  updateHealthLevel(healthLevelValue);
}

function updateHappinessLevel(level) {
  happinessLevel.style.setProperty("--happiness-level", `${level}%`);
}

function updateHealthLevel(level) {
  healthLevel.style.setProperty("--health-level", `${level}%`);
}

updateCreatureImage(value);
updateHappinessLevel(happinessLevelValue);
updateHealthLevel(healthLevelValue);

selectCharacter.addEventListener("change", (event) => {
  selectedCharacter = event.target.value;
  character = selectedCharacter;
  changeCreatureImage(selectedCharacter.replace(/\s+/g, ""));
});

selectFood.addEventListener("change", (event) => {
  let optionSelected = event.target.options[event.target.selectedIndex];
  if (optionSelected.parentElement.label === "healthy") {
    type = "Healthy";
  } else {
    type = "Unhealthy";
  }
});

feedButton.addEventListener("click", () => {
  if (type === "Healthy") {
    if (happinessLevelValue + 10 > 100) {
      alert(`${character} is too sad to eat healthy food!`);
      return;
    }

    if (value > 1) {
      value -= 1;
      updateCreatureImage(value);
    }

    happinessLevelValue += 10;
    healthLevelValue -= 10;

  } else if (type === "Unhealthy") {
    if (healthLevelValue + 10 > 100) {
      alert(`${character} is too unhealthy to eat unhealthy food!`);
      return;
    }

    if (happinessLevelValue <= 50) {
      value += 1;
      updateCreatureImage(value);
    }

    happinessLevelValue -= 10;
    healthLevelValue += 10;
  }

  updateHappinessLevel(happinessLevelValue);
  updateHealthLevel(healthLevelValue);
});
