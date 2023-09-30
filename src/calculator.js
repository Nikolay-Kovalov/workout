const input = document.querySelector(".input");
const buttons = document.querySelector(".numbers_list");
const equal = document.querySelector(".equal");
const onBtn = document.querySelector(".on");
const offBtn = document.querySelector(".off")


onBtn.addEventListener("click", onSwitchOn);
offBtn.addEventListener("click", onSwitchOff);

function onSwitchOff() {
    buttons.removeEventListener("click", onButtonClick);
    input.placeholder = "";
    input.value = "";
}

function onSwitchOn() {
    buttons.addEventListener("click", onButtonClick);
    input.placeholder = "0";
        input.value = "";
}

let result = 0;
let multResult = 1;
const arr = [];

function onButtonClick(evt) {

    if (evt.target.dataset.id) {
        input.placeholder = "";
        input.value += evt.target.dataset.id
    }
    if (evt.target.textContent === "AC") {
        input.value = "";
        input.placeholder = "0"
    }
    if (evt.target.textContent === "+") {
        arr.push(Number(input.value));
     input.value = ""

    }
    if (evt.target.textContent === "*") {
        arr.push(Number(input.value));
        input.value = ""
        equal.classList.add("mult");
    }
    if (evt.target.textContent === "/") {
        arr.push(Number(input.value));
        input.value = "";
        equal.classList.add("divide")
    }
       if (evt.target.textContent === "-") {
        arr.push(Number(input.value));
        input.value = "";
        equal.classList.add("subtract")
       }
    
    if (evt.target.textContent === "=") {
        arr.push(Number(input.value));
        if (evt.target.classList.contains("mult")) {
            input.value = multiply(...arr)
              arr.length = 0;
            multResult = 1;
            equal.classList.remove("mult")
        }
        else if (evt.target.classList.contains("divide")) {
            input.value = devide(...arr)
            arr.length = 0;
            multResult = 1;
            equal.classList.remove("divide")
            
        }
             else if (evt.target.classList.contains("subtract")) {
            input.value = subtract(...arr)
            arr.length = 0;
            multResult = 1;
            equal.classList.remove("subtract")
        }
        else {
            input.value = add(...arr) 
        arr.length = 0;
        result = 0;
    }
    }
}

function add(...props) {
    for (let prop of props) {
        result+=prop
    }
    return result
}

function multiply(...props) {
    for (let prop of props) {
        multResult*=prop
    }
    return multResult
}

function devide(...props) {
    let multResult = props[0]
    for (let i = 1; i < props.length; i += 1){
        multResult/= props[i]
    }
    return multResult
}

function subtract(...props) {
    multResult = props[0]
    for (let i = 1; i < props.length; i += 1){
        multResult-= props[i]
    } 
    return multResult
}










// const persistantCacheKeys = require('../enums/persistantCacheKeys');


// const moduleExports = [
//     {
//         datadef:'RoleTypes',
//         data: [
//             {
//                 where: { Code: 'register' },
//                 defaults: { Code: 'register', Comment: 'register' }
//             },
//             {
//                 where: { Code: 'setting' },
//                 defaults: { Code: 'setting', Comment: 'setting' }
//             },
//             {
//                 where: { Code: 'module' },
//                 defaults: { Code: 'module', Comment: 'module' }
//             },
//             {
//                 where: { Code: 'report' },
//                 defaults: { Code: 'report', Comment: 'report' }
//             },
//             {
//                 where: { Code: 'maintenance' },
//                 defaults: { Code: 'maintenance', Comment: 'maintenance' }
//             },
//             {
//                 where: { Code: 'action' },
//                 defaults: { Code: 'action', Comment: 'action' }
//             }
//         ]
//     },
//     {
//         datadef:'PermissionSamples',
//         data: [
//             {
//                 where: { code: 'denyAll' },
//                 defaults: { code: 'denyAll', comment: 'deny all', read: false, create: false, edit: false, remove: false, list: false, copy: false, show: false, run: false }
//             },
//             {
//                 where: { code: 'allowAll' },
//                 defaults: { code: 'allowAll', comment: 'allow all', read: true, create: true, edit: true, remove: true, list: true, copy: true, show: true, run: true }
//             },
//             {
//                 where: { code: 'readAndList' },
//                 defaults: { code: 'readAndList', comment: 'show, read and list', read: true, create: false, edit: false, remove: false, list: true, copy: false, show: true, run: false }
//             },
//             {
//                 where: { code: 'showOnly' },
//                 defaults: { code: 'showOnly', comment: 'show only', read: false, create: false, edit: false, remove: false, list: false, copy: false, show: true, run: false }
//             },
//             {
//                 where: { code: 'runOnly' },
//                 defaults: { code: 'runOnly', comment: 'run only (for action permission)', read: false, create: false, edit: false, remove: false, list: false, copy: false, show: false, run: true }
//             },
//             {
//                 where: { code: 'readOnly' },
//                 defaults: { code: 'readOnly', comment: 'read only (for field permission)', read: true, create: false, edit: false, remove: false, list: false, copy: false, show: false, run: false }
//             },
//             {
//                 where: { code: 'editOnly' },
//                 defaults: { code: 'editOnly', comment: 'edit only (for field permission)', read: true, create: false, edit: true, remove: false, list: false, copy: false, show: false, run: false }
//             },
//             {
//                 where: { code: 'createOnly' },
//                 defaults: { code: 'createOnly', comment: 'create only (for field permission)', read: true, create: true, edit: false, remove: false, list: false, copy: false, show: false, run: false }
//             }
//         ]
//     },
//     {
//         datadef:'PersistantCache',
//         data: [
//             // {
//             //     where: { fKey: persistantCacheKeys.LICENCE },
//             //     defaults: { fKey: persistantCacheKeys.LICENCE }
//             // },
//             // {
//             //     where: { fKey: persistantCacheKeys.SAAS_SEED },
//             //     defaults: { fKey: persistantCacheKeys.SAAS_SEED, fValue: '0' }
//             // }
//         ]
//     }
// ];


// function makeArr(arr) {
//     const newArr = arr.find((item) => {
//         return item.datadef === "PermissionSamples"
//     }).data.map((item) => {
//         return item.defaults
//     })
//     .reduce((acc, item) => {
//             const obj = { '0': item.code, '1': item.comment}
//             acc.push(obj)
//             return acc
//     },[])
//     return newArr
// }

// console.log(makeArr(moduleExports))



function removeUrlAnchor(url) {

    
    const string = (url.indexOf("#") === -1) ? url.substr(0, url.length)  :url.substr(0, url.indexOf("#")) ;

    return string
}

console.log(removeUrlAnchor('https://www.tea.int'))
