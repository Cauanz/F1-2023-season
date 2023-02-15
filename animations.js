var haas = document.querySelector(".carrosel1");
var williams = document.querySelector(".carrosel2");
var alfaromeo = document.querySelector(".carrosel3");
var alphatauri = document.querySelector(".carrosel4");
var mclaren = document.querySelector(".carrosel5");
var astonmartin = document.querySelector(".carrosel6");
var ferrari = document.querySelector(".carrosel7");
var mercedes = document.querySelector(".carrosel8");
var redbull = document.querySelector(".carrosel9");

function aparece(n){
  if(n === 1){
    williams.style.display = "none";
    alfaromeo.style.display = "none";
    alphatauri.style.display = "none";
    haas.style.display = "block";
    mclaren.style.display = "none";
    astonmartin.style.display = "none";
    ferrari.style.display = "none";
    mercedes.style.display = "none";
    redbull.style.display = "none";
  } else if(n === 2){
    williams.style.display = "block";
    alfaromeo.style.display = "none";
    alphatauri.style.display = "none";
    haas.style.display = "none";
    mclaren.style.display = "none";
    astonmartin.style.display = "none";
    ferrari.style.display = "none";
    mercedes.style.display = "none";
    redbull.style.display = "none";
  } else if (n === 3){
    williams.style.display = "none";
    alfaromeo.style.display = "block";
    alphatauri.style.display = "none";
    haas.style.display = "none";
    mclaren.style.display = "none";
    astonmartin.style.display = "none";
    ferrari.style.display = "none";
    mercedes.style.display = "none";
    redbull.style.display = "none";
  } else if (n === 4){
    williams.style.display = "none";
    alfaromeo.style.display = "none";
    alphatauri.style.display = "block";
    haas.style.display = "none";
    mclaren.style.display = "none";
    astonmartin.style.display = "none";
    ferrari.style.display = "none";
    mercedes.style.display = "none";
    redbull.style.display = "none";
  } else if (n === 5){
    williams.style.display = "none";
    alfaromeo.style.display = "none";
    alphatauri.style.display = "none";
    haas.style.display = "none";
    mclaren.style.display = "block";
    astonmartin.style.display = "none";
    ferrari.style.display = "none";
    mercedes.style.display = "none";
    redbull.style.display = "none";
  } else if (n === 6){
    williams.style.display = "none";
    alfaromeo.style.display = "none";
    alphatauri.style.display = "none";
    haas.style.display = "none";
    mclaren.style.display = "none";
    astonmartin.style.display = "block";
    ferrari.style.display = "none";
    mercedes.style.display = "none";
    redbull.style.display = "none";
  } else if (n === 7){
    williams.style.display = "none";
    alfaromeo.style.display = "none";
    alphatauri.style.display = "none";
    haas.style.display = "none";
    mclaren.style.display = "none";
    astonmartin.style.display = "none";
    ferrari.style.display = "block";
    mercedes.style.display = "none";
    redbull.style.display = "none";
  } else if (n === 8){
    williams.style.display = "none";
    alfaromeo.style.display = "none";
    alphatauri.style.display = "none";
    haas.style.display = "none";
    mclaren.style.display = "none";
    astonmartin.style.display = "none";
    ferrari.style.display = "none";
    mercedes.style.display = "block";
    redbull.style.display = "none";
  } else if (n === 9){
    williams.style.display = "none";
    alfaromeo.style.display = "none";
    alphatauri.style.display = "none";
    haas.style.display = "none";
    mclaren.style.display = "none";
    astonmartin.style.display = "none";
    ferrari.style.display = "none";
    mercedes.style.display = "none";
    redbull.style.display = "block";
  }
}