/*window.addEventListener("DOMContentLoaded", function(e) {

    let welcome__slider = document.querySelector(".welcome__slider");
    let fadeComplete = function(e) { welcome__slider.appendChild(arr[0]); };
    let arr = welcome__slider.getElementsByTagName("div");
    let arr_dots = document.getElementsByClassName("slider-dots__item");
    for(let i=0; i < arr.length; i++) {
      arr[i].addEventListener("animationend", fadeComplete, false);
      arr_dots[i].classList.add("slider-dots__item--active");
      console.log(arr_dots[i].classList);
      if(i == 1) {
        arr_dots[3].classList.remove("slider-dots__item--active");
      } else if(i == 3) {
        arr_dots[1].classList.remove("slider-dots__item--active");
      } else {
        arr_dots[2].classList.remove("slider-dots__item--active");
      }
    }

}, false);*/


const welcomeBtn = document.getElementsByClassName("slider-dots__item");
const welcomeText = document.getElementsByClassName("myslider__content");

function clickedWelcomeBtn(event, welcomeCurrentText) {
  if(event.classList.contains("slider-dots__item--clicked")) {
      event.classList.remove("slider-dots__item--clicked");
      welcomeCurrentText.classList.remove("myslider__content--clicked");
      console.log(event.classList);
      console.log(welcomeCurrentText.classList);
  } else {
      event.classList.add("slider-dots__item--clicked");
      console.log(event.classList);
      welcomeCurrentText.classList.add("myslider__content--clicked");
      console.log(welcomeCurrentText.classList);
  }
}

for(let i = 0; i < welcomeBtn.length; i++){
  let welcomeCurrentText = welcomeText[i];
  welcomeBtn[i].addEventListener('click', function(){
    let myevent = welcomeBtn[i];
    clickedWelcomeBtn(myevent, welcomeCurrentText);
}, false);
}

