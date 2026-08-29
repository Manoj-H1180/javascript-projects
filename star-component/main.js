const starComponent = document.querySelectorAll(".fa-star-0");
const selectedStarValue = document.querySelector(".selected-value");

let currentSelectedValue = -1;

starComponent.forEach((starItem, index) => {
  starItem.dataset.rating = index + 1;
  starItem.addEventListener("mouseover", handleMouseOver);
  starItem.addEventListener("click", handleClick);
  starItem.addEventListener("mouseleave", handleMouseLeave);
});

function handleMouseOver(event) {
  let currentSelectedRating = event.target.dataset.rating;
  if (!currentSelectedRating) return;
  else handleUpdateRating(currentSelectedRating);
}

function handleUpdateRating(getCurrentRating) {
  for (let i = 0; i < 5; i++) {
    if (i < getCurrentRating) {
      starComponent[i].classList.replace("fa-star-0", "fa-star");
    } else {
      starComponent[i].classList.replace("fa-star", "fa-star-0");
    }
  }
}

function handleClick() {
  let currentSelectedRating = event.target.dataset.rating;
  currentSelectedValue = currentSelectedRating;

  handleUpdateRating(currentSelectedValue);

  selectedStarValue.textContent = currentSelectedValue;
}

function handleMouseLeave() {
  handleUpdateRating(currentSelectedValue);
}
