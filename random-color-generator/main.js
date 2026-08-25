const hexGenBtn = document.querySelector(".hex-gen-button");
const hexColorValue = document.querySelector(".hex-color-value");
const hexContainer = document.querySelector(".hex-container");

const rgbContainer = document.querySelector(".rgb-container");

const rgbColorValue = document.querySelector(".rgb-color-value");

const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");

const hexCopyBtn = document.querySelector(".hex-copy-to-clipboard");
const rgbCopyBtn = document.querySelector(".rgb-copy-to-clipboard");

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
  rgbColorValue.textContent = `rgb(${red.value}, ${green.value}, ${blue.value})`;
};

red.addEventListener("input", updateColor);
green.addEventListener("input", updateColor);
blue.addEventListener("input", updateColor);

hexCopyBtn.addEventListener("click", () => {
  alert(`${hexColorValue.textContent} Color Copied to Clipboard`);
  navigator.clipboard.writeText(hexColorValue.textContent);
});

rgbCopyBtn.addEventListener("click", () => {
  alert(
    `rgb(${red.value},${green.value},${blue.value}) Color Copied to Clipboard`,
  );
  navigator.clipboard.writeText(hexColorValue.textContent);
});
