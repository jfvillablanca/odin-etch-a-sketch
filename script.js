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
            divGridColumn.setAttribute("id",`div_${i}_${j}`);
            divGridColumn.setAttribute("class","gridPixel");
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
            //console.log(event.target);
            event.target.classList.add('etched');
        });
    });
}

const promptUser = function(){
    let userInput = prompt("Enter N:");
    while(true){
        if(+userInput >= 1 && +userInput <= 100){
            return +userInput;
        }
        else userInput = prompt("Enter N (1 <= N <= 100):");
    }
}

const askGridDims = function(){
    const body = document.querySelector('body');
    const button = document.createElement('button');
    button.textContent = "Click here to enter N dimensions for grid";
    body.appendChild(button);

    let userInput;
    const buttonPrompt = document.querySelector("button");
    buttonPrompt.addEventListener("click", () => {
        let bigContainer = document.querySelector(".bigcontainer");
        if (bigContainer) body.removeChild(bigContainer); // Check if the grid already exists

        userInput = promptUser();
        console.log(userInput);
        generateGrid(userInput);
        etchPixel();
        button.textContent = "Want a new grid? Click to enter N dimensions";
    });

}
askGridDims();
