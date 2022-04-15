
let types_buttons_odd = document.getElementsByClassName('odd-type');
let types_buttons_even = document.getElementsByClassName('even-type');
let popup_yellow = document.getElementById('popup-yellow');
let popup_cross = document.getElementById('popup-yellow-cross');
let types_section = document.getElementById('types');
let types_buttons = types_section.querySelectorAll('button');
let website_html = document.querySelector('.Website_html');
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