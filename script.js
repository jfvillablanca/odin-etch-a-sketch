const generateGrid = function(gridDims){
    console.log(`Generating ${gridDims} x ${gridDims} grid`);
    //const gridDims = gridDims;
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
    body.appendChild(divGrid);
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

const promptUser = function(){
    let userInput = prompt("Enter N:");
    while(true){
        if(+userInput >= 1 && +userInput <= 100){
            console.log(typeof +userInput);
            console.log(+userInput);
            return +userInput;
        }
        else userInput = prompt("Enter N (1 <= N <= 100):");
    }
}

const askGridDims = function(){
    const body = document.querySelector('body');
    const button = document.createElement('button');
    button.textContent = "Enter N dimension for grid?";
    body.appendChild(button);

    let userInput;
    const buttonPrompt = document.querySelector("button");
    buttonPrompt.addEventListener("click", (e) => {
        userInput = promptUser();
        console.log(userInput);
        generateGrid(userInput);
        etchPixel();
    });

}
askGridDims();
