const carousel = document.querySelector(".carousel")
const nextButton = carousel.querySelector(".next-button")
const previousButton = carousel.querySelector(".previous-button")
const contents = carousel.querySelector(".carousel__contents")
const slide = Array.from(carousel.querySelectorAll(".carousel__slide"))
const dotsContainer = carousel.querySelector(".carousel__dots")
const dots = Array.from(carousel.querySelectorAll(".carousel__dot"))
const slideWidth = slide[0].getBoundingClientRect().width

slide.forEach((slide, index) => {
  slide.style.left = slideWidth * index + "px"
})

nextButton.addEventListener("click", (event) => {
  let currentSlide = contents.querySelector(".is-selected")
  let nextSlide = currentSlide.nextElementSibling
  let destination = getComputedStyle(nextSlide).left
  contents.style.left = "-" + destination
  currentSlide.classList.remove("is-selected")
  nextSlide.classList.add("is-selected")
  previousButton.removeAttribute("hidden")
  if (!nextSlide.nextElementSibling) {
    nextButton.setAttribute("hidden", true)
  }
  let currentDot = dotsContainer.querySelector(".is-selected")
  let nextDot = currentDot.nextElementSibling
  currentDot.classList.remove("is-selected")
  nextDot.classList.add("is-selected")
})

previousButton.addEventListener("click", (event) => {
  let currentSlide = contents.querySelector(".is-selected")
  let previousSlide = currentSlide.previousElementSibling
  let destination = getComputedStyle(previousSlide).left
  contents.style.left = "-" + destination
  currentSlide.classList.remove("is-selected")
  previousSlide.classList.add("is-selected")
  nextButton.removeAttribute("hidden")
  if (!previousSlide.previousElementSibling) {
    previousButton.setAttribute("hidden", true)
  }
  let currentDot = dotsContainer.querySelector(".is-selected")
  let previousDot = currentDot.previousElementSibling
  currentDot.classList.remove("is-selected")
  previousDot.classList.add("is-selected")
})

dots.forEach((dot, index) => {
  dot.addEventListener("click", (event) => {
    let currentDot = dotsContainer.querySelector(".is-selected")
    let currentSlide = contents.querySelector(".is-selected")
    let lastDotIndex = dots.length - 1
    let destination
    if (dots[index] === dot) {
      destination = getComputedStyle(slide[index]).left
      contents.style.left = "-" + destination
      currentDot.classList.remove("is-selected")
      dot.classList.add("is-selected")
    }
    if (dots[0] === dot) {
      previousButton.setAttribute("hidden", true)
      nextButton.removeAttribute("hidden")
    } else if (dots[index] === dots[lastDotIndex]) {
      nextButton.setAttribute("hidden", true)
      previousButton.removeAttribute("hidden")
    } else {
      previousButton.removeAttribute("hidden")
      nextButton.removeAttribute("hidden")
    }
    currentSlide.classList.remove("is-selected")
    slide[index].classList.add("is-selected")
  })
})

window.addEventListener("resize", () => {
  location.reload()
})
