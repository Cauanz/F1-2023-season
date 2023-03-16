
$(document).ready(function(){
   $('.carrosel').slick({
     autoplay: true, // true para fazer o carrossel rodar automaticamente
     dots: true, // pontos indicadores de cada imagem
     arrows: true, // botões de navegação para avançar e voltar
     infinite: true, // Permitir o carrossel girar infinitamente
     speed: 500, // Definir a velocidade de transição entre as imagens
     slidesToShow: 1, // Definir quantas imagens devem ser mostradas por vez
     slidesToScroll: 1, // Definir quantas imagens devem ser deslocadas quando o carrossel é navegado

   responsive: [
      {
        breakpoint: 1024, // tela grande
      settings: {
         slidesToShow: 2,
         slidesToScroll: 2,
         arrows: false,
      }
      },
      {
        breakpoint: 600, // tela média
      settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
      }
      },
      {
        breakpoint: 300, // tela pequena
      settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
      }
      }
   ]
   });
});
