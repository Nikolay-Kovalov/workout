"use strict";

// import { refs } from "./js/refs"

// const STORAGE = 'name'

// refs.input.addEventListener('input', onInput)
// populate()

// function onInput(evt) {
//     localStorage.setItem(STORAGE, refs.form.elements.name.value)
   
// }

// function populate() {
//     const savedData = localStorage.getItem(STORAGE)
//     console.log(savedData)

//     if (savedData) {
//     refs.form.elements.name.value = savedData 
//     }
// }



// refs.form.addEventListener('submit', onSubmit)



// function onSubmit(evt) {
//     evt.preventDefault()
//     refs.info.textContent = refs.form.elements.name.value
//   refs.form.reset()
    
// }





// // const promise = new Promise((resolve, reject) => {
// //   const amount = Math.random();
// //   if (amount > 0.5)
// //     resolve('Больше чем 0.5')
// //   else reject ('Меньше чем 0.5')
// // })

// // promise.then(result => console.log(result))

// // promise.catch(error => console.log(error))

// // promise.finally(() => console.log('Наконец то!!!'))

// // const dog = {
// //   name: "Mango",
// //   age: 3,
// //   isHappy: true,
// // };

// // const dogJSON = JSON.stringify(dog);
// // console.log(dogJSON); 

// // const parsedDog = JSON.parse(dogJSON);
// // console.log(parsedDog)

// import { createMarkup, createRmMarkup } from "./js/function"



// // fetch("https://pokeapi.co/api/v2/berry-flavor/1/")
// //   .then(response => {
// //     if (!response.ok) {
// //       throw new Error(response.status);
// //     }
// //     return response.json();
// //   })
// //   .then(data => {
// //     const berries = data.berries
// //     console.log(berries)
// //    createMarkup(berries)


// //   })
// //   .catch(error => {
// //   console.log(error)
// //   });

//  let page = 3;

// refs.btn.addEventListener('click', () => {
 
//   page += 1;

//    return fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
    
//     console.log(data.results)
//    createRmMarkup(data.results)


//   })
//   .catch(error => {
//   console.log(error)
//   });

// })


// // class User {
// //   // Необязательное объявление публичных свойств
// //   name;
// //   // Обязательное объявление приватных свойств
// //   #email;

// //   constructor({ name, email }) {
// //     this.name = name;
// //     this.#email = email;
// //   }

// //   getEmail() {
// //     return this.#email;
// //   }

// //   changeEmail(newEmail) {
// //     this.#email = newEmail;
// //   }
// // }

// // const mango = new User({
// //   name: "Манго",
// //   email: "mango@mail.com",
// // });
// // mango.changeEmail("mango@supermail.com");
// // console.log(mango.getEmail()); // mango@supermail.com
// // // console.log(mango.#email); // Будет ошибка, это приватное свойство


// class Employee {
//   name;
//   #surname;

//   constructor({ name, surname }) {
//     this.name = name;
//     this.#surname = surname;
//   }

//   get name() {
//     return this.name;
//   }

//   set name(newName) {
//     return this.name = newName;
//   }

//   get surname() {
//     return this.#surname;
//   }

//   set surname(newSurname) {
//     return this.#surname = newSurname;
//   }


// }

// class NewEmployee extends Employee {

//   constructor({ name, surname, email }) {
//     super({ name, surname });
//     this.email = email;
//   }
// }

// const firstEmployee = new NewEmployee({ name: "Nikolay", surname: "Ilchuk", email: "ilchuk@ukr.net" })

// console.log(firstEmployee)
// const newEmployee = new Employee({ name: "Bogdan", surname: "Kovalov"});

// console.log(newEmployee)

// newEmployee.surname = "Petrov";

// console.log(newEmployee.surname)

// newEmployee.name = "Ivan";
// console.log(newEmployee.surname)



// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     // Вызов конструктора родительского класса User
//     super({ email });
//     this.posts = posts;
//   }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'




// const promise = () => new Promise((resolve, reject) => {
//   const random = 1;
//   if (random > 0.5) {
//     resolve(2)
//   }
//   else {  reject('Error')}
// })


// console.log(promise)


// promise.then(resp => resp + 2)

//   .catch(error => console.log(error))
//   .finally(() => console.log('Hello world'))


// arr = [1, 2, 3, 4, 5]
  
// const newArr = arr.map(promise)
// console.log(newArr)

// Promise.race(newArr)
// .then(resp => console.log(resp))
// .catch(error => console.log(error))
// .finally(() => console.log('Hello world'))

// 9881e60b709c4a08b5762307231502



// const btn = document.querySelector('.js-btn')
// console.log(btn)

// btn.addEventListener('click',  fetchPockemon)

// import axios from "axios";


// const list = document.querySelector('.list')
// const form = document.querySelector(".search")
// form.addEventListener('submit', onSearch)


// async function fetchWeather(name, value) {
//   const resp = await axios.get(`http://${BASE_URL}?key=${KEY}&q=${name}&days=${value}`, {
//   params: {
//       key: { KEY }  ,
//       q: { name } ,
//       days: { value }
//   }
//   })
//   return resp

// }


// function onSearch(evt) {
//   evt.preventDefault();
//   const { query: {value: searchValue}, days: {value: searchDays} } = evt.currentTarget.elements;

//   if (!searchValue) {
//     alert("пустое поле")
//     return
//   }
//   fetchWeather(searchValue, searchDays)
//     .then(data => {
//       console.log(data)
//       renderList(data.data.forecast.forecastday)
//     })
//   .catch(error => console.log(error))
// }

//   const BASE_URL = "api.weatherapi.com/v1/forecast.json";
// const KEY = "9881e60b709c4a08b5762307231502";



// function fetchWeather(name, value) {
//   return axios.get(`http://${BASE_URL}?key=${KEY}&q=${name}&days=${value}`, {
//   params: {
//       key: { KEY }  ,
//       q: { name } ,
//       days: { value }
//   }
//   })
  

  // return fetch(`http://${BASE_URL}?key=${KEY}&q=${name}&days=${value}`)
  //   .then(resp => {
  //     if (!resp.ok) {
  //       throw new Error(resp.statusText)
  //     }
  //     return resp.json()
    // })
// }

// function renderList(arr) {
//   const markup = arr.map(item => { return (
//     `<li class="item">
//     <img src="${item.day.condition.icon}" alt="">
//     <span>${item.day.condition.text}</span>
//     <h2>День: ${item.date}</h2>
//     <h3>Температура: ${item.day.avgtemp_c}</h3>
//   </li>
//     `
//   )}).join("");
//   list.innerHTML = markup;
// }




// const newList = document.querySelector('.newList')
// const newBtn = document.querySelector('.newBtn')
// const hidText = document.querySelector('.hiddenText')



// newBtn.addEventListener('click', onLoad)
// let page = 1;

// function onLoad() {
//   page += 1;
//   fetchApi(page)
//   .then(data =>  {newList.insertAdjacentHTML('beforeend', createMarkup(data.docs))  
//   if (data.page === data.pages) {
//     newBtn.setAttribute('hidden', true)
//     hidText.removeAttribute('hidden')

//   }
// })
// }

// const guard = document.querySelector('.guard')

// const options = {
//   root: null,
//   rootMargin: '300px',
//   threshold: 1.0 
// }

// const observer = new IntersectionObserver(callback, options); 


// function callback(entries, observer) {

//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//         page += 1;
//   fetchApi(page)
//     .then(data => { newList.insertAdjacentHTML('beforeend', createMarkup(data.docs)) }
//       ) 

//     }
//   });
// }


// const BASEURL = 'https://the-one-api.dev/v2/character'
// const API_KEY = 'iZ-tDufm3UjHfYaMtNf2';



// // function fetchApi(page = 1) {
// //   const options = {
// //     headers: {
// //       Authorization: 'Bearer iZ-tDufm3UjHfYaMtNf2'
// //     }
// //   }
// //   return fetch(`${BASEURL}?limit=20&page=${page}`, options) 
// //     .then(resp => {
// //       if (!resp.ok) {
// //     throw new Error(resp.statusText)
// //       }
// //       return resp.json()
// //     })

// // }

// async function fetchApi(page = 1) {

//   const resp = await axios.get(`${BASEURL}`, {
//     options: {
//       limit: 20,
//       page: { page } 
//     }
//   },
//     {
//      headers: {
//         Authorization: 'Bearer iZ-tDufm3UjHfYaMtNf2',
//     } 
//     }  
//   )
//   return resp
  


//   // const options = {
//   //   headers: {
//   //     Authorization: 'Bearer iZ-tDufm3UjHfYaMtNf2'
//   //   }
//   // }
//   // const resp = await fetch(`${BASEURL}?limit=20&page=${page}`, options)
//   // const characters = await resp.json()
//   // return characters
  

// }






// // fetchApi()
// //   .then(data => {
// //     newList.insertAdjacentHTML('beforeend', createMarkup(data.docs))
// //     observer.observe(guard)
// //   })
// //   .catch(err => console.log(err))
    

// const render = async () => {
//   try {
//     const characters = await fetchApi()
//     newList.insertAdjacentHTML('beforeend', createMarkup(characters.docs))
//       observer.observe(guard)
//   }
//   catch (error) {console.log(error.message)}
// }

// render()
  




// function createMarkup(arr) {
//   return arr.map(({name, spouse, race}) => `
// <li class="newItem">
// <h2 class="newTitle">${name}</h2>
// <p class="text">${spouse}</p>
// <p class="text">${race}</p>
// </li>
//   `)  
// }   



// axios.get('https://rickandmortyapi.com/api/character')
//   .then(data => console.log(data))
// .catch(error => console.error(error))



// ( () => {
//  return console.log("hello world")
// })()

// const arr = [1,2,3,4,5,6,7]

// for (i = 0; i < arr.length; i += 1) {
//   console.log(arr)
// }

// const newArr = arr.map((item) => {
//   return item
// })

// console.log(newArr)

// const func = (arr) => {
//   let counter = 0;
//   const newArr = arr.map((item) => {
//     return item + counter
//   })

// }

// func([1, 2, 3, 4, 5])
// let counter = 0;
// var massiv = [1,,-1,,111,,2,,-2]
// console.log(massiv.map(i=>counter+=i, counter=0).reverse()[0])

// function cockroachSpeed(s) {
//   const a = (s * 100000) / 3600;
//   return console.log(Math.floor(a))
// }
// cockroachSpeed(0)

// function findNextSquare(sq) {
//   if (Number.isInteger(Math.sqrt(sq))) {
//     return 1
//   }
//   return -1;
// }

// function feast(beast, dish) {
//   let arr1 = beast.split('');
//   let arr2 = dish.split('');
//   if (arr1[0] === arr2[0]) {
//     return true
//   }
//   return false
// }

// feast('dog', 'drag')

// var arr = [1,'cat',35,'dog',888,'hotdog']; 
// var newArr = [];
// function stringArr(array){
//     for(var i=0; i< array.length; i++){
//         if(typeof array[i] == "string"){
//             continue;
//         }else {
//             newArr.push(array[i]); 
//         }
//         }
// console.log(newArr);
// }
// stringArr(arr);

// function filter_list(l) {
//  let newArr = [];
//   for (i = 0; i < l.length; i ++) {
//     if (typeof l[i] === "string") {
//       continue;
//     }
//     else { newArr.push(l[i]) }
  
//   }
//     return newArr
// }

// filter_list([1,2,3,'r'])


// function solution(str, ending){
// const arr = str.split('');
//   const arr1 = ending.split('');
//  if (arr.slice(-2).join() === arr1.slice(-2).join()) {
//    return console.log(true)
//  }
// else {return console.log(false)}
// }

// solution('samurai', 'ai')
// const a = "string";
// console.log(a.substring(1,3))

// const a = "string"
// const b = a.split('')
// console.log(b)

// function doubleChar(str) {
// return str.split('').map(item => item + item).join('')
// }

// const v = b.map(item => console.log(item + item))

// doubleChar("Map")

// function removeChar(str){
// return console.log(str.slice(1, -1))

// };

// removeChar("Hello")


// const func = (string) => {
// return console.log(string.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()}))
// }

// func('hello world')

// const arr = [1, 2, 3, 4, 5]
// const b = arr.reduce((acc, item, index) => {
//   acc[index] = item
// return acc
// }, {})
// console.log(b)



// const c = arr.filter(item => item > 3).join('')
// console.log(c)

// const d = arr.map(item => item + 4)
// console.log(d)

// const obj = [
//   { name: 'Bob', age: 40 },
//   {name: 'Bill', age: 30}
// ]

// const result = obj.entries();
// console.log(result)

// const result1 = result.next;
// console.log(result1)

// const bod = document.querySelector('body')
// console.log(bod)
// let counter = 0;
// document.body.addEventListener("click", () => {
//   counter += 1;
//   return bod.style.opacity = 0}
// )
// function getGrade (s1,s2,s3) {
//   if ((s1 + s2 + s3)/3 >= 90 && (s1 + s2 + s3)/3 <= 100) {
//   return 'A'
//   } else if ((s1 + s2 + s3)/3 >= 80 && (s1 + s2 + s3)/3 <= 90) {
//     return 'B'
//   } 
//   else if ((s1 + s2 + s3)/3 >= 70 && (s1 + s2 + s3)/3 <= 80) {
//     return 'C'
//   } 
//   else if ((s1 + s2 + s3)/3 >= 60 && (s1 + s2 + s3)/3 <= 70) {
//     return 'D'
//   } 
//   else if ((s1 + s2 + s3)/3 >= 0 && (s1 + s2 + s3)/3 <= 60) {
//     return 'F'
// } 
// }

// getGrade(100, 85, 90)


// function greet(language) {
//   if (language === 'czech') {
//     return 'Vitejte'
//   }
//     else if (language === 'english') {
//     return 'Welcome'
//   }
//   else if (language === 'danish') {
//     return 'Velkomst'
//   }
//     else if (language === 'dutch') {
//     return 'Welkom'
//   }
//     else if (language === 'estonian') {
//     return 'Tere tulemast'
//   }
//     else if (language === 'finnish') {
//     return 'Tervetuloa'
//   } else {
//   return  'Welcome'
//   }
// }

// greet('duh')

// for (let i = 0; i <= 10; i += 1) {
//   console.log(i)
// }


// const a = {};
// console.log(a)

// Object.defineProperties(a, {
//   name: {
//     writable: true,
//     enumerable: true,
//     configurable: true,
//     value: 'Nick'
//   },
//   age: {
//     writable: false,
//     enumerable: true,
//     configurable: true,
//     value: 40
//   }
// })

// console.log(a)

// a.name = 'Bob'
// console.log(a)


// const arr = [1, 2, 3, 4, 5]

// const obj = arr.reduce((acc, item, index) => {
//   for (i = 0; i < arr.length; i += 1){
//     acc[index] = item
//     return acc
//   }
// }, {})

// console.log(obj)




// const newObj = {
//   name: 'Nick',
//   age: 40
// }

// console.log(newObj["name"])

// const obj1 = JSON.stringify(newObj)
// console.log(obj1)


// document.body.addEventListener('Click', () => {
//   return innerHTML  = 'New and <span class="accent">improved</span> title'
// })

// (() => {
//   for (var i = 0; i < 10; i += 1) {
//    setTimeout(() => {console.log(i)},0) 
//   }
//  })()

// function removeExclamationMarks(s) {
//   return console.log(s.split('!').join(''));
// }

// removeExclamationMarks('Hello! World!')

// const a = 'String'

// const b = Array(a)

// console.log(b)

// console.log(typeof b)

// const c = new Promise((resolve, reject) => {
//   console.log('Hello')
// })

// console.log(c)

// function hello (...params) {
//   return console.log(typeof params)
// }

// function car(num1, num2) {
//   if (num2) {
//     return console.log(num1 + num2)
//   }
//   return car.bind(null, num1)
// }

// car(1, 3)

// car(1)(2)

//

// let plenetEarth;
// let currentUser;

// Спрашиваем имя отеля в котором хотел бы остановится клиент
// и сохраняем в переменную результат вызова prompt.
// const hotelName = confirm("Please enter desired hotel name");
// const a = "Hello world"
// const v = a.indexOf("H");
// console.log(v)
// const b = a.slice(v, a.indexOf("d"))
// console.log(b)

// const g = NaN ** 0;
// console.dir(g)

// console.log(typeof 2n)

// const age = 11;
// let person;


// switch (age) {
//   case 18:
//     person = "adult";
//     break;
  
//   case 14:
//     person = "teenager";
//     break;
  
//   case 8:
//     person = "child";
//     break;
  
//   default:
//     console.log("Error")
    
// }

// console.log(person)

// let item = 'Apple'

// if (item) {
//   console.log("This is an apple")
// } else {
//   console.log("This is unknown fruit")
// }

// let counter = 0;

// while (counter < 10) {
//   console.log(counter);
//   counter += 2;
// }
// let password = "";

// do {
//   password = prompt("Введите пароль длиннее 4-х символов", "");
// } while (password.length < 2);

// console.log("Ввели пароль: ", password);

// let i;

// for ( i = 0; i <= 10;  i += 1) {

// }
//   do {
//     console.log(i);
//   }
//   while (i < 5)

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// console.log(3 % 2)

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Нашли число 3, прерываем выполнение цикла");
//     break;
//   }
// }

// console.log("Лог после цикла");

// let name = prompt('Введите Ваше имя', '');
// alert(name);

// const a = 12 + + "12";
// console.log(a)
// var tag = document.createElement('script');
// tag.src = "//www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// var player;

// onYouTubeIframeAPIReady = function () {
//     player = new YT.Player('player', {
//         height: '244',
//         width: '434',
//         videoId: 'AkyQgpqRyBY',  // youtube video id
//         playerVars: {
//             'autoplay': 0,
//             'rel': 0,
//             'showinfo': 0
//         },
//         events: {
//             'onStateChange': onPlayerStateChange
//         }
//     });
// }

// var p = document.getElementById ("player");
// $(p).hide();

// var t = document.getElementById ("thumbnail");
// t.src = "http://img.youtube.com/vi/AkyQgpqRyBY/0.jpg";

// onPlayerStateChange = function (event) {
//     if (event.data == YT.PlayerState.ENDED) {
//         $('.start-video').fadeIn('normal');
//     }
// }

// $(document).on('click', '.start-video', function () {
//     $(this).hide();
//     $("#player").show();
//     $("#thumbnail_container").hide();
//     player.playVideo();
// });



// var yt_frame = document.querySelector('.video__player'),
// 	video_placeholder = document.querySelector('.video__placeholder');
  
//   video_placeholder.addEventListener('click',play);

// function play() {
//   yt_frame.contentWindow.postMessage(JSON.stringify({
//     'event': 'command',
//     'func': 'playVideo',
//     'args': []
//   }), '*');
//   video_placeholder.style.display = "none";
// }

// console.log(+'String')
// const min = 10;
// const max = 20;

// const random = Math.round(Math.random()*(max-min) + min);
// console.log(random);
// const v = "String"
// console.log(v + null)

// console.log("pap" == "pap")

// console.log(1 > "0")

// const string = "Hello world"
// console.log(string.replace(" ", "").split(""))

// let i = 0;

// while (i <= 5) {
//   console.log("Do")
//   i +=1
// }


// let i = 0;

// for (i = 0; i <= 5; i += 1) {
//   console.log(i);
// }
//   console.log(i);


// const days = 9;

// if (!days) {
//   console.log('Today');
// } else {
//   console.log('Tomorrow')
// }


// if (-12) {
//   console.log(-12)
// }


// const arr = [1, 2, 3, 4, 5];
// const array = [6, 7, 8, 9, 10];
// const newarray = arr.concat(array)
// console.log(newarray)

// console.log(arr.indexOf(5));

// console.log(arr.includes(5));

// const newarr = arr.slice(0, 2)
// console.log(newarr);
// console.log(arr);

// const arr1 = arr.slice(3);
// console.log(arr1)

// const arr2 = arr.slice(-2)
// console.log(arr2)

// const arr3 = arr.slice()
// console.log(arr3)

// const ar = arr3.push(6, 7, 8,1,1,1,1,1)
// console.log(ar)
// console.log(arr3)

//  arr.splice(2, 2)
// console.log(arr)


// arr.push(2,3,4)
// console.log(arr)


// const arr = [1, 4, 7, 3, 9, 5, 2, 4]

// for (const number of arr) {
//   if (number % 2 !== 0) {
//     console.log(`${number} - Не четное`)
//     continue
//   }
//   console.log(`${number} - Это четное число`)
// }

// const string = "Welcome to the future";

// const result = string.split(" ").slice(1, -1).join(" ")
// console.log(result)



// function descendingOrder(n){
//   let arr = String(n).split("")
//   console.log(arr)
//   let newArr = [];
//   let i;
//   for (i = 0; i < arr.length; i += 1) {
//     newArr.push(Number(arr[i]))
//   }
//   console.log(newArr)
//   let biggerNumber = newArr[0];
//   console.log(biggerNumber)
//   let y;
//   let arr1 = [biggerNumber];
//   for (y = 0; y < newArr.length; y += 1) {
//     if (biggerNumber < newArr[y]) {
//       arr1.push(newArr[y])

//     }
   

//   }
//          console.log(arr1)
//   const arr2 = arr1.reverse().join().replaceAll("," ,"");
//   console.log(arr2)
//   const arr3 = Number(arr2)
  

//   return console.log(arr3)
// }

// descendingOrder(7685943)


// const arr = [1, 2, 3, 4, 5]

// for (let el of arr) {
//   el = 1;
//   console.log(el);
// }

// const func = function (a,b) {
//   console.log("Hello")
//   return a + b
// }

//  func(1, 2);

// function add (a, b) {
//   return a;
// }



// const result = add(3, 5)
// console.log(result)


// function sayMyName(name) {
//   console.log(`My name is ${name}`)
// }

// sayMyName('Alex')


// const num = Number(prompt("Введите число"));
// const num1 = Number(prompt("Введите еще число"))
// alert (num + num1)
// console.log(true === 1) 

// const a = "1";
// console.log(typeof a)
// // const b = Number(a);
// const b = + a;
// console.log(b)

// const c = "";
// // const v = Boolean(c);
// const v = !!c;
// console.log(v)

// const a = 1;

// const b = String(a);
// const b = a + "";
// console.log(b)

// // const a = "51.676767868686px45";
// // const b = "2";
// // const c = "3";

// // const v = Number.parseFloat(a);
// // console.log(v)


// const a = 2.56837838;
// const b = Number(a.toFixed(2))
// console.log(b)

// const c = "Hello";
// console.log(c.length)

// const idx = c.indexOf("o")
// console.log(idx)


// console.log("a" > "A")

// const w = "A".charCodeAt();
// console.log(w)


// const a =  "hgdfjdsjvbsj" - 1;
// console.log(a)


// const b = "Hello";

// console.log(b.endsWith("llo"));


// const a = Number("11,25".replace(",", "."));

// console.log(a)

// const a = "Hello world";

// const b = a.slice(-3)
// console.log(b)


// function add () {
//   if (1 || 0) {
// console.log("Hello")
//   }

// }

// add()

// const number = function (busStops) {
//   let totalIn = 0;
//    let totalOut = 0;
//   for (let i = 0; i < busStops.length; i += 1) {
 
//     totalIn += busStops[i][0];
   
//     totalOut += busStops[i][1];
//   }
//   console.log(totalIn)
//   console.log(totalOut)
//   return totalIn - totalOut;
// }
// const a = number([[10, 0], [3, 5], [5, 8]]);
// console.log(a)


// const propName = "name";
// const user = {
//   age: 25,
//   // Имя этого свойства будет взято из значения переменной propName
//   [propName]: "Генри Сибола",
// };

// console.log(user.name); // 'Генри Сибола'

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

// // ❌ Возвращает true для всех свойств
// console.log("name" in dog); // true
// console.log("legs" in dog); // true

// // ✅ Возвращает true только для собственных свойств
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false


// const objName = "name";


// console.log(obj[objName])



// const strings = "Hello";
// for (const string of strings) {
//   console.log(string);
// }


// const friends = [
//   {
//     name: "Mango",
//     age: 20,
//   },
//   {
//     name: "Poly",
//     age: 25,
//   },
//   {
//     name: "Nick",
//     age: 30,
//   }
// ]

// const findFriendsName = function (allFriends, name) {
//   let message = "Friend is not found";
//   for (const friend of allFriends) {
//     if (friend.name === name) {
//    message = `Friend ${name} is found`
//       break;
//     }
//   }
//   console.log(message);
// };

// const result = findFriendsName(friends, "Mango");


// const obj = {
//   name: "Nick",
//   age: 40,
//   married: true,
// }

// console.log(obj);

// const obj1 = Object.create(obj);

// console.log(obj1)

// obj.field = "empty";
// console.log(obj1)
// console.log(obj);

// obj1.length = 1;
// console.log(obj1)
// console.log(obj);



// for (const item in obj) {
//   console.log(item)
// }

// console.log(obj1.hasOwnProperty("length"))

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

// for (const item in obj1) {
//   if (obj1.hasOwnProperty(item))
//   { console.log(item) }
//   else {console.log(obj1.hasOwnProperty(item))};
// }

// const obj = {
//   name: "Nick",
//   age: 40,
//   married: true,
// }

// // for (const key in obj) {
// //   console.log(key)
// // }

// const obj1 = Object.create(obj);
// // console.log(obj);
// console.log(obj1)

// const obj2 = obj;
// // console.log(obj);
// // console.log(obj2)

// // obj2.name = "Mike";
// // console.log(obj);
// // console.log(obj1);
// // console.log(obj2);

// console.log("яблоко".charCodeAt('я'))

// const min = 5;
// const max = 10;
// console.log(Math.round(Math.random()*(max - min) + min))

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
// };

// // Добавим картинку обложки если её нет в объекте книги
// const {
//   title,
//   coverImage = "https://via.placeholder.com/640/480",
//   author,
// } = book;

// console.log(title); // The Last Kingdom
// console.log(author); // Bernard Cornwell
// console.log(coverImage); // https://via.placeholder.com/640/480

// console.log(book);

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// function doStuffWithBook(book) {
//   // Делаем что-то со свойствами объекта
//   console.log(book.title);
//   console.log(book.numberOfPages);
//     console.log(book.isPublic);
//   // И так далее
// }


// doStuffWithBook({
//   title: "The Last Kingdom",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < arr.length; i += 1) {
  
//   console.log(arr[i])
//   if (arr[i] === 5) {
//     console.log("Found!!!", arr[i]);
//   return
//   }
// }

//   let i = 0;

// for (const number of arr) {

//     if (arr[i] === 5) {
//     console.log("Found!!!", arr[i]);
//     return
//   }
//   console.log(number);
//   i += 1;
// }

// console.log()

// const arr = [1, 2, 3,];

// let a;
// let b;
// let c;

// for (let i = 0; i < arr.length; i += 1) {
//   console.log(arr[i]);

//     a = arr[i];
  

// }

// console.log(a);
// console.log(b);
// console.log(c);





// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   }

// }

// const { name, tag, stats } = user;

// console.log(stats)


// console.log(stats);
// const myStats = { ...stats }
// console.log(myStats)
// myStats.followers = 0;
// console.log(myStats)
// console.log(user)



// function getTemp(temp) {
//   if (temp >= -7 && temp <= 7 ) {
//     console.log("Cold");
//   } else if (temp > 7 && temp <= 25) {
//     console.log("Normal");
//   } else if (temp > 25){
//     console.log("Hot")
//   }
//    else {console.log('Out of range')
//   }
// }

// getTemp(-17)

// const arr = [12, 22, 3, 14, 45, 16, 57];
// const [first, ...props] = arr;
// let i = 0;
// for (const prop of props) {
// console.log(prop)
//   i += 1;
// }

// console.log(arr);


// const obj = {
//   name: "Nick",
//   age: 40,
// }

// function show ({ name, age }) {
//   console.log(name,age)
// }

// console.log(show(obj))



// 

// function slugify(title) {
//   // Change code below this line

//   return title.split(' ').join('-').toLowerCase();
// }

// const result = slugify("Hello world hghfdhjvfhgfdjk hjvdfhkvh");
// console.log(result)

// function makeArray(firstArr, secondArr, maxLenth) {
//   const newArr = firstArr.concat(secondArr);
//   console.log(newArr);
//   if (newArr.length > maxLenth) {
//     return newArr.slice(0, maxLenth)
//   } 
//   return newArr
// }

// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3))


// function calculateTotal(number) {
//  // Change code below this line
//   let total = 0;
// for (let i = 1; i<=number; i+=1){
//   total+=i
// }
//   return total

//   // Change code above this line
// }

// console.log(calculateTotal(7));

// let a = 2;
// let b = 1;

// console.log(a ?? b);

// const arr = [{ a: 1 }, { b: 2 }, { c: [1, 2, 3]}, 4]
// console.log(arr.indexOf(7))

// const arr1 = arr.flatMap(item => item.c);
// console.log(arr1)


// const arr2 = ["Nick", "Bob", "Alex", "Nick", "Jane"]

// console.log(arr2.indexOf("Nick"));

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// // Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// // Это стандартная практика если callback-функция довольно большая.

// // Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// // то создаем его и записывает ему значение 0.
// // В противном случае увеличиваем значение на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Начальное значение аккумулятора это пустой объект {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);


// const arr = [5, 7, 2, 8, 0, 4]
// const b = [...arr].sort((a,b) => b - a);
// console.log(b)


// const arr = [1, 2, 3, 4, 5];
// arr.forEach((item, idx, arr) => {
//   arr[idx] = 20;
// })

// console.log(arr);
// const min = 0;
// const max = 100;

// const arr = new Array(100).fill(null).map(() =>  Math.round(Math.random() * (max - min) + min))
// console.log(arr);
// const arr1 = [...arr];
// console.log(arr1);

// const array = new Array(50).fill(0);
// console.log(array);
// const newarr = [];

// for (let i = 0; i < 50; i += 1) {
//   let total = 0;
// array.splice(total,1,i,i)

// }

// console.log(array);


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const a = arr.filter(item => item > 7);
// console.log(a)


// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];


// const newTweets = tweets.map(item => item);
// console.log(newTweets.id === tweets.id);


// const arr = ["name", "age", "status"]
// const arr1 = ["Nick", 20, true];

// const newObj = arr.reduce((acc, item, idx) => {
//     let newObj = {};
//   // return acc.name = "Nick"
//   // return  acc[item] = arr1[idx] 
//   acc[item] = arr1[idx] 
//   return acc
// },{});

// console.log(newObj)

// const addObg = (a, b) => {
//   let newObj = {};
//   for (let i = 0; i < a.length; i += 1) {

//     newObj[a[i]] = b[i] 

//   }
//       return newObj;
// }
// const result = addObg(arr, arr1);
// console.log(result)



// const arr = [1, 2, 3, 4, 5];
// const arr1 = [3, 4, 5];
// const uniqueArr = arr.concat(arr1).filter((item, idx, arr) => {
//   return arr.indexOf(item) === idx;
// });
// console.log(uniqueArr);


// const call = (item) => {
//   let i = 0;
//   console.log(i)
//   for (i; i < item.length-1; i += 1) {
//     console.log(i)
//   }
//   return item[i];

// }



// const uniqueArr1 = (array, array1, callback) => {
//   const newarr = array.concat(array1);
//   const unique = [];

//   for (let i = 0; i < newarr.length; i += 1) {
//     if (newarr[i] !== callback(newarr)) {
// unique.push(newarr[i])
//     } 
//   }
//   return unique
// }

// console.log(uniqueArr1(arr, arr1, call))

// const arr = [
//   {
//     name: "Nick",
//     skills: ["html", "css"]
//   },
//   {
//     name: "Mike",
//     skills: ["js", "react"]
//   },
//     {
//     name: "Helen",
//     skills: ["node.js", "next.js"]
//   }
// ]
// const result = arr.find((item) => item.skills.includes("js"));
// console.log(result)
// console.log(arr)

// const result = arr.map(item => item)
// console.log(result)

// result[0].name = "Oleg";

// console.log(arr)
// console.log(result)

// const result = arr.flatMap(item => item.skills).filter(item => item === "js")
// console.log(result)


// const result = arr.find(item => item.skills.includes("js"));
// console.log(result)

// function findLongesWord (string) {
//   const arr = string.split(" ");
//   let message = arr[0];
//   for (let i = 0; i < arr.length; i += 1) {
//   if (message.length < arr[i].length) {
//      message = arr[i]
//     }
//   }
//   return message;
// };

// const result = findLongesWord("The quick brown fox jumped over the lazy dog")
// console.log(result)


// function countRestStock (totalStock, orderedStock, reservedStock) {
//   const rest=totalStock-(orderedStock+reservedStock);
//   const message =`Остаток на складе ${rest}` 
//   return message

// }
  

// console.log(0 ?? 2)


// let ask = prompt("Enter a number greater then 100")

// console.log(ask)

// if (ask < 100) {
//   ask = prompt("Enter a number greater then 100");
// } else {
//   console.log(ask)
// }


// while (ask < 100 || ask !== null) {
//    ask = prompt("Enter a number greater then 100");
// }

// let i;

// for ( i = 0; i < 10; i += 1) {
//   console.log(i)
// }
// console.log(i)
  

// const arr = new Array(100).fill(null).map((item) => Math.round(Math.random() * (100 - 10) + 10))
// console.table(arr)

// const add = (a, b) => a + b;
// const mult = (a, b) => a * b;

// console.log(add(2,2))

// const doMath = (a, b, callback) => {
//   const res = callback(a, b);
//   console.log(res);
//   return res

// }

// const result = doMath(2, 3, mult)
// console.log(result)

// const cars = [
//   {
//     name: "Tesla",
//     type: "model X",
//   },
//     {
//     name: "BMW",
//     type: "X5",
//   },
//       {
//     name: "Honda",
//     type: "Accord",
//   },
// ]


// function getCarByName(cars) {
//   const carsName = [];
//   for (const car of cars) {
//  carsName.push(car.name)
//   }
//   return carsName
 
// }


// const result = getCarByName(cars);
// console.log(result)


// const res = cars.map((car) => car.name);
// console.log(res);
// const add = (min, max) => {
//   const arr = [];
//   for (min; min <= max; min += 1) {
//     arr.push(min)
//   }
// }

// console.log()

// function solution(str){
//   return str.split('').reverse().join('');
// }

// console.log(solution("world"))


// const string = "Hello";
// const arr11 = [...string];
// console.log(arr11);

// String.prototype.toAlternatingCase = function () {

//   for (let i = 0; i < String.prototype; i += 1) {
//     if (String.prototype[i] === String.prototype[i].toUpperCase()) {
//      return String.prototype[i] = String.prototype[i].toLowerCase
//     } else {  String.prototype[i] = String.prototype[i].toUpperCase }
//     return String.prototype
//   }
// }

// console.log("Hello WORLD".toAlternatingCase())

// function sortByLength (array) {
// const arr = [];
// let shortestWord = array[0];  
//   for (let i = 0; i < array.length; i += 1) {
//     if (shortestWord.length < array[i].length) {
//       shortestWord = arr[i];
//       arr.unshift(shortestWord)
//     // } else if (shortestWord.length > array[i].length){
//     //   shortestWord = array[i]
//     //   arr.push(shortestWord)
//     // } else if (shortestWord.length === array[i].length) {
//     //     shortestWord = array[i]
//     }
//   }
//   return arr
// };


// console.log(sortByLength(["hello", "word", "hot", "my", "traffic"]))



// function createCounter() {
//   let counter = 0
//  const myFunction = function() {
//     counter = counter + 1
//     return counter
//   }
//   return myFunction
//  }
//  const increment = createCounter()
//  const c1 = increment()
//  const c2 = increment()
//  const c3 = increment()
//  console.log('example increment', c1, c2, c3)


//  console.log(undefined + "1")

// function abbrevName(name){
//   let abName = name.split(' ');
//   const firstLeter = abName[0][0];
//   console.log(firstLeter);
//   const secondLeter = abName[1][0];
//   console.log(secondLeter);
//   const abr = []
//   abr.push(firstLeter, secondLeter);
//   const result = abr.join(".").toUpperCase();
//   console.log(result)

//   return result;
// }

// console.log(abbrevName('a b'))

// const sequenceSum = (begin, end, step) => {
//   let sum = 0;
//   for (let i = begin; i <= end; i += step) {
//     sum += i; 
//   }
//   return sum;
// };

// console.log(sequenceSum(1,5,1))


// const dog = {
//   name: "Rex",
//   age: 3,
// }

// const cat = Object.create(dog);
// cat.say = "meow";
// // cat.name = "Frog";

// console.log(cat);
// console.log(dog);


// for (const key in cat) {
//   if (!cat.hasOwnProperty(key)) {
//     continue
//   }
//   console.log(key)
// }

// class User {
//   // Необязательное объявление публичных свойств
//   name;
//   // Обязательное объявление приватных свойств
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Манго",
//   email: "mango@mail.com",
// });

// console.log(mango.email)
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // mango@supermail.com
// console.log(mango.name); // Будет ошибка, это приватное свойство


// mango.name = "Nick";
// console.log(mango.name)

// // mango.email = "hbjhb";
// // console.log(mango.email)

// console.log(mango)



// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));


// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   // Тело класса ContentEditor
// }

// const editor = new ContentEditor("mango@mail.com");
// console.log(editor); // { email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"


// function highAndLow(numbers) {
//   let newNumbers = numbers.split(" ");
//         console.log(newNumbers)

//   const min = Math.min(...newNumbers);
//   console.log(min);
//   const max = Math.max(...newNumbers);
//   console.log(max);
//   const newString = String(min) +" "+ String(max);
//   console.log(newString)
//   return newString
// }
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))


// const str = "H c";
// console.log(str[1])

// const  Car = function () {
//   console.log(this)
// }

// Car()


// const Car = function ({name, model, price,} = {}) {
//   this.name = name;
//   this.model = model;
//   this.price = price;
// };
// Car.prototype.getCarName = function () {
//  return this.name
// }
  
// Car.prototype.changePrice = function (price) {
//   this.price = price;
//   }

// const myCar = new Car({ name: "Tesla", model: "X", price: 105000 });
// console.log(myCar);

// const a = myCar.getCarName();
// console.log(a)

// myCar.changePrice(200000);
// console.log(myCar);


// const mySecondCar = new Car({ name: "BMW", model: "X5", price: 98000 })
// console.log(mySecondCar)


// function switchItUp(number) {
//   let word;
//   switch (number) {
//     case 1:
//       word = "One";
//       break;
//     case 2:
//       word = "Two";
//       break;
//     case 3:
//       word = "Three";
//       break;
//     case 4:
//       word = "Four";
//       break;
//     case 5:
//       word = "Five";
//       break;
//     case 6:
//       word = "Six";
//       break;
//     case 7:
//       word = "Seven";
//       break;
//     case 8:
//       word = "Eight";
//       break;
//     case 9:
//       word = "Nine";
//       break;
//   }
//   return word
// }

// const res = switchItUp(3);
// console.log(res);

// const newUser = {
//   name: "Nick",
//   age: 40,
//   city: "Kiev",
//   status: true,

// }

// class User {
//   static Length = {
//     description: "This is a file about a user"
//   }

//   static showDescreption() {
//     console.log(User.Length.description)
//   }
//   #status;

//   constructor({ name, age, city, status } = {}) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.#status = status;
//   }
//   get userStatus() {
//   return console.log(this.#status)
// }

//   get userName() {
//     return console.log(this.name);
//   }
  
//   set userName(newName) {
//     return this.name = newName;
//   }

//   showAge() {
//     return console.log(this.age)
//   }

// }

// const myUser = new User(newUser);
// console.log(myUser)

// console.log(myUser.userName)

// myUser.userName = "Mike";
// console.log(myUser.userName)
// console.log(myUser)

// console.log(myUser.showAge())


// console.log(User.Length)
// console.log(User.showDescreption())

// class PriverUser extends User {
//   constructor({ privatLogin, ...restProps} = {}) {
//     super(restProps)
//     this.privatLogin = privatLogin;
//   }
// }

// const myPrivatUser = new PriverUser({ name: "Bob", age: 20, city: "Lviv", status: false, privatLogin: 12345 })
// console.log(myPrivatUser)

// console.log(myPrivatUser.userStatus)

// console.dir({a: 5})

// function foo(a, b) {
//   return a + b
// }

// console.dir(foo.__proto__.__proto__)


// const object = {
//   a: 5,
//   b: 7,
//   add(param) {
//     return this.a * this.b + param

//   }
// }

// console.log(object.add(5))


// const object1 = {
//   a: 3,
//   b: 9,
// }

// console.log(object.add.apply(object1, [5]))

// const res = object.add.bind(object1)
// console.log(res(24))

// function between(a, b) {
// const arr = [];
//   for (let i = a; i <= b; i += 1) {
//     arr.push(i)
//   }
//   return arr
// }

// console.log(between(1, 7))

// console.dir(Array.from({ length: 10 }, (a, b) => b,))


// const arr = [1, 2, 3, 4]
// console.log(arr.toString())

// function getSum(a, b)
// {
//       if (a === b) {
//       return a
//       }
//   let sum = 0;
//   if (a > b) {
//     for (let i = b; i <= a; i += 1) {
//       sum += i;
//     }
//   } else {
//         for (let i = a; i <= b; i += 1) {
//       sum += i;
//     } 
//   }
//   return sum
//   }



// console.log(getSum(1, 4))

// const str = "Hello"
// const newStr = str.slice(-1)
// console.log(newStr)

// function add(...args) {
//   args = Array.from(arguments);
//   console.log(args)
//   let total = 0;
//   console.log(args)
//   for (let i = 0; i < args.length; i += 1) {
//     total += args[i];
//   }
//   return total
// }
// const arr = [1,23,45,7]
// console.log(add(...arr))


// const obj = {
//   name: "Nick",
//   age: 40
// }



// function openOrSenior(data){
//   const output = [];
//   for (let i = 0; i < data.length; i += 1) {
//     console.log(data[i])
//     if (data[i][0] >= 55 && data[i][1] > 7) {
//       console.log(data[i][0]);
//       console.log(data[i][1]);
//       output.push("Senior")
//     }
//     else if (data[i][0] < 55 || data[i][1] <= 7) {
//          console.log(data[i][0]);
//       console.log(data[i][1]);
//           output.push("Open")
//      }
   
//   }
//   return output
// }

// console.log(openOrSenior([[90,24],[28,3],[76,25],[64,7],[46,8]]))

// function addFive(num) {
//   var total = num + 5
//   return total
// }

// console.log(addFive(5))

// const a = 2 ** 4
// console.log(a)

// function updateLight(current) {
//   let res;  
//   switch (current) {
//     case "green":
//       res = "yellow";
//       break;
//     case "yellow":
//       res = "red";
//       break;
//     case "red":
//       res = "green";
//       break
//   }
//   return res;

// }

// console.log(updateLight("green"))


// const arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i += 1) {
//   console.log(arr[i])

// }

// const a = Array.from({length: 5},(v, k) => k);
// console.dir(a)


// function findOdd(arr) {
//   const res = arr.reduce((acc, item, idx, arr) => {
//     if (acc[item] !== item)
//     { acc[item] = 1; } else {
//       acc[item] = item + 1;
//     }
//     console.log(acc)
//     return acc;
// }, {})
//   return 0;
// }


// console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))
// program to count down numbers to 1


// function countDown(number) {

//     // display the number
//     console.log(number);

//     // decrease the number value
//     const newNumber = number - 1;

//     // base case
//     if (newNumber > 0) {
//         countDown(newNumber);
//     }
// }

// countDown(4);

// function divide(a, b) {
//   return a / b;
// }

// function add(a, b, callback) {
//   const res = a + b + callback(8, 4);
//   return res;

// }

// console.log(add(2, 4, divide))


// function divide(a, b) {
//   return a / b;
// }

// function add(a, b) {
//   const res = a + b;
//   return res;

// }


// function res(callback, callback1) {
//   const res = callback(2, 4) + callback1(8, 4)
//   return res
// }

// console.log(res(add, divide))


// const arr = Array.from({ length: 10 }, (a, b) => b);
// console.log(arr)

// const arr3 = [];
// const res = arr1.forEach((item, idx, arr) => {

// arr3.push(item)
// })

// console.log(arr3)

// function log() {
//   console.log("Hello")
// }

// log()


// function add(a, b) {
//   return a + b
// };

// const add1 = function (a, b) {
//   return a + b
// }

// const add2 = (a, b) => {
//   return a + b
// }


// const add3 = a => a 





// const myMap = (arr, callback) => {
//   const newArr = [];
//   for (const item of arr) {
//     const el = item;
//     newArr.push(callback(el))
//   }
//   return newArr;
// }


// const foo = (item, idx, arr) => {
//   return item * 5
// }


// console.log(myMap(arr1, foo));

// const newArr = arr1.map((item) => item * 3)
// console.log(newArr)

// const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const string = "nbckjfshjkvchbfhjvjfdsbvj"

// const obj = string.split('').reduce((acc, item) => {
//   if (acc.hasOwnProperty(item)) {
//     acc[item] += 1;
//   } else { acc[item] = 1 }
//   return acc
// }, {})

// console.log(obj)


// const res = arr1.map((item, idx, arr) => {

// return `${idx} : ${item}`


// })

// console.log(res)





// const res = arr1.reduce((acc, item) => {
//  acc.push(item)
//   return acc
// }, [])

// console.log(res);


// function makeNegative(num) {
//   let res;
//   if (num > 0) {
//    res = Number("-"+num)
//   } else {
//     res = num;
//  }
//   return res;
// }

// console.log(makeNegative(0))


// function countSmileys(arr) {
//   const newArr = []
//   for (let i = 0; i < arr.length; i += 1) {
//     console.log(arr[i])
//     if ((arr[i].includes(((":" || ";") && (")" || "D") ) ))) {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr.length;
// }

// console.log(countSmileys([";o(" , ":D" , ":>" , ";~)" , ":D" , ":(" , ":o>"])); 

// function towerBuilder(nFloors) {
//   var tower = [];
//   for (var i = 0; i < nFloors; i++) {
//     tower.push(" ".repeat(nFloors - i - 1)
//              + "*".repeat((i * 2)+ 1)
//              + " ".repeat(nFloors - i - 1));
//   }
//   return tower;
// }

// console.dir(towerBuilder(10))


// function findUniq(arr) {
//   return arr.find((item, idx, arr) => {
//     console.log(item)
//     console.log(arr[idx + 1])
//     if (item !== arr[idx + 1]) {
//      return arr[idx + 1]
//    }
//   })

// }

// console.log(findUniq([1,1,1,1,4,1,1,1]))


// function hero(bullets, dragons){
//   if (bullets / dragons >= 2) {
//   return true
//   } 
//   return false


// }
//   console.log(hero(5,5))

// function pow(x, y) {
//   if (y === 0) return 1;

//   return x * pow(x, y-1)
// }

// const res = pow(5, 3);
// console.log(res)


// function count(string) {
//  const obj = string.split('').reduce((acc, item) => {
//     if (acc.hasOwnProperty(item)) {
//       acc[item] += 1;
//     } else { acc[item] = 1 }
//      return acc;
//   }, {})
//   return obj
// }

// console.log(count("aba"))

// function string(str) {
//   const newStr = str.split(" ")
//   for (let i = 0; i < newStr.length; i += 1) {

//   }
//   return newStr
// }

// console.log(string("is2 Thi1s T4est 3a" ))

// function invert(array) {
//   const newArr = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] < 0) {
//       newArr.push(Math.abs(array[i]))
//     }
//     else if (array[i] > 0) {
//       newArr.push(-Math.abs(array[i]))
//     } else { newArr.push(array[i])}
//   } 
//    return newArr;
// }


// console.log(invert([0]))

// function br(str) {
//   let newStr = str.split('');
//   const arr = [];
//   for (let i = 0; i < newStr.length; i += 1) {
//     if (newStr[i].toUpperCase() === newStr[i]) {
//       let idx = newStr.indexOf(newStr[i])
//       console.log(idx)
//       const res = newStr.splice(0, idx)
//       console.log(newStr)
//       arr.push(res, newStr)
//       console.log(arr)
//   } else if (newStr[i].toUpperCase() !== newStr[i]){  arr.push(newStr[i])}
//   }
//   return arr.join(" ").replaceAll(",", "");
// }

// console.log(br("newArr" ))

// const arr = [1,2,3,4,5,6,7]

// function myMap (array, callback) {
//   const newArr = [];
//   for (let i = 0; i < array.length; i += 1) {
//     let item = array[i];
//     newArr.push(callback(item))
//   }
//   return newArr
// }

// function addTree(item, idx, arr) {
//   return item + 3
// }

// console.log(myMap(arr, addTree))


// const res = arr.map((item) => item + 3)
// console.log(res)



// let i = 0;
// function recursion() {
//   if (i > 10) {
//      return
//   }
//   i += 1
//   console.log(i)
//   return recursion()

// }

// console.log(i);
// console.log(recursion())

// console.log(i);


// function count(number) {
//   let count = number;
//   function increment(num) {

//     return count += num
//   }
//   return increment
// }

// const incrementCount = count(4);
// console.log(incrementCount)

// console.log(incrementCount(9))


// const myArr = [...arr].sort((a, b) => { return b - a })
// console.log(myArr)


// const arrName = ["Alex", "Mike", "Freedom", "Jane"]

// const sortedArr = [...arrName].sort((a, b) => { return b.localeCompare(a) })
// console.log(sortedArr)


// function enough(cap, on, wait) {
// if (cap > on + wait) {
//   return 0}
// return on - wait
// }

// // Write tfunhe "square"-function here
// function sqrt (arg) {
//   return Math.pow(arg,2)
// }

// console.log(sqrt(4))
// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const item = list.firstChild;
// console.log(item);
// const text = item.firstChild;
// console.log(text)

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.childNodes;
// console.log(listItems);

// const list = document.querySelector(".list");
// console.dir(list.style.backgroundColor = "green")


// console.dir(list.innerHTML='hvnhvhnv')

// const input = document.querySelector(".input")
// console.dir(input)

// const text = document.querySelector(".text-js")
// console.log(text.ownerDocument)


// const link = document.querySelector(".link-js");
// console.dir(link.innerHTML)

// console.dir(document)

// const first = document.querySelector(".first");
// list.append(first);


// const arr = ["JS", "C++", "Python", "Java"];

// const markUp = arr.map((item) => `<li>${item}</li>`).join('')
// list.innerHTML = markUp;
// console.dir(list.firstElementChild)
// list.insertAdjacentHTML("beforebegin", "<h1>Technologies:</h1>")


// function addOverName(prop, ...rest) {
//   let total = rest.filter((item) => item > prop).reduce((acc, item) => {
//     acc+=item
//     return acc
//   }, 0)
//   console.log(total)
//   if (total < prop) {
//     return 0
//   }
//   return total
// }
// console.log(addOverName(20, 74, 11, 62, 46, 12, 36))

// function findMatches(arr, ...rest) {

//   const newArr = [...arr, ...rest];
//   console.log(newArr)
//   const matches = newArr.filter((item, idx, arr) => arr.indexOf(item) !== idx)

//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7))
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.some((item) => item.name === newPotion.name)) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//     this.potions.push({ name: newPotion.name, price: newPotion.price })
//   },

//   removePotion({ name }) {
//     const potionIndex = this.potions.findIndex((item) => item.name === name);
//     if (potionIndex === -1) {
//       return `Potion ${name} is not in inventory!`;
//     }
//       this.potions.splice(potionIndex, 1);
//   },

//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.findIndex((item) => item.name === oldName);
//     console.log(potionIndex)
//      this.potions.splice(potionIndex, 1, {name: newName, price: this.potions[potionIndex].price});
//   },

// };

// const btnEl = document.querySelector(".js-btn");
// btnEl.addEventListener('click', () => {
//   const titleEl = document.querySelector(".title");
//   titleEl.classList.toggle("title_class")
// })

// function strCount(str, letter){  
//   const res = str.split('').reduce((acc, item) => {
//     if (acc.hasOwnProperty(item)) {
//       acc[item] = acc[item] + 1;
//     } else {acc[item] = 1}

//     return acc
//   }, {})
//   console.log(res)


//   if (res.hasOwnProperty(letter)) {
// return res[letter]
//   }
//   return 0

// }


// console.log(strCount("Hello", "k"))





// const res = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// console.log(res)


// function isPangram(string) {
//   const res = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//   const newStr = string.toLowerCase().split("")
//   console.log(newStr)

//   for (let i = 0; i < res.length; i += 1) {
//     for (let n = 0; n < newStr.length; n += 1) {
//       if (res[i]===(newStr[n])) {
//         return true
//       }
//     }


//     return false
  
//   }
// }

// console.log(isPangram("The qui the lazy dog."))
// function gooseFilter (birds) {
//   var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];


//   const res = [];
//   for (let i = 0; i < birds.length; i += 1) {
//     if (!geese.includes(birds[i])) {
//       res.push(birds[i]);
//       console.log(i)
//     }

//   }

//   return res;

// };

  
// console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))


// const paintings = [
//   {
//     id: "id-1",
//     url: "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
//     title: "Feathers. Art abstract",
//     price: 500,
//     author: {
//       tag: "ractapopulous",
//       url: "https://pixabay.com/users/ractapopulous-24766/"
//     },
//     quantity: 10
//   },
//   {
//     id: "id-2",
//     url: "https://cdn.pixabay.com/photo/2017/08/02/22/38/bird-2573779_1280.jpg",
//     title: "Bird. Animal art abstract",
//     price: 400,
//     author: {
//       tag: "ractapopulous",
//       url: "https://pixabay.com/users/ractapopulous-24766/"
//     },
//     quantity: 15
//   },
//   {
//     id: "id-3",
//     url: "https://cdn.pixabay.com/photo/2017/09/04/22/40/flowers-2715804_1280.jpg",
//     title: "Flowers. Tulip nature art abstract",
//     price: 600,
//     author: {
//       tag: "ractapopulous",
//       url: "https://pixabay.com/users/ractapopulous-24766/"
//     },
//     quantity: 5
//   }
// ]

// const receipts = [
//   {
//     id: 1,
//     name: "Smoked salmon burger",
//     time: "20",
//     servings: 6,
//     calories: 210,
//     image: "https://assets.bonappetit.com/photos/62cc4eca787a907e535e8e7f/1:1/w_2580%2Cc_limit/0711-black-bean-burger-lede.jpg"
//   },
//   {
//      id: 2,
//     name: "Tomatoes With Creamy Feta",
//     time: "15",
//     servings: 3,
//     calories: 600,
//     image: "https://assets.bonappetit.com/photos/62b4926736e0c90647da6b71/1:1/w_2580%2Cc_limit/0623-diana-yen-tomato-recipe-lede.jpg"
//   },
//   {
//      id: 3,
//     name: "Spicy potato salad",
//     time: "30",
//     servings: 2,
//     calories: 320,
//     image: "https://assets.bonappetit.com/photos/62bf35ae872a6cfbb260f286/1:1/w_2580%2Cc_limit/0701-tj-recipe-potato-v2.jpg"
//   },
//   {
//      id: 4,
//     name: "Chicken Biryani",
//     time: "40",
//     servings: 4,
//     calories: 700,
//     image: "https://assets.bonappetit.com/photos/5db1b689823b960008d8468d/1:1/w_2580%2Cc_limit/Chicken-Biryani-Lede-NEW.jpg"
//   }
// ]

// const list = document.querySelector(".js-list");
// // // console.dir(document);

// // const card = document.createElement("li");
// // console.dir(card);
// // const heading = document.createElement("h2");
// // // console.dir(heading);
// // heading.textContent = receipts[0].name;
// // const picture = document.createElement("img")

// // picture.src = receipts[0].image;
// // picture.alt = receipts[0].name;
// // picture.style.width = "320px";
// // console.dir(picture);

// // card.append(heading, picture)
// // console.log(card)

// // list.appendChild(card);

// // const markUp = `${receipts}.map(${item} => {
// //   const liEl = document.createElement("li")
// //   liEl.firstElementChild=document.createElement("h2").textContent = ${item.name};
// //   liEl.lastElementChild = document.createElement("img).src = ${item.image}
// // })`

// // console.log(markUp)

// // document.appendChild(markUp)
// const markUp = receipts.map(item => {
//   return `<li data-id = ${item.id}>
//   <h2>${item.name}</h2>
//   <img src=${item.image} alt=${item.name} style="width:320px;">
//   <p>${item.servings}</p>
// <p>${item.time}</p>
// </li>`
// }).join('');

// console.log(markUp)

// list.insertAdjacentHTML("beforeend", markUp)

// const secondListEl = document.getElementById("1");
// console.log(secondListEl);

// const fragment = document.createDocumentFragment();

// paintings.forEach(({url, title, price}) => {
//   const li = document.createElement("li");
//   const heading = document.createElement("h2");
//   heading.textContent = `${title}`;
//   const image = document.createElement("img")
//   image.src = `${url}`;
//   image.style.width = "320px"
//   const pr = document.createElement("p");
//   pr.textContent = `${price}`;
//   li.append(heading, image, pr)
//   fragment.append(li)
// })

// secondListEl.append(fragment)
// console.log(secondListEl.innerHTML)

// var summation = function (num) {
//   let total = 0;
// for (let i = 0; i <= num; i +=1) {
//   total += i;
// }
//   return total;
// }

// console.log(summation(8))

// function sortArray(array) {
//   array.sort()
//   const res = [];
//   const newArr = array.filter((item, idx, arr) => {
//     return item % 2 !== 0
//   })
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] % 2 !==0) {
// continue
//     }
//   }
  
//  return newArr

// }

// console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))

// function past(h, m, s){
// const milSec = s * 1000;
// const milMin = m * 60000;
// const milHour = h * 3600000;  
//   return milSec + milMin + milHour
// }
// // function past(h, m, s){
// //   return ((h*3600)+(m*60)+s)*1000;
// // }

// console.log(past(1,1,1))



// const categories = document.getElementById("categories")
// const numOfCategories = categories.children.length
// console.log(`Number of categories: ${numOfCategories}`)

// const numOfAnimals = categories.firstElementChild.lastElementChild.children.length
// console.log(`Category: Animals 
// Elements: ${numOfAnimals}`)

// const numOfProducts = categories.children[1].lastElementChild.children.length;
// console.log(`Category: Products
// Elements: ${numOfProducts}`)


// const numOftechnologies = categories.lastElementChild.lastElementChild.children.length;
// console.log(`
// Category: Technologies
// Elements: ${numOftechnologies}`)


// const ingredientList = document.getElementById('ingredients');
// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// const fragment1 = document.createDocumentFragment();
// ingredients.forEach((item) => {
// const liEl = document.createElement("li")
//   liEl.textContent = item;
//   liEl.classList.add('item')
//   fragment1.append(liEl)
// })

// console.log(fragment1)
// ingredientList.appendChild(fragment1)


// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// const imageList = document.querySelector(".gallery")
// imageList.classList.add("list", "flex")

// const markUp1 = images.map((item) => {
//   return `<li>
//   <img src=${item.url} alt=${item.alt} class = "img"/>
// </li>`
// }).join('')

// imageList.insertAdjacentHTML("beforeend", markUp1)

// const Animal = function (params) {
//   this.name = params.name;
//   this.color = params.color;
//   console.log(this)
// }

// const dog = new Animal({ name: "Nika", color: "brown" })
// console.log(dog)
// const dog1 = new Animal({ name: "Kris", color: "white" })

// const handleClick = event => {
//   console.log(event);
// };

// imageList.addEventListener("click", handleClick);

// const form = document.querySelector(".register-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const {
//     elements: { username, password }
//   } = event.currentTarget;
//   console.log(username.value, password.value);
//   console.dir(event)
// });
// console.dir(form)

// // document.addEventListener("keydown", event => {
// //   console.log("Keydown: ", event);
// // });

// // document.addEventListener("keyup", event => {
// //   console.log("Keyup: ", event);
// // });


// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// setOutput();

// select.addEventListener("change", setOutput);

// function setOutput() {
//   const selectedOptionValue = select.value;
//   const selectedOptionIndex = select.selectedIndex;
//   const selectedOptionText = select.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }

// console.dir(select)


// const textInput = document.querySelector(".text-input");
// const output = document.querySelector(".output");

// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
//   console.dir(event)
// });


// const reverseSeq = n => {
//   const arr = Array.from({ length: `${n}` }, (a, b) => b).sort((a, b) => b - a);
//   arr.pop()
//   console.log(arr)
//   arr.unshift(n)
//    console.log(arr)
// };


// console.log(reverseSeq(10))

// var capitals = function (word) {
//   const arr = [];
//   for (let i = 0; i < word.length; i += 1) {
//     console.log(word.length)
//       console.log(word[i])
//   if (word[i] === word[i].toUpperCase()) {

//     arr.push(i)
//   }
 
//   }
//    return arr
// };

// console.log(capitals('CodEWaRs'));


// function duplicateCount(text){
//   const arr = text.split("");
//   const res = arr.filter((item, idx, arr) => {
//     return arr.indexOf(item.toLowerCase()) !== idx
//   })
//   console.log(res)
//   return res.filter((item, idx, arr) => {
//     return arr.indexOf(item.toLowerCase()) === idx
//   }).length
// }

// console.log(duplicateCount("aA11"))


// const container = document.getElementById("counter");
// const decrementBtn = container.firstElementChild;
// const incrementBtn = container.lastElementChild;
// const counter = container.querySelector("#value")

// console.log(container);
// console.log(decrementBtn);
// console.log(incrementBtn);
// console.log(counter);

// decrementBtn.addEventListener("click", onDecrementCounter)
// incrementBtn.addEventListener("click", onIncrementCounter)

// let count = 0;
// function onDecrementCounter() {
//   count -= 1
//   counter.textContent = count;
// }

// function onIncrementCounter() {
//   count += 1
//   counter.textContent = count;
// }



// const input = document.getElementById("name-input");
// const span = input.nextElementSibling.firstElementChild;

// console.log(input);
// console.log(span)

// input.addEventListener("input", onInputChange)

// let inputText;
// function onInputChange(evt) {
//   console.log() 
//   span.textContent = evt.currentTarget.value;
//   if (evt.currentTarget.value === "") {
//       span.textContent = "Anonymous";
//   }
// }



// const inputRef = document.getElementById("validation-input");

// inputRef.addEventListener("blur", onInputBlur)
// // inputRef.addEventListener("focus", onInputFocus)
// function onInputBlur(evt) {
//   if (evt.currentTarget.value.length >= inputRef.dataset.length) {
//     inputRef.classList.add("valid");
//     if (inputRef.classList.contains("invalid")) {
// inputRef.classList.remove("invalid")
//     }
 

//   } else if ((evt.currentTarget.value.length < inputRef.dataset.length)) {
//     inputRef.classList.add("invalid") 
//     console.log(inputRef.classList)
//      if (inputRef.classList.contains("valid")) {
// inputRef.classList.remove("valid")
//      } else if (evt.currentTarget.value === "") {
//        inputRef.removeAttribute("class");
//        console.log( inputRef.classList.value)
//      }

// }
// }




// const inpRef = document.getElementById("font-size-control");
// const spanRef = document.getElementById("text");

// console.log(inpRef.value) 

// inpRef.addEventListener("input", onRangeChange)

// function onRangeChange(e) {
//   console.log(e.currentTarget.value)
// spanRef.style.fontSize = `${e.currentTarget.value}px`
// }





// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// console.log(getRandomHexColor())


// const myBtn = document.querySelector(".change-color");
// const spanText = document.querySelector(".color")
// const inputColor = document.querySelector(".input__color")

// myBtn.addEventListener("click", onBodyChangeColor)

// function onBodyChangeColor(evt) {
//   const color = getRandomHexColor();
//   console.log(color)
//   document.body.style.backgroundColor = color;
//   spanText.textContent = color;
//     ;
// }
// console.dir(inputColor)

// const inputNumber = document.getElementById("controls").firstElementChild;
// const createBtn = document.querySelector("[data-create]");
// const destroyBtn = document.querySelector("[data-destroy]");
// const boxes = document.getElementById("boxes");

// createBtn.addEventListener("click", onCreateBox);
// destroyBtn.addEventListener("click", onDestroyBox)

// function createBoxes(amount) {
//   let markUp = [];
//   let counter = 0;
//   for (let i = 0; i <= amount; i += 1) {
//    markUp.push("<div ></div>")
//   }
//   return markUp.join('')
// }
// console.log(createBoxes(3))

// function onCreateBox() {
//   const box = document.createElement("div");
//   box.style.width = "320px";
//   box.style.height = "160px"
//   console.log(box)
//   box.style.backgroundColor = getRandomHexColor();
//   boxes.append(box);

  
// }
// function onDestroyBox() {
//   boxes.innerHTML = "";
// }


// // var number=function(array){
// //   const arr1 = [];
// //   array.forEach((item, idx, arr) => {
// //     console.log(idx+1)
// //     arr1.push(`${idx + 1} : ${item}`)

// //   })
// //   return arr1
// // }


// // console.log(number(["a", "b", "c"]))

// // function friend(friends) {
// //   for (let i = 0; i < friends.length; i += 1) {
// //     if (friends[i].includes(0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9)) {
// //     friends.splice(i, 1)
// //     }
// //     console.log(friends)
// //   }
// //   return friends.filter((item, idx, arr) => {

// //   return item.length <= 4
// // })
// // }

// // console.log(friend([ 'Ryan', '123', '4' ] ))
// const formEl = document.querySelector(".form");
// const subBtn = document.querySelector(".btn_sub");
// const inputEl = document.querySelector(".input_cl")
// console.log(formEl)


// formEl.addEventListener('submit', onSubmit);

// function onSubmit(evt) {
//   evt.preventDefault()
//   console.log(evt.currentTarget.elements.input.value)
//   const color = evt.currentTarget.elements.input.value;
//   document.body.style.backgroundColor = String(color);
//   evt.currentTarget.reset();

// }


// function twoSort(s) {
//   let res = s.sort((a, b) => a.localeCompare(b))[0];
//   let str;
//   for (let i = 0; i < res.length; i += 1){
//    str = "***" + res[i]; 
//   }
//   return str
// }

// console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))
// function grow(...x){
//   let res = 1;
//   const arr = [...x].sort((a, b) => a - b)
//   console.log(arr)
//   for (let i = 0; i < arr.length; i += 1) {
//     res *= x[i]
//   }
// return res
// }
// console.log(grow(4,3,6))

const form = document.querySelector(".js-form");
const allInputs = document.querySelectorAll("input");
const input = document.querySelector(".js-input");
const row = document.querySelector(".js-tr");
const tbody = document.querySelector(".js-tbody");
const inputsur = form.elements.surname


allInputs.forEach(input => {
  input.addEventListener("focus", onFocusChange);
  input.addEventListener("blur", onBlurChange)
})

form.addEventListener("submit", onSubmit);
// input.addEventListener("focus", onFocusChange);
// input.addEventListener("blur", onBlurChange);
// inputsur.addEventListener("focus", onFocusChange);
// inputsur.addEventListener("blur", onBlurChange);
let placeholder;


function onFocusChange(evt) {
  placeholder = evt.target.placeholder;
  evt.target.placeholder = "";
  evt.target.classList.add("outline")
}

function onBlurChange(evt) {
  evt.target.placeholder = placeholder 
    evt.target.classList.remove("outline")
}

function onSubmit(evt) {
  evt.preventDefault();
  const name = evt.currentTarget.elements.name.value;
  const surname = evt.currentTarget.elements.surname.value;
  const email = evt.currentTarget.elements.email.value;
  const phone = evt.currentTarget.elements.phone.value;
  const position = evt.currentTarget.elements.position.value;

  const markUp = `<tr><td class ="js-td">${name}</td><td class ="js-td">${surname}</td><td class ="js-td">${email}</td><td class ="js-td">${phone}</td><td class ="js-td">${position}</td></tr>`
  console.log(markUp)
  tbody.insertAdjacentHTML("beforeend", markUp);
  evt.currentTarget.reset();
  
}


const text = document.querySelector(".text");
const btn = document.querySelector(".btn");

btn.addEventListener("click", onBtnClick);

const maxLenth = 72;
const totalLength = maxLenth + 3;

function onBtnClick(evt) {
  const str = text.textContent.slice(0, maxLenth);

  const remainder = text.textContent.slice(maxLenth);
  if (totalLength < text.textContent.length) {
text.setAttribute("data-text", remainder)
  text.textContent = str+"...";  
  btn.textContent = "Show more"
  } else {
    text.textContent = str + text.dataset.text;
      btn.textContent = "Show less"
  }
}

const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const openBtn = document.querySelector(".btn-open");
const closeBtn = document.querySelector(".btn-close");

openBtn.addEventListener("click", onModalOpen);
closeBtn.addEventListener("click", onModalOpen);
backdrop.addEventListener("click", onModalOpen);
document.addEventListener("keydown", onKeyDown)


function onModalOpen() {
  modal.classList.toggle("js-open");
  backdrop.classList.toggle("js-open");
  document.body.classList.toggle("modal-open")
}

function onKeyDown(evt) {
  if (evt.code === "Escape") {
 modal.classList.remove("js-open");
    backdrop.classList.remove("js-open");
      document.body.classList.remove("modal-open")
 
  }
}




// const arr1 = arr.flatMap(item => item)
// console.log(arr1)


// function countPositivesSumNegatives(input) {
//   const arr = [];
//   let positive = [];
//   let negative = 0;
// for (let i = 0; i < input.length; i += 1) {
//   if (input[i] < 0) {
//    negative += input[i] 
//   } else if (input[i] > 0)
//   { positive.push(input[i]) }
//   else if (input[0] === 0 && input[1] === 0) {
//     return [];
//   }

//   else {continue}
// }
// arr.push(positive.length);
//   arr.push(negative);
//   return arr
// }

// console.log(countPositivesSumNegatives([]))

// class StringBuilder {
//   constructor (initialValue){
//     this.value = initialValue
//   }
//   getValue() {
//     return this.value
//   }
//     padStart(str){
//      return this.value = `${str}${this.value}`
//   }
//   padEnd(str){
//     return this.value = `${this.value}${str}`
//   }

//   padBoth(str) {
//        return this.value = `${str}${this.value}${str}`
 
//   }
// }


// Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder)
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder)
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder)
// console.log(builder.getValue()); // "=^.^="

// console.log(builder)


















// // function encrypt(text, n) {
// //   const arr = [];
// //   const arr1 = [];

// //        for (let i = 0; i < text.length; i += 1) {
// //     if (i % 2 !== 0) {
// // arr.push(text[i])
// //     } else if (i % 2 === 0) {
// //       arr1.push(text[i])
// //     }
// //   }
// //   console.log(arr1)
// // const newArr = arr.concat(arr1)
// //   const newStr = newArr.join("")
  
// //        return  newStr.repeat(n)
   


//     }
 

// function decrypt(encryptedText, n) {

// }


// console.log(encrypt("01234", 2))

// console.dir(window)


const inputNumber = document.getElementById("controls").firstElementChild;
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");

createBtn.addEventListener("click",createBoxes);
destroyBtn.addEventListener("click", onDestroyBox)

let count = 0;
const width = 30;
const height = 30;

function сreateBox() {
  const box = document.createElement("div");
  box.style.width = width+count+"px";
  console.log( width+count+"px")
  box.style.height = height + count + "px";
  console.log(box)
  box.style.backgroundColor = getRandomHexColor();
  // boxes.append(box);
  count += 10;
  return box 
}

function createBoxes() {
  const amount = inputNumber.value;
  const fragment = document.createDocumentFragment();
  for (let i = 1; i <= amount; i += 1) {
    fragment.append(сreateBox())
  }
  console.dir(fragment)
return boxes.append(fragment)
}



function onDestroyBox() {
  boxes.innerHTML = "";
  count = 0;
  inputNumber.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


class User {
  // Необязательное объявление публичных свойств
  name;
  // Обязательное объявление приватных свойств
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }

  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

// const mango = new User({
//   name: "Манго",
//   email: "mango@mail.com",
// });
// console.log(mango)
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // mango@supermail.com


// function longest(s1, s2) {
//   const arr = s1.concat(s2).split('');
//   console.log(arr);
//   const result = arr.filter((item, idx, arr) => {
//     return arr.indexOf(item) === idx
//   }
//   )
// return result.join('')
// }

// console.log(longest("aretheyhere", "yestheyarehere"))

// function problem(x){
//   if (typeof x === "number") {
//   return x * 50 + 6
// } else {return "Error"}
// }

// console.log(problem(1))

// function pipeFix(numbers) {
//   const arr = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i]+1 === numbers[i + 1]) {
//       arr.push(numbers[i])
//     } else if ((numbers[i] + 1 !== numbers[i + 1])) {  }
//     else
//     {   arr.push(numbers[i])}
//   }
//   return arr
// }
  
// console.log(pipeFix(6,9))


const j = { "name": "Mango", "age": 45 };

try {
  const a = JSON.parse(j);
  console.log(a)
}
catch (error) {
  console.dir(error)
}

console.dir(window)







