/**
 * 
 * @param {HTMLDivElement} element
 * @returns {HTMLDivElement} createBox 
 */
export const divCreateBox = ( element )=>{ 

    const createBox = document.createElement('div');
          element.append(createBox);

    return createBox;

 };