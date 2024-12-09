let GridSize= 960;
const containerEl=document.getElementById("container");
const btnOne = document.getElementById("btn-one");
const btnTwo = document.getElementById("btn-two");

console.log(btnTwo);


btnOne.addEventListener("click", function(){

let input = prompt("Please enter number for square grids between 1-100");
if(input>0 && input < 100){
    clearGrid();
    gridContainer(input);
}
else console.log("Enter a valid number please");

});

btnTwo.addEventListener("click", function(){  
    clearGrid();

    });
    


containerEl.style.width =`${GridSize}px`;
containerEl.style.height =`${GridSize}px`;

function gridContainer(square){

    for(let i= 0; i<square*square; i++){
        const grid = document.createElement("div");

        grid.style.width=`${(GridSize/square) -1.6 }px`;
        grid.style.height=`${(GridSize/square) -1.6 }px`;
        grid.classList=("cell");
        containerEl.appendChild(grid);
        grid.addEventListener("mouseover", function(){
            grid.style.backgroundColor = "Green";
        })      

    }  
  

}

function clearGrid() {
    while (containerEl.firstChild) {
        containerEl.removeChild(containerEl.firstChild);
    }
}








