const allBtn = document.getElementsByClassName("button");

function clickedBtn(event) {
    if(event.target.classList.contains("button--clicked")) {
        event.target.classList.remove("button--clicked");
        console.log(event.target.classList);
    } else {
        event.target.classList.add("button--clicked");
        console.log(event.target.classList);
    }
}

for(let i = 0; i < allBtn.length; i++){
    allBtn[i].addEventListener('click', clickedBtn, false);
}
