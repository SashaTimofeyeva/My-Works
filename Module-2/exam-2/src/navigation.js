const nav_item = document.getElementsByClassName("navigation__item");

function navigate(event) {
    const nav_circle = event.target.firstElementChild;
    if(event.target.classList.contains("navigation__item--active")) {
        console.log(event.target);
        console.log(nav_circle);
        event.target.classList.remove("navigation__item--active");
        nav_circle.classList.remove("nav-circle--active");
    } else {
        event.target.classList.add("navigation__item--active");
        nav_circle.classList.add("nav-circle--active");
    }
}

for(let i = 0; i < nav_item.length; i++){
    nav_item[i].addEventListener('click', navigate, false);
}