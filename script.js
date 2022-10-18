const generateGrid = function(){
    const gridDims = 30;
    //const gridSize = 20;
    //const gridBorder = "solid 1px black";
    //const gridBackground = "white";

    const body = document.querySelector('body');
    const divGrid = document.createElement('div');
    divGrid.setAttribute("class","bigcontainer");
    for(let i=0; i<gridDims; i++){
        const divGridRow = document.createElement('div');
        divGridRow.setAttribute("class","smallcontainer");
        for(let j=0; j<gridDims; j++){
            const divGridColumn = document.createElement('div');
            //divGridColumn.style.border = "blue";
            divGridColumn.setAttribute("id",`div_${i}_${j}`);
            divGridColumn.setAttribute("class","gridPixel");
            //divGridColumn.setAttribute("style",`border: ${gridBorder};\
            //                                    background: ${gridBackground};\
            //                                    height: ${gridSize}px;\
            //                                    width: ${gridSize}px`);
            divGridRow.appendChild(divGridColumn);
        }
        divGridRow.style.border = "red";
        divGrid.appendChild(divGridRow);
    }
    body.appendChild(document.createElement('div'));
    body.appendChild(divGrid);
    body.appendChild(document.createElement('div'));
}
const etchPixel = function(){
    const pixels = document.querySelectorAll(".gridPixel");
    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseenter", (event) =>{
            console.log(event.target);
            event.target.classList.add('etched');
        });
    });
}

//const askGridDims = function(){
//
//}
//askGridDims();
generateGrid();
etchPixel();
