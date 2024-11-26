import { divCreateBox } from "./create-box";

export let positionFoodX = 0, positionFoodY = 0;

export let numberOne = 0;

export const snakeBody = ( element, x, y )=>{ 

    const createBox = divCreateBox(element);
    createBox.setAttribute('class', 'snake'); //'snake-body'

 };