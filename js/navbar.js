// menu-mobile
let menuBar = document.querySelector(".menu")
let navbarMobile = document.querySelector(".menu-mobile-hidden")

menuBar.addEventListener("click", () => {
  navbarMobile.classList.toggle("menu-mobile")
})

