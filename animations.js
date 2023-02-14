var haas = document.querySelector(".carrosel1")
var williams = document.querySelector(".carrosel2")
var alfaromeo = document.querySelector(".carrosel3")
var alphatauri = document.querySelector(".carrosel4")

function aparece(n){
  if(n === 1){
    williams.style.display = "none";
    alfaromeo.style.display = "none";
    alphatauri.style.display = "none";
    haas.style.display = "block";
  } else if(n === 2){
    williams.style.display = "block";
    alfaromeo.style.display = "none";
    alphatauri.style.display = "none";
    haas.style.display = "none";
  } else if (n === 3){
    williams.style.display = "none";
    alfaromeo.style.display = "block";
    alphatauri.style.display = "none";
    haas.style.display = "none";
  } else if (n === 4){
    williams.style.display = "none";
    alfaromeo.style.display = "none";
    alphatauri.style.display = "block";
    haas.style.display = "none";
  }
}