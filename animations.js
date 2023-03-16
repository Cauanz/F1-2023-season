var carrosel = [];

for (var i = 1; i <= 10; i++) {
  carrosel.push(document.querySelector(".carrosel" + i));
}

var list = document.querySelector(".pagnav");
var child = list.querySelectorAll("a");

var mobileList = document.querySelector(".mobile-pagnav");
var mobileChild = mobileList.querySelectorAll("a");


function reset() {
  for (let i = 0; i < carrosel.length; i++) {
    carrosel[i].style.display = "none";
  }
}

function resetColor() {
  for (var i = 0; i < child.length; i++) {
    child[i].style.backgroundColor = "rgb(255, 24, 1)";
  }

  for (var i = 0; i < mobileChild.length; i++) {
    mobileChild[i].style.backgroundColor = "rgb(255, 24, 1)";
  }
}

function aparece(n){
  const colors = ["rgb(122, 0, 0)"];
  
  reset();
  carrosel[n-1].style.display = "block";

  resetColor();
  child[n-1].style.backgroundColor = colors[0];
  mobileChild[n-1].style.backgroundColor = colors[0];
}

function closemenu() {
  if (x.matches) { // If media query matches
  var menu = document.getElementById('menu');
  document.getElementById('open-menu').addEventListener('click', function() {
  menu.classList.toggle('show');
  });
  } 
};
var x = window.matchMedia("(max-width: 480px)");
closemenu();