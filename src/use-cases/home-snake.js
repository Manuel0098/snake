import { btnsArrowsKeys } from "../listen-events/keyboar-event/btns-arrows-keys";
import { divCreateBox } from "./create-box";
import { idSelection } from "./id-selection";

const {audio} = idSelection();

export let snakeInitPositionX = 0, 
           snakeInitPositionY = 0;

export let snakeFoodBody = ``;

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {number} boxW 
 * @param {number} boxH 
 */
export const homeSnake = ( element, boxW, boxH, )=>{    

        // Genera un numero aleatorio menor al tamaño maximo de la caja que lo contiene
        let numberRandomX = Math.floor(Math.random() * ( 20 - 1 ) + 1 );
        let numberRandomY = Math.floor(Math.random() * ( 15 - 1 ) + 1 );
            let x = numberRandomX;
            let y = numberRandomY;

        // snakeBodyArr[0] = [positionX, positionY];

        // Crea un cajia en el contenedor     
            const createBox = divCreateBox( element );

        // Le agrega un atributo a la caja creada   
            createBox.setAttribute('class','snake')
            const snakeBox = element.querySelector('.snake');
                 

        // Indica el moviento de la caja en pixeles    
            snakeBox.style.gridArea = `${ y } / ${ x }`; // En el eje x positivo //TODO

        snakeInitPositionX = x;
        snakeInitPositionY = y;
     
  btnsArrowsKeys( element, snakeBox , x, y, );

 };