window.addEventListener("scroll", function(){

   var nav = document.querySelector("nav");

    nav.classList.toggle("scroll" , window.scrollY>10);
});

// GOOGLE MAPS

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat:-33.022917 ,lng:-71.567152},
    zoom: 15,
  });
}

window.initMap = initMap;

// ------

const btnMenu = document.querySelector("#open-menu");
const Menu = document.querySelector("#navbar-nav");
const CloseMenu = document.querySelector("#menu-mobile-close");
const CloseMenu2 = document.querySelector("#close-menu");
const updatemenu = document.querySelector(".nav-item");


btnMenu.addEventListener('click', function closeMenu3(){
    CloseMenu2.classList.toggle('close');
    CloseMenu.classList.toggle('close');
    Menu.classList.toggle('activar');
});

CloseMenu.addEventListener('click', function(){
    Menu.classList.toggle('activar');
    CloseMenu2.classList.toggle('close');
    CloseMenu.classList.toggle('close');
});

// updatemenu.addEventListener('click', function(){
//     Menu.classList.toggle('activar');
//     CloseMenu.classList.toggle('close');
//     CloseMenu2.classList.toggle('close');
// });

function closeMenu() {
    //Close Menu
    Menu.classList.toggle('activar');
    CloseMenu.classList.toggle('close');
    CloseMenu2.classList.toggle('close');
}



// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 4,
//     centeredSlides: true,
//     spaceBetween: 30,
//     grabCursor: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });


// SCROLL EFFECT REVEAL

// ScrollReveal().reveal('.nav', { delay: 1000 , reset: true});
ScrollReveal().reveal('h1',{ distance: '50px' });
ScrollReveal().reveal('h2',{ distance: '50px' });
ScrollReveal().reveal('h3',{ distance: '50px' });
ScrollReveal().reveal('h4',{ distance: '50px' });
ScrollReveal().reveal('textarea',{ delay: 500,  reset: true, distance:'50px' });
ScrollReveal().reveal('input', { delay: 500 , reset: true, useDelay: 'once', distance:'50px' });

ScrollReveal().reveal('.gallery-img', { delay: 500,  reset: true, useDelay: 'once', distance: '50px' });
ScrollReveal().reveal('.footer-icons', { delay: 600,  reset: true, useDelay: 'once', distance: '50px' });
ScrollReveal().reveal('.menu-details', { delay: 500,  reset: true, useDelay: 'once', distance: '50px' });
ScrollReveal().reveal('.footer-icons', { delay: 600,  reset: true, useDelay: 'once', distance: '50px' });
ScrollReveal().reveal('.footer-column a', { delay: 300,  reset: true ,distance: '50px' });
ScrollReveal().reveal('.contenido-text', { delay: 600,  reset: true, distance: '-50px' });
ScrollReveal().reveal('.contact-container', { delay: 600,  reset: true, distance: '50px' });
// ScrollReveal().reveal('a', { delay: 500,  reset: true});


