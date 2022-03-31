let rating = 0;

const btnSubmit = document.querySelector(".btn-submit");
const ratingBtns = document.querySelector(".rating__buttons");
const ratingWrapper = document.querySelector(".rating__wrapper");

ratingBtns.addEventListener("click", (e) => {
  if (!e.target.dataset.rating) return;
  rating = e.target.dataset.rating;
});

btnSubmit.addEventListener("click", (e) => {
  ratingWrapper.querySelector(".content").classList.add("fade-out");
  setTimeout(() => {
    updateContent();
  }, 250);
});

function updateContent() {
  ratingWrapper.innerHTML = `
    <div class="rating__thankyou fade-in">
        <img src="images/illustration-thank-you.svg" alt="Thank you" />
        <div class="rating__callout">
        You selected ${rating} out of 5
        </div>
        <h2>Thank you!</h2>
        <p class="rating__text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
        </p>
    </div>`;
}
