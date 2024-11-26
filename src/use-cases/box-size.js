
/**
 * 
 * @param {HTMLDivElement} element 
 * @returns { Object<Number> }
 */
export const boxSize = (element)=>{ 

    const boxSize = { 
                      boxWidth: element.clientWidth, 
                      boxHeight: element.clientHeight
                    }

    const { boxWidth, boxHeight } = boxSize;

    return { boxWidth, boxHeight };

 };