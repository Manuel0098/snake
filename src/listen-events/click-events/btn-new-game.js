import { elementHtml } from "../../../main";
import { idSelection } from "../../use-cases/id-selection";
import { selectBtnStart } from "./btn-start";

const {btnNewGame} = idSelection();

export const selectBtnNewGame = document.querySelector(btnNewGame);

export const listenerBtnNewGame = ()=>{

    selectBtnNewGame.addEventListener('click', (event)=>{
        
        selectBtnStart.disabled = false;

        elementHtml.innerHTML = '';
        
    });

}
    