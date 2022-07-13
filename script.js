
const container = document.querySelector('.grid')
const blackColor = 'black';
const rgbColor = ""; 
let rgb = false;



function createGrid(columns, rows){
    container.innerText = "";
    container.style.gridTemplateColumns = 'repeat(' + columns + ', 1fr)';
    container.style.gridTemplateRows = 'repeat(' + rows + ', 1fr)';
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            const square = document.createElement('div');
            square.classList.add('square')
            container.appendChild(square);
        }
    }
}

function setRgb(){
    if(rgb){
        rgb = false;
    }
    else{
        rgb = true; 
    }
}

function fillSquares(e) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    if(e.target.classList.value === 'square'){
        if(rgb === true){
            e.target.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
        }
        else{
            e.target.style.backgroundColor = blackColor;
        }
    }
}

function resetGrid(){
    const squares = container.getElementsByClassName('square');
    for(i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = 'white';
        //squares[i];
    }
}

function changeGrid(){
    let input = prompt('How many rows & columns? Max 64 is allowed');
    if(parseInt(input) > 64){
        alert("Entered sized is not allowed")
    }
    else{
        createGrid(parseInt(input), parseInt(input));
    }
}

createGrid(16,16);
addEventListener('mouseover', fillSquares);



