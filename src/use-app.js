// Listener
import { listenerBtnNewGame } from "./listen-events/click-events/btn-new-game";
import { listenerBtnPause } from "./listen-events/click-events/btn-pause";
import { listenerBtnStart } from "./listen-events/click-events/btn-start";

/**
 * 
 * @param {HTMLDivElement} elementHtml 
 */
export const App = ( element )=>{ 

    listenerBtnNewGame();
    listenerBtnStart( element );
    listenerBtnPause( element, false );    
    
};
