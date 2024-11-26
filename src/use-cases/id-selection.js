/**
 * 
 * @returns {Objeto<String>}
 */
export const idSelection = ()=>{ 

    let objIds ={
        container:'#container',
        header:'#header',
        title:'#title',
        boxButtons:'#box-buttons',
        btnNewGame:'#btn-new-game',
        btnStart:'#btn-start',
        btnPause:'#btn-pause',
        emptyBox:'#empty-box',
        sidebar:'#sidebar',
        footer:'#footer',
        audio:'#audio',
        app:'#app',
        boxSnakeBody: '#box-snake-body',
    };

    // let id = {}
 
    let {container, header, title, boxButtons , btnNewGame , btnStart , btnPause , emptyBox ,sidebar, footer, audio,app} = objIds;
    
    return {container, header, title, boxButtons , btnNewGame , btnStart , btnPause , emptyBox ,sidebar, footer, audio, app};

 };