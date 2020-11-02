import './style.css'

let block = document.querySelector('.block');
let block2 = document.querySelector('.block2');
let block3 = document.querySelector('.block3');
let block4 = document.querySelector('.block4');
let button = document.querySelector('.button');
let input = document.querySelector('input');
let outName = document.querySelector('.out-name');
let btn = document.getElementById('btn');
const names = [];



button.addEventListener("click", () => {
    block.innerHTML += input.value + '<br>';
    names.push(input.value);
    input.value = '';
});




btn.addEventListener("click", () => {
    for (let i = 0; i < names.length; i++) {
        if ([i] % 2 === 0) {
            block3.innerHTML += names[i] + '<br>';
        }
        else {
            block4.innerHTML += names[i] + '<br>';
        }
    }
});


// btn.addEventListener("click", () => {
//     for (let i = 0; i < names.length; i++) {
//         block2.innerHTML += names[i] + '<br>';
//     }
// });
