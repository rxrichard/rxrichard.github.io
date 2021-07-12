/*ABRE E FECHA MENU QUANDO CLICAR NO MENU*/
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

/*QUANDO CLICAR EM UM ITEM DO MENU ESCONDER O MENU*/
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
}

/*MENU ATIVO DA SEÇÃO*/
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSections(){

  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for(const section of sections){
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if(checkpointStart && checkpointEnd){
      document
      .querySelector(`nav ul li a[href*= ${sectionId}]`)
      .classList.add('active')
    }else{
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.remove('active')

    }

  }

}

/*********************************WHEN SCROLL*********************************/
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;
function changeHeaderWhenScroll() {
   if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}
/*botao top*/
const backToTopButton = document.querySelector(".back-to-top");
function backToTop(){
  

  if (window.scrollY >= 600) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

/*************************TESTIMONIALS SLIDER SWIPER*************************/

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },

  autoplay: {
    delay: 10000,
  },
  loop: true,
  mousewhell: true,
  keyboard: true,
  pauseOnMouseEnter: true,

  breakpoints:{
    769:{
      slidesPerView: 2,
      setWrapperSize: true,
    }
  }
});

/*****************************SCROLL REVEAL*****************************/
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: false,
});

scrollReveal.reveal(
  `
  #home .text, #home .image
  #about .image,#about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social-media
`,
  { interval: 100 }
);


/*chamadas*/

window.addEventListener("scroll", () => {
  changeHeaderWhenScroll();
  backToTop();
  activateMenuAtCurrentSections()
});

