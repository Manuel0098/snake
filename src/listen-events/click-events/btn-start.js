import { boxSize } from "../../use-cases/box-size";
import { homeSnake } from "../../use-cases/home-snake";
import { idSelection } from "../../use-cases/id-selection";
import { randomBox, snakeFood } from "../../use-cases/random-box";
import { selectBtnNewGame } from "./btn-new-game";
import { selectBtnPause } from "./btn-pause";

const {btnStart, boxSnakeBody} = idSelection();

export const selectBtnStart = document.querySelector(btnStart);

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const listenerBtnStart = (element)=>{

    const { boxWidth, boxHeight } = boxSize(element);

    selectBtnStart.addEventListener('click', (event)=>{
        
        homeSnake( element, boxWidth, boxHeight );
        randomBox( element, boxWidth, boxHeight );

        selectBtnStart.disabled = true;
        selectBtnNewGame.disabled = true;
        selectBtnPause.disabled = false;

    });

};
    