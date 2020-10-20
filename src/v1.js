const carousel = document.querySelector(".carousel")
const contents = carousel.querySelector(".carousel__contents")
const previousButton = carousel.querySelector(".previous-button")
const nextButton = carousel.querySelector(".next-button")
const slides = Array.from(carousel.querySelectorAll(".carousel__slide"))
const dots = Array.from(carousel.querySelectorAll(".carousel__dot"))
const dotsContainer = carousel.querySelector(".carousel__dots")
const slideWidth = slides[0].getBoundingClientRect().width

// Slides width

slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + "px"
})

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

  // Highlight Dot
  const currentDot = dotsContainer.querySelector(".is-selected")
  const previousDot = currentDot.previousElementSibling
  currentDot.classList.remove("is-selected")
  previousDot.classList.add("is-selected")
})

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

  // Highlight Dot
  const currentDot = dotsContainer.querySelector(".is-selected")
  const nextDot = currentDot.nextElementSibling
  currentDot.classList.remove("is-selected")
  nextDot.classList.add("is-selected")
})

dots.forEach((dot) => {
  // En cada dot agrega un event listener
  dot.addEventListener("click", (event) => {
    //  Buscar el index y asignarlo a clickedDotIndex, y borra is-selected
    let clickedDotIndex
    for (let i = 0; i < dots.length; i++) {
      // Remove selected class on dots
      dots[i].classList.remove("is-selected")
      // Assign current index to clickedDotIndex
      if (dots[i] === dot) {
        clickedDotIndex = i
      }
    }

    // Remove is-selected from Slide
    const currentSlide = contents.querySelector(".is-selected")
    currentSlide.classList.remove("is-selected")

    // Change slide
    const slideToShow = slides[clickedDotIndex]
    const destination = getComputedStyle(slideToShow).left
    contents.style.left = "-" + destination

    // Add dot selected color
    dot.classList.add("is-selected")
    slideToShow.classList.add("is-selected")

    // Show hidden buttons
    if (clickedDotIndex === 0) {
      previousButton.setAttribute("hidden", true)
      nextButton.removeAttribute("hidden")
    } else if (clickedDotIndex === dots.length - 1) {
      previousButton.removeAttribute("hidden")
      nextButton.setAttribute("hidden", true)
    } else {
      previousButton.removeAttribute("hidden")
      nextButton.removeAttribute("hidden")
    }
  })
})
