import {skills,projects} from "../data/data.js"

// SHOW DOM 
const bodySkill = document.querySelector(".skills")
let div = ""
for(let i = 0 ; i < skills.length; i++) {
  div = div + `<div class="card-skill skill-${i}">
  <div class="card-skill-layout">
      <img src="${skills[i].src}" alt="${i}">
      <div>
          <h6 class="text-xl secondary regular">${skills[i].title}</h6>
      </div>
  </div>
  </div>`
}
bodySkill.innerHTML = div

const bodyProjects = document.querySelector(".projects")
let div1 = ""
for(let i = 0 ; i < projects.length; i++) {
  div1 = div1 + `<div class="card-project project-${i}">
  <div class="card-project-layout">
      <img src="${projects[i].src}" alt="${i}">
      <div class="layout-button">
          <a href="${projects[i].link}" target="_blank"><button class="btn btn-primary">${projects[i].title}</button></a>
          <p class="text secondary regular">${projects[i].description}</p>
      </div>
  </div>
  </div>`
}
bodyProjects.innerHTML = div1

// SCROLL ANIMATE
for(let i = 0 ; i < skills.length; i++) {
  const cardSkill = document.querySelector(`.skill-${i}`);

  const cardAnimate = (e) => {
    e.forEach((e) => {
      if(e.isIntersecting){
        e.target.classList.add('show-skill');
        observer.unobserve(cardSkill)
      } 
    });
  }
  
  const observer = new IntersectionObserver(cardAnimate, {
    root: null,
    rootMargin: '0px',
    threshold: 0.03
  });
  
  observer.observe(cardSkill);
}

for(let i = 0 ; i < projects.length; i++) {
  const cardProject = document.querySelector(`.project-${i}`);

  const cardAnimate = (e) => {
    e.forEach((e) => {
      if(e.isIntersecting){
        e.target.classList.add('show-project');
        observer.unobserve(cardProject)
      } 
    });
  }
  
  const observer = new IntersectionObserver(cardAnimate, {
    root: null,
    rootMargin: '0px',
    threshold: 0.05
  });
  
  observer.observe(cardProject);
}

