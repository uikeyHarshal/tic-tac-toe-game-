//wiinning patters in tictacto are

let boxes = document.querySelectorAll(".box");
let reserBtn = document.querySelector("#reset-btn");

//new game btn which is hidden for now 
let newGameBtn =document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");

let turnO = true;


const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]


//function for each box then create a addeventlistener("clilck", () =>{})

//so the syntax was waong for

boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        console.log("box was clicked");
       if(turnO === true) {
        box.innerText = "O";
        box.style.color = '#E0AFA0';
        turnO = false;
       }else{
        box.innerText = "X";
        box.style.color = 'bcb8b1';
        turnO = true;
    }
    box.disabled = true;
    checkWinner();

    });
});

const resetGame = () =>{
    turnO =true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

//disables boxes on call  typicaly after winning a game
const disableBoxes = () =>{
    for(box of boxes) {
        box.disabled = true;
    }
};
//enable boxes after reset
const enableBoxes = () =>{
    for(box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};   
const showWinner = (winner) =>{
    msg.innerText = `congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

//loic we comaare the winning coidition array and conostantly check if the 3 values (the list with 3 elements is accessed as its a nested array)
// (indices) are correctly filled so every click checks the condition everytime and is the value namely "x" and "o" are smae in each square then the 
// winner condition gets satisfied  thus the winner wins the gaem 


const checkWinner = () => {
    for(let pattern of winPattern){
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    
        if(pos1val!= "" && pos2val != "" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner");
                
                showWinner(pos1val);

            }
        }
    };
  
}

newGameBtn.addEventListener("click", resetGame);
reserBtn.addEventListener("click", resetGame);