let types_buttons_odd = document.getElementsByClassName('odd-type');
let types_buttons_even = document.getElementsByClassName('even-type');
let popup_yellow = document.getElementById('popup-yellow');
let popup_cross = document.querySelector('.cross-container-button');
for(let i = 0;i<types_buttons_even.length;i++){
  types_buttons_even[i].addEventListener('click',function(){
    console.log(types_buttons_even[i].style.display);
    popup_yellow.classList.add('popup-animation');
  })
}
popup_cross.addEventListener('click',function(){
  popup_yellow.classList.remove('popup-animation');
})