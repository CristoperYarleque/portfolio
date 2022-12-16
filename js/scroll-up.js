const body = document.querySelector(".body-main");
const buttonScroll = document.querySelector(".button-scroll")

const addButton = (e) => {
  e.forEach((e) => {
    if(e.isIntersecting){
      buttonScroll.innerHTML = `<button class="scroll">
      <img src="img/icons/arrow-up.svg" alt="" />
      </button>`
    } else {
      buttonScroll.innerHTML = ``
    }
  });
}
  
const observer = new IntersectionObserver(addButton, {
  root: null,
  rootMargin: '0px',
  threshold: 0.07
});
  
observer.observe(body);

const scrollUp = document.querySelector(".button-scroll")

scrollUp.addEventListener("click", () => {
  window.scrollTo(0,-screenY,"smooth")
})