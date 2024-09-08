const menuToggle = document.querySelector("nav .menu-toggle input");
const menu = document.querySelector("nav ul");

menuToggle.addEventListener("click", function(){
    menu.classList.toggle("slide");
});