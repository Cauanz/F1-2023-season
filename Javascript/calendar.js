const today = new Date();

const cards = document.querySelectorAll('.track');

cards.forEach(card => {
   const cardDate = new Date(card.dataset.date);

   if(cardDate < today) {
      card.classList.add('disputada');
   }
});

