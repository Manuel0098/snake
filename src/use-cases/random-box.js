import { selectBtnNewGame } from "../listen-events/click-events/btn-new-game";
import { listenerBtnPause, selectBtnPause } from "../listen-events/click-events/btn-pause";
import { ejeMasX, ejeMasY, } from "../listen-events/keyboar-event/btns-arrows-keys";
import { divCreateBox } from "./create-box";
import { idSelection } from "./id-selection";
import { snakeBody } from "./snake-body";

const {audio} = idSelection();

export let positionX, positionY;

export let snakeBodyArr = [ ];

// Hace que al precionarlos dejen el snakeBodyArr = [] de las posiciones de las serpiente en 0 elementos
setTimeout(()=>{
    selectBtnNewGame.addEventListener('click', (event) => snakeBodyArr = [] );

}, 1000);

// Hace que al precionarlos dejen el snakeBodyArr = [] de las posiciones de las serpiente en 0 elementos
selectBtnPause.addEventListener('click', (e) => snakeBodyArr = [] );

export const snakeFood = ( boxW, boxH, boxComida )=>{ 

    // Genera un numero aleatorio menor al tamaño maximo de la caja que lo contiene
    let numberRandomX = Math.floor(Math.random() * ( 20 - 1 ) + 1 );
    let numberRandomY = Math.floor(Math.random() * ( 15 - 1 ) + 1 );

// Reproduce un sonido cada vez que sale una nueva caja 
    document.querySelector('#sonido').play();

    boxComida.style.gridArea = ` ${numberRandomY} / ${numberRandomX} `;

    positionX = numberRandomX;
    positionY = numberRandomY;
  
 };

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {number} boxW 
 * @param {number} boxH 
 */
export const randomBox = ( element, boxW, boxH )=>{  
    
    // Crea un cajia en el contenedor "La funcion esta desestructurada createBox es el valor que retorna"    
    const createBox = divCreateBox( element ); 

    // Le agrega un atributo y lo seleciona
    createBox.setAttribute('class','box-comida'); 
    const boxComida = element.querySelector('.box-comida');

    snakeBodyArr.push([ positionX, positionY ]);

    snakeFood( boxW, boxH, boxComida );

    // Inicia un intervalo para cambiar de posicion la caja

 const snakeMovement = setInterval(() => {
               
                if( ejeMasX === positionX && ejeMasY === positionY ){ // X 7 Y 32
                    
                    let iteration = 0;
                    
                    snakeBodyArr.push([positionX, positionY]);

                    snakeFood( boxW, boxH, boxComida );


                    for (let i = 0; i < snakeBodyArr.length; i++) {
                        iteration = i;

                    }
                    snakeBody(element, snakeBodyArr[iteration][1], snakeBodyArr[iteration][1] );
     
               }    
               
        }, 250);

};



 