
let types_buttons_odd = document.getElementsByClassName('odd-type');
let types_buttons_even = document.getElementsByClassName('even-type');
let popup_yellow = document.getElementById('popup-yellow');
let body_overlay = document.getElementById('body_overlay');
let popup_cross = document.getElementById('popup-yellow-cross');
let types_section = document.getElementById('types');
let types_buttons = types_section.querySelectorAll('button');
let website_html = document.querySelector('.Website_html');
let slider_dots_container = document.querySelector('.slider-dots');
let slide = document.querySelector('.hero-section-slider-slide');

// Popup
for(let i=0;i<types_buttons.length;i++){
  types_buttons[i].addEventListener('click',function(){
    popup_yellow.classList.add('popup-animation');
    body_overlay.classList.add('visible');
    website_html.style.overflow = 'hidden';

  })
}

popup_cross.addEventListener('click',function(){
  popup_yellow.classList.add('display-none');
  popup_yellow.classList.remove('popup-animation');
  body_overlay.classList.remove('visible');
  website_html.style.overflow = 'scroll';
  website_html.style.opacity = '100%';
})

window.addEventListener('click',function(e){
  if(!e.target.closest("#popup-yellow") & window.getComputedStyle(popup_yellow).visibility == 'visible' ){
    console.log('something');
    popup_yellow.classList.add('display-none');
    popup_yellow.classList.remove('popup-animation');
    body_overlay.classList.remove('visible');
    website_html.style.overflow = 'scroll';
    website_html.style.opacity = '100%';
    key_to_close_popup = false;
  }
})
document.addEventListener('keydown',function(e){
  console.log(e);
  if(EventTarget.keyCode =='27' || window.getComputedStyle(popup_yellow).visibility == 'visible'){
    console.log('something');
    popup_yellow.classList.add('display-none');
    popup_yellow.classList.remove('popup-animation');
    body_overlay.classList.remove('visible');
    website_html.style.overflow = 'scroll';
    website_html.style.opacity = '100%';
    key_to_close_popup = false;
  }
})
// End Popup
$('#hero_section_slider').slick({
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: $('#slick_arrows #slider_button_previous'),
  nextArrow: $('#slick_arrows #slider_button_next'),
});
// END Slider

// Menu
let menu_appearing_button = document.getElementById('button-menu');
let menu_cross_button = document.getElementById('menu-cross');
let menu_anchors = document.getElementById('menu-anchors')
menu_appearing_button.addEventListener('click',function(){
  menu_anchors.classList.toggle('menu-activated');
  menu_appearing_button.classList.toggle('button-menu-is-active');
})

// END Menu