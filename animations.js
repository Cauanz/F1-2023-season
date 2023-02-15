var haas = document.querySelector(".carrosel1");
var williams = document.querySelector(".carrosel2");
var alfaromeo = document.querySelector(".carrosel3");
var alphatauri = document.querySelector(".carrosel4");
var mclaren = document.querySelector(".carrosel5");
var astonmartin = document.querySelector(".carrosel6");
var ferrari = document.querySelector(".carrosel7");
var mercedes = document.querySelector(".carrosel8");
var redbull = document.querySelector(".carrosel9");

var list = document.querySelector(".pagnav");
var child = list.querySelectorAll("a");

function reset() {
  williams.style.display = "none";
  alfaromeo.style.display = "none";
  alphatauri.style.display = "none";
  haas.style.display = "none";
  mclaren.style.display = "none";
  astonmartin.style.display = "none";
  ferrari.style.display = "none";
  mercedes.style.display = "none";
  redbull.style.display = "none";
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
}

function aparece(n){
  if(n === 1){
    reset();
    haas.style.display = "block";

    resetColor();
    child[0].style.backgroundColor = "rgb(122, 0, 0)";
  } else if(n === 2){
    reset();
    williams.style.display = "block";

    resetColor();
    child[1].style.backgroundColor = "rgb(122, 0, 0)";
  } else if (n === 3){
    reset();
    alfaromeo.style.display = "block";

  resetColor();
    child[2].style.backgroundColor = "rgb(122, 0, 0)";
  } else if (n === 4){
    reset();
    alphatauri.style.display = "block";

    resetColor();
    child[3].style.backgroundColor = "rgb(122, 0, 0)";
  } else if (n === 5){
    reset();
    mclaren.style.display = "block";

    resetColor();
    child[4].style.backgroundColor = "rgb(122, 0, 0)";
  } else if (n === 6){
    reset();
    astonmartin.style.display = "block";

    resetColor();
    child[5].style.backgroundColor = "rgb(122, 0, 0)";
  } else if (n === 7){
    reset();
    ferrari.style.display = "block";

    resetColor();
    child[6].style.backgroundColor = "rgb(122, 0, 0)";
  } else if (n === 8){
    reset();
    mercedes.style.display = "block";

    resetColor();
    child[7].style.backgroundColor = "rgb(122, 0, 0)";
  } else {
    reset();
    redbull.style.display = "block";

    resetColor();
    child[8].style.backgroundColor = "rgb(122, 0, 0)";
  }
}