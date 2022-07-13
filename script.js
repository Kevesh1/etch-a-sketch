
const container = document.querySelector('.grid')



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


function fillSquares(e) {
    if(e.target.classList.value === 'square'){
    e.target.style.backgroundColor = 'black';
    }
}

function resetGrid(){
    const squares = container.getElementsByClassName('square');
    console.log(squares);
    for(i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = 'white';
        //squares[i];
    }
}

function changeGrid(){
    let input = prompt('How many rows & columns? Max 64 is allowed');
    if(parseInt(prompt) > 64){
        alert("Entered sized is not allowed")
    }
    else{
        createGrid(parseInt(input), parseInt(input));
    }
}

createGrid(16,16);
addEventListener('mouseover', fillSquares);



