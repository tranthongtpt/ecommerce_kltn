var x=true;
function myfunction(){
  if(x){
    document.getElementById('pass').type="text";
    x=false;
  } else {
    document.getElementById('pass').type="password"
    x=true;
  }
}

window.onscroll = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .main-menu').classList.add('active');
  }else{
    document.querySelector('.header .main-menu').classList.remove('active');
  }

}
window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .main-menu').classList.add('active');
  }else{
    document.querySelector('.header .main-menu').classList.remove('active');
  }

}

let slides = document.querySelectorAll('.home .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
