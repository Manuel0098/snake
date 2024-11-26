import { idSelection } from "../../use-cases/id-selection";
import { positionX, positionY, snakeBodyArr } from "../../use-cases/random-box";
import { selectBtnNewGame } from "../click-events/btn-new-game";
import { listenerBtnPause, selectBtnPause, stopInterval } from "../click-events/btn-pause";

const { app } = idSelection();

const selectSoundGame = document.querySelector('#sound-game');

const boxApp = document.querySelector('#app');

const btnsTlfn = document.querySelector('#btns-control');

export let ejeMasX, ejeMasY;

export const htmlCommentH2 = `<h2 class="comment" style="display: grid">Perdiste</h2>`;

export const stopIntervall = ()=>{ 

   return 'intervalo';
 };

/**
 * 
 * @param {KeyboardEvent} x // letf arrow 
 */
export const btnsArrowsKeys = ( element, box , x, y, )=>{  
   
   let snakeX = x, snakeY = y;
   let movementX = 0, movementY = 0;

   btnsTlfn.addEventListener('click', (e)=>{
      
      if( e.target.className === 'btns-tlfn arrow-left fa-solid fa-left-long'){

         movementX = -1;
         movementY = 0;

      }else if (e.target.className === 'btns-tlfn arrow-right fa-solid fa-right-long' ){
                 
         movementX = 1;
         movementY = 0;

      }else if(e.target.className === 'btns-tlfn arrow-up fa-solid fa-up-long' ){
         movementY = -1;
         movementX = 0;

      }else if(e.target.className === 'btns-tlfn arrow-down fa-solid fa-down-long' ){
   
         movementY = 1;
         movementX = 0;
   
      };
   });

   document.addEventListener('keyup', (event)=>{

      if( event.code === 'ArrowLeft' ){
         movementX = -1;
         movementY = 0;

      }else if (event.code === 'ArrowRight'){
                 
         movementX = 1;
         movementY = 0;
            
      }else if(event.code === 'ArrowUp' ){
         movementY = -1;
         movementX = 0;

      }else if(event.code === 'ArrowDown'){
   
         movementY = 1;
         movementX = 0;
   
      };
            
   });

   const windowsGame = document.querySelector('#app');
   
   const movementSnake = ()=>{ 

   if( snakeBodyArr.length ){
 
      let htmlFood = `<div class="box-comida" style="grid-area: ${ positionY } / ${ positionX }"><i class="fa-solid fa-apple-whole"></i></div>`;
    
      for (let i = snakeBodyArr.length - 1; i > 0; i--) {

         snakeBodyArr[i] = snakeBodyArr[i - 1];
            
      }

      snakeBodyArr[0] = [snakeX, snakeY] 

      ejeMasX = snakeX += movementX;
      ejeMasY = snakeY += movementY;

      // Inicializo la variable vacia para que en el for le cambie el valor y guiarde la condicion
      let cambiarCondicion = '';

      for (let i = 0; i < snakeBodyArr.length; i++) {

         htmlFood += `<div class="snake" style="grid-area:${snakeBodyArr[i][1]} / ${snakeBodyArr[i][0]}; opacity: 1"></div>`;

        // Esta condicion hace que al colicionar la cabeza de la serpiete con el cuerpo se detenga el juego
         if( i != 0 && snakeBodyArr[0][1] === snakeBodyArr[i][1] && snakeBodyArr[0][0] === snakeBodyArr[i][0]){

            selectBtnNewGame.disabled = false;

            // hace que se vuelva true para que entre a la condicion si la serpiente coliciona con su cuerpo
            cambiarCondicion = true;

            listenerBtnPause('',true);
            clearInterval(intervalo);

         };

      };
      
      windowsGame.innerHTML = htmlFood;

   // Hace que se pare el intervalo que hace mover a la serpiente cada ves que choque con una pared

      snakeX > 20 ? clearInterval(intervalo) : '',
      snakeX < 1  ? clearInterval(intervalo) : '',
      snakeY > 15 ? clearInterval(intervalo) : '',
      snakeY < 1  ? clearInterval(intervalo) : '';

   // Hace que los botones de Inicio y Detener queden desactivados

      snakeX > 20 ? listenerBtnPause('',true) : '',
      snakeX < 1  ? listenerBtnPause('',true) : '',
      snakeY > 15 ? listenerBtnPause('',true) : '',
      snakeY < 1  ? listenerBtnPause('',true) : '';

   // Hace que el h2 del comentario tenga un atributo para que pase de display none a display grid
      
      if( snakeX > 20 || snakeX < 1 || cambiarCondicion === true ){

      // Hace que salga el comentario de te hace ver que "Perdiste"

         selectBtnNewGame.disabled = false;
         boxApp.innerHTML = htmlCommentH2;

      // Reproduce el sonido al perder
         selectSoundGame.play();
         
      } else if( snakeY > 15 || snakeY < 1 ){

      // Hace que salga el comentario de te hace ver que "Perdiste"

         selectBtnNewGame.disabled = false;
         boxApp.innerHTML = htmlCommentH2;

      // Reproduce el sonido al perder
         selectSoundGame.play();
      

      };
      
      };
      
   };

   // Al dar click en detener se termina el juego porque detiene el intervalo

   selectBtnPause.addEventListener('click', e => clearInterval(intervalo) )

   const intervalo = setInterval(movementSnake, 300);
   
   };


