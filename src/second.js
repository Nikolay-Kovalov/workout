const container = document.querySelector(".container");
console.log(container)

function markUp() {
    const arr = [];
    for (let i = 1; i < 10; i += 1) {
    arr.push(`<div class="item" data-id="${i}"></div>`)    
    }
    const str = arr.join("");
    container.innerHTML = str;
}
markUp()

container.addEventListener("click", onClick) 
item = document.querySelector(".item")    
console.log(item)
let player = "X"
let historyX = [];
let history0 = [];
const win = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]


function onClick(evt) {
    if (!evt.target.classList.contains("item") || evt.target.textContent) {
        return
    }
    let result = false;

    const id = Number(evt.target.dataset.id)
    if (player === "X") {
        historyX.push(id)
        console.log(historyX)
        result = isWinner(historyX)
    } else {
        history0.push(id);
        console.log(history0)
        result = isWinner(history0)
    }
    evt.target.textContent = player;

    if (result) {
   alert(`Winner: ${player}`)  
        resetGame();
       return
    } else if (historyX.length + history0.length === 9) {

   resetGame();
        alert("Try again"); 
        return
    }
        player = player === "X" ? "0" : "X"

  
}

function isWinner(arr) {
    return win.some(item => item.every(id => arr.includes(id)))
} 
 function resetGame() {
        markUp();
        historyX = [];
        history0 = [];
        player = "X"
    }


