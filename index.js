window.addEventListener("scroll", function(){

   var nav = document.querySelector("nav");

    nav.classList.toggle("scroll" , window.scrollY>10);
});

function iniciarMap(){

    var coord = {lat:-33.022917 ,lng:-71.567152};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 10,
        center: coord
    });
}

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

