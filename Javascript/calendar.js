const today = new Date();

const cards = document.querySelectorAll('.track');

cards.forEach(card => {
   const cardDate = new Date(card.dataset.date);

if (cardDate < today) {
   card.classList.add('disputada');
   
   // Aqui selecionamos todos os elementos com a classe ".winners"
   const winnersList = card.querySelectorAll('.winners');

   // Iteramos em cada elemento ".winners"
   winnersList.forEach(winner => {
      // Aqui definimos o estilo "display" de cada elemento baseado na condição
      if (cardDate < today) {
      winner.style.display = 'block';
      } else {
      winner.style.display = 'none';
      }
   });
}
});

/* 
const primeiros = document.querySelectorAll('.first');
const segundos = document.querySelectorAll('.second');
const terceiros = document.querySelectorAll('.third');

fetch('https://ergast.com/api/f1/current/last/results.json')
.then(response => response.json())
.then(data => {

   data.RaceTable.Races[0].Results.forEach(piloto => {

   if (parseInt(piloto.position) === 1) {
      primeiros.forEach(primeiro => {
         primeiro.innerText = `1º - ${piloto.Driver.givenName} ${piloto.Driver.familyName}`;
      });
   } else if (parseInt(piloto.position) === 2) {
      segundos.forEach(segundo => {
         segundo.innerText = `2º - ${piloto.Driver.givenName} ${piloto.Driver.familyName}`;
      });
   } else if (parseInt(piloto.position) === 3) {
      terceiros.forEach(terceiro => {
         terceiro.innerText = `3º - ${piloto.Driver.givenName} ${piloto.Driver.familyName}`;
      });
   }
   });
}); */