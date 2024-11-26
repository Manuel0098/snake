import { idSelection } from "../../use-cases/id-selection";
import { snakeBodyArr } from "../../use-cases/random-box";
import { stopIntervall } from "../keyboar-event/btns-arrows-keys";
import { selectBtnNewGame } from "./btn-new-game";
import { selectBtnStart } from "./btn-start";

const {btnPause,} = idSelection();

export const selectBtnPause = document.querySelector(btnPause);

// Variable para poder cambiar su valor y poder detener el intervalo cuando precione el boton de Detener

export let stopInterval = [];

/**
 * 
 * @param {Function <SetInterval>} element 
 */
export const listenerBtnPause = ( element, condicion, interval )=>{

    selectBtnStart.disabled = condicion;
    selectBtnPause.disabled = true;

    selectBtnPause.addEventListener('click', (event)=>{

         selectBtnStart.disabled = true;
         selectBtnPause.disabled = true;
         selectBtnNewGame.disabled = false;

    });

};
