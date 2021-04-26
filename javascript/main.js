const myBar = document.querySelector(".hide");
const myMenu = document.querySelector(".menu");

myBar.onclick = function () {
  myMenu.classList.toggle("show-hide");
};

var scroll = new SmoothScroll('a[href*="#"]');
