const hexGenBtn = document.querySelector(".hex-gen-button");
const hexColorValue = document.querySelector(".hex-color-value");
const hexContainer = document.querySelector(".hex-container");

const rgbContainer = document.querySelector(".rgb-container");

const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");

hexGenBtn.addEventListener("click", () => {
  let chatSet = "0123456789ABCDEF";
  let generatedHexColorOutput = "";

  for (let i = 0, chatSetLength = chatSet.length; i < 6; i++) {
    generatedHexColorOutput += chatSet.charAt(
      Math.floor(Math.random() * chatSetLength),
    );
  }

  hexColorValue.textContent = `#${generatedHexColorOutput}`;
  hexContainer.style.backgroundColor = `#${generatedHexColorOutput}`;
});

const updateColor = () => {
  rgbContainer.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
};

red.addEventListener("input", updateColor);
green.addEventListener("input", updateColor);
blue.addEventListener("input", updateColor);
