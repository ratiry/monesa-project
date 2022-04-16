
let types_buttons_odd = document.getElementsByClassName('odd-type');
let types_buttons_even = document.getElementsByClassName('even-type');
let popup_yellow = document.getElementById('popup-yellow');
let popup_cross = document.getElementById('popup-yellow-cross');
let types_section = document.getElementById('types');
let types_buttons = types_section.querySelectorAll('button');
let website_html = document.querySelector('.Website_html');
let slide = document.querySelector('.presentation-section-slider-slide');
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
let showSlides = function(){
  if(slideIndex > slide.children.length-1){
    slideIndex =0;
  }
  if(slideIndex<0){
    slideIndex =slide.children.length-1;
  }
  for(let i=0;i<slide.children.length;i++){
    slide.children[i].style.display = 'none';
  }
  slide.children[slideIndex].style.display = 'block';
}
showSlides(slideIndex);