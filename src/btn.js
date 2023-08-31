const button = document.getElementById("color_button")
const colorText = document.querySelector(".colorText");
const colorHex = document.querySelector(".colorHex")

console.log(colorHex.firstElementChild)
button.addEventListener("click", onClick)





const urlRequest = 'https://unpkg.com/color-name-list@10.10.0/dist/colornames.json'
let xhr = new XMLHttpRequest()
xhr.open('GET', urlRequest)
xhr.responseType = 'json'

xhr.onload = function () {
  const responseObj = xhr.response
  if (colorHex.firstElementChild === null && colorText.firstElementChild === null) {
    const nameMarkup = createNameMarkup(responseObj);
    const hexMarkup = createHexMarkup(responseObj);
    colorText.innerHTML = nameMarkup;
    colorHex.innerHTML = hexMarkup;
  }

  console.log(responseObj)
  return responseObj
}
xhr.send()



function createNameMarkup(arr) {
  const resp = arr.map(({ name }) => `<li class="color">${name}</li>`)
  return resp.join("")
}

function createHexMarkup(arr) {
  const resp = arr.map(({ hex }) => `<li class="color">${hex}</li>`)
  return resp.join("")
}


function onClick() {
  const color = document.querySelector(".form-control").value.trim()
  const response = xhr.onload();
  console.log(response)
  const result = response.find(({ name, hex }) => {
    return name.toLowerCase() === color.toLowerCase() || hex === color.toLowerCase()
  })
  console.log(color)
  console.log(result)
  if (result) {
    document.body.style.backgroundColor = result.hex
  }
  else {
    alert('there is no such a color in this array')
  }
}




    // const color = document.getElementById("01").value.replaceAll(" ", "")
    // console.log(color)
    // const colorArr = color.split(",").filter(item => item.length !==0)
    // console.log(colorArr)

    // for(const color of colorArr) {
    //   if (i < colorArr.length) {
    //     document.body.style.backgroundColor = colorArr[i];
    //     console.log(colorArr[i])
    //     i += 1;
    //     break;
    //   }
    //   else i = 0;
    // }


// const colorList = document.querySelector(".listOfcolors")
// function createMarkup(arr) {
//   const resp = arr.map(({ name, hex }) => `<li class="color"><p class="color__text" style="background-color:${hex}">${name}</p></li>`)
//   return resp.join("")
// }
// const requestURL = "https://unpkg.com/color-name-list@10.10.0/dist/colornames.json";
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", requestURL);
//   xhr.responseType = 'json';
//   xhr.send();
// xhr.onload = function() {
//   let responseObj = xhr.response;
//   const markup = createMarkup(responseObj);
// colorList.innerHTML = markup;
// };



// colorList.addEventListener("click", onColorClick)

// function onColorClick(evt) {
//     document.body.style.backgroundColor = evt.target.style.backgroundColor
// }



