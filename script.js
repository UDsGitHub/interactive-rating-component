const ratingForm = document.getElementById("ratings-form");
const ratingCard = document.getElementById("rating-card");
const thankyouCard = document.getElementById("thankyou-card");
const ratingOutput = document.getElementById("rating-value");

ratingForm.addEventListener("submit", (e) => handleSubmit(e));

function handleSubmit(e) {
  e.preventDefault();
  let selectedRating = document.querySelector('input[name="rating"]:checked');
  ratingOutput.innerText =
    selectedRating.value != null ? selectedRating.value : null;
  ratingCard.style.display = "none";
  thankyouCard.style.display = "flex";
}
