const goods = [
    {
        id: 1,
        title: "Fruits",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut doloremque ipsamneque doloribus praesentium facilis fugit tempore laborum? Dolores doloribusexcepturi at quae reprehenderit iure accusamus dolorem in impedit pariatur.",
        img: "https://img.freepik.com/free-photo/flat-lay-of-assortment-of-vegetables-with-paper-bag_23-2148853342.jpg?w=1800&t=st=1691866621~exp=1691867221~hmac=e393f9e26c185b72459c0af220ff9d2303ade5c3517775b1438e82747d96ea1e"
    },
      {
        id: 2,
        title: "Vegetables",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut doloremque ipsamneque doloribus praesentium facilis fugit tempore laborum? Dolores doloribusexcepturi at quae reprehenderit iure accusamus dolorem in impedit pariatur.",
        img: "https://img.freepik.com/free-photo/healthy-vegetables-on-wooden-table_1150-38014.jpg?w=1800&t=st=1691877226~exp=1691877826~hmac=a076f16b2858450cf468f18282fd817cc820e926998efcfc7416947bec5ad0de"
    },
    {
        id: 3,
        title: "Berries",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut doloremque ipsamneque doloribus praesentium facilis fugit tempore laborum? Dolores doloribusexcepturi at quae reprehenderit iure accusamus dolorem in impedit pariatur.",
        img: "https://img.freepik.com/free-photo/mixed-berries_1147-49.jpg?1&w=1800&t=st=1691877289~exp=1691877889~hmac=b6274049360070fdb97f5b73591fece36a87f6c5dd1917342073ac75bfaef4d5"
    },  
      {
        id: 4,
        title: "Cheese",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut doloremque ipsamneque doloribus praesentium facilis fugit tempore laborum? Dolores doloribusexcepturi at quae reprehenderit iure accusamus dolorem in impedit pariatur.",
        img: "https://img.freepik.com/free-photo/delicious-pieces-of-cheese_144627-43352.jpg?w=1800&t=st=1691877335~exp=1691877935~hmac=01c8b40805f05ddb24cbd7382db9a63e5b683b388471595a7b2dd4baf0e29a13"
    },
        {
        id: 5,
        title: "Milk",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut doloremque ipsamneque doloribus praesentium facilis fugit tempore laborum? Dolores doloribusexcepturi at quae reprehenderit iure accusamus dolorem in impedit pariatur.",
        img: "https://img.freepik.com/free-photo/milk-in-glass-and-jug-on-wooden-table_1150-17621.jpg?w=1800&t=st=1691877387~exp=1691877987~hmac=ba22901cdfbc333c36411ab93bb12484b0c857f11517a4b6593d915e4a0cabd9"
    },
          {
        id: 6,
        title: "Beverages",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut doloremque ipsamneque doloribus praesentium facilis fugit tempore laborum? Dolores doloribusexcepturi at quae reprehenderit iure accusamus dolorem in impedit pariatur.",
        img: "https://img.freepik.com/free-photo/colorful-soda-drinks-macro-shot_53876-18225.jpg?w=1800&t=st=1691877454~exp=1691878054~hmac=b758fe3b9d7314ebccabb45e6017b02bad196fc9700cbdcd73d6b488a9d623b4"
    },
            {
        id: 7,
        title: "Pasta",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut doloremque ipsamneque doloribus praesentium facilis fugit tempore laborum? Dolores doloribusexcepturi at quae reprehenderit iure accusamus dolorem in impedit pariatur.",
        img: "https://img.freepik.com/free-photo/top-view-of-italian-pasta-on-plain-background_23-2148305727.jpg?w=1800&t=st=1691877516~exp=1691878116~hmac=aca859945ca1932acf33483e6810094bdd3719156f34ab6e30ca7d3753a5c838"
    },
              {
        id: 8,
        title: "Pastry",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut doloremque ipsamneque doloribus praesentium facilis fugit tempore laborum? Dolores doloribusexcepturi at quae reprehenderit iure accusamus dolorem in impedit pariatur.",
        img: "https://img.freepik.com/free-photo/sweet-pastry-assortment-top-view_23-2148516578.jpg?w=1800&t=st=1691877555~exp=1691878155~hmac=ea981583ee05be40c053fc530d60dd68ba1bb0cb44335e3c2c1ef2961dd92e38"
    },
                {
        id: 9,
        title: "Spices",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut doloremque ipsamneque doloribus praesentium facilis fugit tempore laborum? Dolores doloribusexcepturi at quae reprehenderit iure accusamus dolorem in impedit pariatur.",
        img: "https://img.freepik.com/free-photo/indian-condiments-with-copy-space-above-view_23-2148723492.jpg?w=2000&t=st=1691877653~exp=1691878253~hmac=ab82faf48624dc7c0dc53a0ee19ac066f1432794b454f57ef884e4e66c672ba8"
    },

]
const list = document.querySelector(".list")



function createMarkup(arr) {
    return arr.map(({ id, title, description, img }) => `<li class="item" id="${id}"><img src="${img}" alt="${title}" class="img"><h2 class="title">${title}</h2><p class="text">${description}</p><button class="btn">Add to cart</button></li>`).join('')

}

const markup = createMarkup(goods);

list.insertAdjacentHTML("beforeend", markup)


const addBtn = document.querySelector(".btn");
const cartCounter = document.querySelector(".counter")
const cartBtn = document.querySelector(".cart_btn")
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const cartCloseBtn = document.querySelector(".close_cart")
const cartList = document.querySelector(".cart_list")
const emptyCart = document.querySelector(".empty_cart")
const clearCart = document.querySelector(".remove_all_btn")
const input = document.querySelector(".input");
const clearBtn = document.getElementById('clearBtn')
const inp = document.querySelector(".inp");
const btnInp = document.querySelector(".btnInp")
const inputColor = document.querySelector(".color")




list.addEventListener("click", onBtnClick);
cartBtn.addEventListener("click", onCartClick);
cartCloseBtn.addEventListener("click", onCartClick)
clearCart.addEventListener("click", onEmptyCart)
cartList.addEventListener("click", onRemoveClick)
cartList.addEventListener("input", onRenge)
backdrop.addEventListener("click", onCartClick)
input.addEventListener("input", onInputChange)
document.addEventListener('keydown', onEscClose)
clearBtn.addEventListener("click", onClear)
inputColor.addEventListener("input", onBackgroundChange)
btnInp.addEventListener("click", onclick)




function load(key) {
    try{   const savedKey = localStorage.getItem(key).substring(1);
        // const parsedKey = JSON.parse(savedKey)
        // console.log(parsedKey)
        return savedKey
    }
    catch (error) {
        console.log(error.message)
    }
 
}
console.log(load("bodyColor"))
document.body.style.backgroundColor = `#${load("bodyColor")}`
inputColor.value = `#${load("bodyColor")}`

function onBackgroundChange(evt){
    document.body.style.backgroundColor = evt.currentTarget.value
    localStorage.setItem("bodyColor", evt.currentTarget.value)
}




function onClear() {
     const markup = createMarkup(goods);
    list.innerHTML = markup;   
    inp.value = "";

}

function onInputChange(evt) {
    const value = evt.currentTarget.value.toLowerCase();
    const filteredArr = goods.filter((item) => item.title.toLowerCase().includes(value.trim())) 
    const markup = createMarkup(filteredArr);
    list.innerHTML = markup;

}



let counter = 0;
let spanCounter = 1;
let previousId = [];
const arr = [];
function onBtnClick(evt) {
    if (evt.target.classList.contains("btn")) {
        // emptyCart.remove()
        emptyCart.classList.add("none")
        clearCart.classList.add("js_open")
        const itemId = evt.target.closest("li").getAttribute("id");
        const result = goods.find(item => item.id === Number(itemId))
        arr.push(result)
        const { id, title, description, img } = result
    const cartMarkup = `<li class="cartItem" data-id ="${id}">
  <img src="${img}" alt="${title}" class="cartImg">
  <h3 class="cartTitle">${title}</h3>
  <p class="cartText">${description}</p>
  <p class="amount">Amount:</p>
    <div class = "wrap">
    <input
        class="range__input"
        type="range"
        name="range"
        min="1"
        max="100"
        step="1"
        value="1"
      />
<span>1</span>
</div>
  <button class="remove_cartBtn">Remove</button>
</li>`
  
        cartList.insertAdjacentHTML("beforeend", cartMarkup)
         counter += 1;
        cartCounter.textContent = counter;
      
        if (previousId.includes(cartList.lastElementChild.dataset.id)) {
              counter -= 1;
        cartCounter.textContent = counter;
            alert("This item is already in your cart")
            cartList.lastElementChild.remove();
            console.log(previousId.indexOf(itemId))
            // previousId.splice(previousId.indexOf(itemId), 1)
            // console.log(previousId)
        } else {  previousId.push(itemId);
            console.log(previousId)
        }
    
    }    
    console.log(arr)
localStorage.setItem("cart", JSON.stringify(arr))
}


function loader(key){
    const savedData = localStorage.getItem(key);
   return JSON.parse(savedData)

}
const cartLoded = loader("cart");
console.log(cartLoded)

function onLoadCart(arr) {
    arr.forEach(({ id, title, description, img }) => {
        const cartMarkup = `<li class="cartItem" data-id ="${id}">
  <img src="${img}" alt="${title}" class="cartImg">
  <h3 class="cartTitle">${title}</h3>
  <p class="cartText">${description}</p>
  <p class="amount">Amount:</p>
    <div class = "wrap">
    <input
        class="range__input"
        type="range"
        name="range"
        min="1"
        max="100"
        step="1"
        value="1"
      />
<span>1</span>
</div>
  <button class="remove_cartBtn">Remove</button>
</li>`
        cartList.insertAdjacentHTML("beforeend", cartMarkup)   
    })
    if (cartLoded) {
          emptyCart.classList.add("none")
        clearCart.classList.add("js_open")
    }
}

onLoadCart(cartLoded)




function onRemoveClick(evt) {
     if (evt.target.nodeName === "BUTTON" &&  evt.target.classList.contains("remove_cartBtn")) {
    
         evt.target.closest('li').remove()
                  counter -= 1;
         cartCounter.textContent = counter;
              previousId.splice(previousId.indexOf(evt.target.closest('li').dataset.id), 1)
            console.log(previousId)
    }
    if (counter === 0) {
        onEmptyCart();

    }
    if (evt.target.classList.contains("increment")) {
        spanCounter += 1;
        evt.target.previousElementSibling.textContent = spanCounter;
    }
      if (evt.target.classList.contains("decrement")) {
        spanCounter -= 1;
        evt.target.nextElementSibling.textContent = spanCounter;
      }
}

function onRenge(evt) {
    if (evt.target.classList.contains("range__input")) {
          evt.target.nextElementSibling.textContent = evt.target.value;
     }
}

// const removeBtn = document.querySelector(".remove_cartBtn");
// removeBtn.addEventListener("click", onRemoveClick)

// function onRemoveClick() {
//     console.log('cdwb')
// }

function onCartClick() {
    backdrop.classList.toggle("js_open");
    modal.classList.toggle("js_open");
    document.body.classList.toggle("modal_open");
}

function onEmptyCart() {
    cartList.innerHTML = "";
    clearCart.classList.remove("js_open");
    emptyCart.classList.remove("none")
    cartCounter.textContent = 0;
    counter = 0;
    previousId = [];
}

function onEscClose(evt) {
    if (evt.code === "Escape") {
   backdrop.classList.remove("js_open");
    modal.classList.remove("js_open");
        document.body.classList.remove("modal_open");
        document.removeEventListener("click",onEscClose)
 }   
}



function onclick() {
    const filteredItems = goods.filter(({ title }) => {return title.toLowerCase().includes(inp.value.trim()) })
    const markup = createMarkup(filteredItems);
    console.log(filteredItems)
    list.innerHTML = markup;
    console.log(inp.value)
}


