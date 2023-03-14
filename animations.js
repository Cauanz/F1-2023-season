var carrosel = [];

for (var i = 1; i <= 10; i++) {
  carrosel.push(document.querySelector(".carrosel" + i));
}

var list = document.querySelector(".pagnav");
var child = list.querySelectorAll("a");

var mobileList = document.querySelector(".mobile-pagnav");
var mobileChild = mobileList.querySelectorAll("a");

function reset() {
  carrosel[0].style.display = "none";
  carrosel[1].style.display = "none";
  carrosel[2].style.display = "none";
  carrosel[3].style.display = "none";
  carrosel[4].style.display = "none";
  carrosel[5].style.display = "none";
  carrosel[6].style.display = "none";
  carrosel[7].style.display = "none";
  carrosel[8].style.display = "none";
  carrosel[9].style.display = "none";
}

function resetColor(){
  child[0].style.backgroundColor = "rgb(255, 24, 1)";
  child[1].style.backgroundColor = "rgb(255, 24, 1)";
  child[2].style.backgroundColor = "rgb(255, 24, 1)";
  child[3].style.backgroundColor = "rgb(255, 24, 1)";
  child[4].style.backgroundColor = "rgb(255, 24, 1)";
  child[5].style.backgroundColor = "rgb(255, 24, 1)";
  child[6].style.backgroundColor = "rgb(255, 24, 1)";
  child[7].style.backgroundColor = "rgb(255, 24, 1)";
  child[8].style.backgroundColor = "rgb(255, 24, 1)";
  child[9].style.backgroundColor = "rgb(255, 24, 1)";

  mobileChild[0].style.backgroundColor = "rgb(255, 24, 1)";
  mobileChild[1].style.backgroundColor = "rgb(255, 24, 1)";
  mobileChild[2].style.backgroundColor = "rgb(255, 24, 1)";
  mobileChild[3].style.backgroundColor = "rgb(255, 24, 1)";
  mobileChild[4].style.backgroundColor = "rgb(255, 24, 1)";
  mobileChild[5].style.backgroundColor = "rgb(255, 24, 1)";
  mobileChild[6].style.backgroundColor = "rgb(255, 24, 1)";
  mobileChild[7].style.backgroundColor = "rgb(255, 24, 1)";
  mobileChild[8].style.backgroundColor = "rgb(255, 24, 1)";
  mobileChild[9].style.backgroundColor = "rgb(255, 24, 1)";
}

function aparece(n){
  if(n === 1){
    reset();
    carrosel[0].style.display = "block";

    resetColor();
    child[0].style.backgroundColor = "rgb(122, 0, 0)";
    mobileChild[0].style.backgroundColor = "rgb(122, 0, 0)";
  } else if(n === 2){
    reset();
    carrosel[1].style.display = "block";

    resetColor();
    child[1].style.backgroundColor = "rgb(122, 0, 0)";
    mobileChild[1].style.backgroundColor = "rgb(122, 0, 0)";
  } else if (n === 3){
    reset();
    carrosel[2].style.display = "block";

  resetColor();
    child[2].style.backgroundColor = "rgb(122, 0, 0)";
    mobileChild[2].style.backgroundColor = "rgb(122, 0, 0)";
  } else if (n === 4){
    reset();
    carrosel[3].style.display = "block";

    resetColor();
    child[3].style.backgroundColor = "rgb(122, 0, 0)";
    mobileChild[3].style.backgroundColor = "rgb(122, 0, 0)";
  } else if (n === 5){
    reset();
    carrosel[4].style.display = "block";

    resetColor();
    child[4].style.backgroundColor = "rgb(122, 0, 0)";
    mobileChild[4].style.backgroundColor = "rgb(122, 0, 0)";
  } else if (n === 6){
    reset();
    carrosel[5].style.display = "block";

    resetColor();
    child[5].style.backgroundColor = "rgb(122, 0, 0)";
    mobileChild[5].style.backgroundColor = "rgb(122, 0, 0)";
  } else if (n === 7){
    reset();
    carrosel[6].style.display = "block";

    resetColor();
    child[6].style.backgroundColor = "rgb(122, 0, 0)";
    mobileChild[6].style.backgroundColor = "rgb(122, 0, 0)";
  } else if (n === 8){
    reset();
    carrosel[7].style.display = "block";

    resetColor();
    child[7].style.backgroundColor = "rgb(122, 0, 0)";
    mobileChild[7].style.backgroundColor = "rgb(122, 0, 0)";
  } else if (n === 9) {
    reset();
    carrosel[8].style.display = "block";

    resetColor();
    child[8].style.backgroundColor = "rgb(122, 0, 0)";
    mobileChild[8].style.backgroundColor = "rgb(122, 0, 0)";
  } else {
    reset();
    carrosel[9].style.display = "block";

    resetColor();
    child[9].style.backgroundColor = "rgb(122, 0, 0)";
    mobileChild[9].style.backgroundColor = "rgb(122, 0, 0)";
  }
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
