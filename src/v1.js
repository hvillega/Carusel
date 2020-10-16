const carousel = document.querySelector(".carousel")
const contents = carousel.querySelector(".carousel__contents")
const previousButton = carousel.querySelector(".previous-button")
const nextButton = carousel.querySelector(".next-button")

// <- Back button
previousButton.addEventListener("click", (event) => {
  const currentSlide = contents.querySelector(".is-selected")
  const previousSlide = currentSlide.previousElementSibling
  const destination = getComputedStyle(previousSlide).left

  contents.style.left = "-" + destination
  currentSlide.classList.remove("is-selected")
  previousSlide.classList.add("is-selected")

  // Shows next button
  nextButton.removeAttribute("hidden")

  // Hides previous button
  if (!previousSlide.previousElementSibling) {
    previousButton.setAttribute("hidden", true)
  }
})

// -> Next Button
nextButton.addEventListener("click", (event) => {
  const currentSlide = contents.querySelector(".is-selected")
  const nextSlide = currentSlide.nextElementSibling
  const destination = getComputedStyle(nextSlide).left
  previousButton.removeAttribute("hidden")

  contents.style.left = "-" + destination
  currentSlide.classList.remove("is-selected")
  nextSlide.classList.add("is-selected")

  // Hides next button
  if (!nextSlide.nextElementSibling) {
    nextButton.setAttribute("hidden", true)
  }
})
a
