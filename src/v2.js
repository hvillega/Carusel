const carousel = document.querySelector(".carousel")
const contents = carousel.querySelector(".carousel__contents")
const nextButton = carousel.querySelector(".next-button")
const previousButton = carousel.querySelector(".previous-button")

nextButton.addEventListener("click", () => {
  const current = carousel.querySelector(".is-selected")
  const nextSlide = current.nextElementSibling
  const destination = getComputedStyle(nextSlide).left

  contents.style.left = "-" + destination
  current.classList.remove("is-selected")
  nextSlide.classList.add("is-selected")
  previousButton.removeAttribute("hidden")

  if (!nextSlide.nextElementSibling) {
    nextButton.setAttribute("hidden", true)
  }
})

previousButton.addEventListener("click", () => {
  const current = carousel.querySelector(".is-selected")
  const previousSlide = current.previousElementSibling
  const destination = getComputedStyle(previousSlide).left

  contents.style.left = "-" + destination
  current.classList.remove("is-selected")
  previousSlide.classList.add("is-selected")
  nextButton.removeAttribute("hidden", true)

  if (!previousSlide.previousElementSibling) {
    previousButton.setAttribute("hidden", true)
  }
})
