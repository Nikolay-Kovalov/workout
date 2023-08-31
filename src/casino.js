const container = document.querySelector(".wrapper");
const btn = document.querySelector(".btn");
const winText = document.querySelector(".text_won");
const loooseText = document.querySelector(".text_loose");


btn.addEventListener("click", onClick);

let winner = [];
let winner1 = [];

function onClick(evt) {
    btn.disabled = true;
    winner = [];
    winner1 = [];
    const items = container.children;
    let delay = 0;
    console.log(items)
    const arr = [...items]

    arr.forEach(item => {
        item.firstElementChild.textContent = "";
        item.firstElementChild.classList.remove("appears");
        item.firstElementChild.classList.remove("cross");
         item.firstElementChild.classList.remove("red");
        winText.classList.remove("text_apear");
        loooseText.classList.remove("text_apear")
    }
    )
    arr.forEach(item => {
        delay += 1000;
        setTimeout(() => {
            createPromise(item)
        }, delay)
    });

}

function createPromise(item) {
    const shouldResolve = Math.random() > 0.5;
    console.log(shouldResolve)
    return new Promise((resolve, reject) => {
        if (shouldResolve) {
            resolve(1)
        } else { reject(2) }
    }).then((data) => {
        console.log(data)
        item.firstElementChild.classList.add("appears")
        item.firstElementChild.textContent = data
        if (data === 1) {
            winner.push(data);
            console.log(winner)
        }



    })
        .catch((data) => {
            console.log(data)
               item.firstElementChild.classList.add("appears")
            item.firstElementChild.textContent = data;
  if (data === 2) {
            winner1.push(data);
            console.log(winner1)
        }
        

        })
        .finally(() => {
             
            setTimeout(() => {
                   btn.disabled = false;
                if (winner.length === 3 || winner1.length === 3) {
                    winText.classList.add("text_apear")
                     const items = container.children;
    console.log(items)
    const arr = [...items]
                        arr.forEach(item => item.firstElementChild.classList.add("cross"))  
                   
                    
                // alert("You have won!!!")
    //               setTimeout(() => {
    //                   const items = container.children;
    // console.log(items)
    // const arr = [...items]
    // arr.forEach(item => item.firstElementChild.textContent = "")     
    //                 },1000)
                 }
                else if (winner.length === 2 && winner1.length === 1 || winner.length === 1 && winner1.length === 2)
                {
                    loooseText.classList.add("text_apear")
                    const items = container.children;
    console.log(items)
    const arr = [...items]
                        arr.forEach(item => item.firstElementChild.classList.add("red"))  
                    // alert("You loose(((")
    //                 setTimeout(() => {
    //                   const items = container.children;
    // console.log(items)
    // const arr = [...items]
    // arr.forEach(item => item.firstElementChild.textContent = "")     
    //                 },1000)
              
            }
            }, 3000)
           
    })
}



// promise.then((data) => {
//  console.log(data)  
// })
//     .catch((data) => {
//     console.log(data)
//     })
//     .finally(() => {
//         setTimeout(()=>{    console.log("The end")}, 1000)

//     })

function createPromises() {
       const promise = new Promise((res, rej) => {
    const random = Math.random() > 0.5
    setTimeout(() => {
         if (random) {
        res("yes")
    } else {
        rej("no")
    } 
    },3000)
  
       }) 
    return promise
}
    

// const p = createPromises();
// p.then((data) => {
//  console.log(data)  
// })
//     .catch((data) => {
//     console.log(data)
//     })
//     .finally(() => {
//         setTimeout(()=>{    console.log("The end")}, 1000)

//     })

let globalVariable; // undefined

// Initializing data fetching
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    console.log("users inside then callback: ", users);

    // Writing the result to a global variable
    globalVariable = users;

    // Everything is ok here, the data is in the variable
    console.log("globalVariable inside fetch callback: ", globalVariable);
  });

// No async data here
console.log("globalVariable outside fetch: ", globalVariable); // undefined
