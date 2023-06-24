const numberBtn  = document.querySelectorAll('[data-numbers]');
const operationBtn  = document.querySelectorAll('[data-operations]');
const previousNumberTextDiv = document.querySelector('[data-previousNumberText]');
const currentNumberTextDiv = document.querySelector('[data-currentNumberText]');
const equalsBtn = document.querySelector('[data-equals]');
const allClearBtn = document.querySelector('[data-allClear]');
const deleteBtn = document.querySelector('[data-delete]');
const year = document.getElementById('year');
const darkmodeToggle = document.getElementById('darkmode');

let darkmode = localStorage.getItem('darkmode')

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'enabled');
} 

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}

darkmodeToggle.addEventListener('click', () => {
    let darkmode = localStorage.getItem('darkmode')
    if(darkmode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})


let haveDot = false;
let currentNumber = '';
let previousNumber = '';
let result = null;
let lastOperation = '';

numberBtn.forEach(number => {
    number.addEventListener('click', (e) => {
        console.log(e.target.innerText)
    })
})