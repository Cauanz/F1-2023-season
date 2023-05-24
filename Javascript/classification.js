const apiUrl = 'https://ergast.com/api/f1/current/driverStandings.json';

fetch(apiUrl)
   .then(response => response.json())
   .then(data => {
      const pilotos = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      const tabela = document.querySelector('.pilotos');
   
      pilotos.forEach(piloto => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
         <td>${piloto.position}</td>
         <td>${piloto.Driver.givenName} ${piloto.Driver.familyName}</td>
         <td>${piloto.Constructors[0].name}</td>
         <td>${piloto.points}</td>
      `;
      tabela.appendChild(tr);
      });
})
.catch(error => {
   const tabela = document.querySelector('.pilotos');
   const tr = document.createElement('tr');
   tr.innerHTML = `
      <td>Ocorreu um erro ao obter dados da API</td>
   `;
   tabela.appendChild(tr);
   console.log('Ocorreu um erro ao obter dados da API', error);
});

const equipes = 'https://ergast.com/api/f1/current/constructorStandings.json';

fetch(equipes)
   .then(response => response.json())
   .then(data => {
   const teams = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
   const tabela = document.querySelector('.equipes');

   teams.forEach(equipe => {
   const tr = document.createElement('tr');
   tr.innerHTML = `
      <td>${equipe.position}</td>
      <td>${equipe.Constructor.name}</td>
      <td>${equipe.points}</td>
   `;
   tabela.appendChild(tr);
   });
})
.catch(error => {
   const tabela = document.querySelector('.pilotos');
   const tr = document.createElement('tr');
   tr.innerHTML = `
      <td>Ocorreu um erro ao obter dados da API</td>
   `;
   tabela.appendChild(tr);
   console.log('Ocorreu um erro ao obter dados da API', error);
});

const listaPilotos = document.querySelector('.pilotos');
const listaEquipes = document.querySelector('.equipes');
const btnPilotos = document.querySelector('#pilotos');
const btnEquipes = document.querySelector('#equipes');
const title = document.querySelector('.title');
title.innerHTML = "Pilotos";

btnPilotos.addEventListener('click', () => {
   listaPilotos.style.display = "table";
   listaEquipes.style.display = "none";
   title.innerHTML = "Pilotos";
});

btnEquipes.addEventListener('click', () => {
   listaPilotos.style.display = "none";
   listaEquipes.style.display = "table";
   title.innerHTML = "Equipes";
});


