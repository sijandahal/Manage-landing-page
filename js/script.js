$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})

// nvbar

var navbutton = document.querySelector('.menu-toggle');
var burger = document.querySelector('.hamburger');
var menu = document.querySelector('.menu');


navbutton.addEventListener('click', function(){
  burger.classList.toggle('open');
  menu.classList.toggle('toggled');
  document.body.classList.toggle('menu-open')

})