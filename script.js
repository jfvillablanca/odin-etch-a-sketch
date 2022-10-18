const generateGrid = function(){
    const gridDims = 4;
    const body = document.querySelector('body');
    const divGrid = document.createElement('div');
    divGrid.style.background = "rgb(0,153,102)";
    divGrid.textContent = "I'm a grid";
    divGrid.setAttribute("class","bigcontainer");
    for(let i=0; i<gridDims; i++){
        const divGridRow = document.createElement('div');
        for(let j=0; j<gridDims; j++){
            const divGridColumn = document.createElement('div');
            divGridColumn.style.border = "blue";
            divGridRow.appendChild(divGridColumn);
        }
        divGridRow.style.border = "red";
        divGrid.appendChild(divGridRow);
    }
    body.appendChild(divGrid);
}
generateGrid();
