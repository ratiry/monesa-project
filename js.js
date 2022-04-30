
let types_buttons_odd = document.getElementsByClassName('odd-type');
let types_buttons_even = document.getElementsByClassName('even-type');
let popup_yellow = document.getElementById('popup-yellow');
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
    website_html.style.overflow = 'hidden';
    website_html.style.opacity = '20%';
  })
}

popup_cross.addEventListener('click',function(){
  popup_yellow.classList.add('display-none');
  popup_yellow.classList.remove('popup-animation');
  website_html.style.overflow = 'scroll';
  website_html.style.opacity = '100%';
})

for(let i=0;i<slide.children.length;i++){
  let button= document.createElement('button');
  button.classList.add('slider-dot');
  slider_dots_container.appendChild(button);
  button.addEventListener('click',function(){
    equel_slide_function(i);
  })
}
// End Popup

// Slider
let slideIndex = 0;
let slider_button_next = document.getElementById('slider_button_next');
let slider_button_previous = document.getElementById('slider_button_previous');
slider_button_next.addEventListener('click',function(){
  plusSlide_function(1);
})
slider_button_previous.addEventListener('click',function(){
  plusSlide_function(-1);
})
let plusSlide_function = function(n){
  showSlides(slideIndex +=n);
}
let equel_slide_function = function(n){
  showSlides(slideIndex =n);
}
let showSlides = function(){
  if(slideIndex > slide.children.length-1){
    slideIndex =0;
  }
  if(slideIndex<0){
    slideIndex =slide.children.length-1;
  }
  for(let i=0;i<slide.children.length;i++){
    slide.children[i].style.display = 'none';
    slider_dots_container.children[i].classList.remove('active-button-slider');  
  }
  slider_dots_container.children[slideIndex].classList.add('active-button-slider');
  slide.children[slideIndex].style.display = 'block';
}
showSlides(slideIndex);
// END Slider

// Menu
let menu_appearing_button = document.getElementById('button-menu');
let menu_cross_button = document.getElementById('menu-cross');
let menu = document.querySelector('.menu-container');
menu_appearing_button.addEventListener('click',function(){
  menu.classList.add('menu-animation');
})
menu_cross_button.addEventListener('click',function(){
  menu.classList.remove('menu-animation');
})
// END Menu