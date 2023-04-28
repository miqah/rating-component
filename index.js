const submitButton = document.querySelector(".rating-box__submit--button");
const thankYouBox = document.querySelector(".thank-you-box");
const topContainer = document.querySelector(".rating-box");
const buttonSelection = document.querySelectorAll(".rating-box__list--button")
const rateNumber = document.querySelector(".rate");

submitButton.addEventListener("click", () => {
    thankYouBox.classList.remove("hidden");
    topContainer.style.display = "none";
});

buttonSelection.forEach((btn) => {
    btn.addEventListener("click", () => {
        rateNumber.innerHTML = btn.innerHTML;
    })
});