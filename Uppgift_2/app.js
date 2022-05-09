let display = document.querySelector('.display');
let deleteBtn = document.querySelector('#delete')
let addBtn = document.querySelector('#add')
let subtractBtn = document.querySelector('#subtract')
let equalsBtn = document.querySelector('#equals')
let multiplyBtn = document.querySelector('#multiply')
let oneBtn = document.querySelector('#one')
let twoBtn = document.querySelector('#two')
let threeBtn = document.querySelector('#three')
let fourBtn = document.querySelector('#four')
let fiveBtn = document.querySelector('#five')
let sixBtn = document.querySelector('#six')
let sevenBtn = document.querySelector('#seven')
let eightBtn = document.querySelector('#eight')
let nineBtn = document.querySelector('#nine')
let zeroBtn = document.querySelector('#zero')
let resetBtn = document.querySelector('#reset')

let variable1 = 0;
let variable2 = '';
let lastInputOperand = false;

deleteBtn.addEventListener('click' , event => {
    display.textContent = backspace(display.textContent);
});
addBtn.addEventListener('click' , event => {
    lastInputOperand = checkLastInput(display.textContent);
    if(lastInputOperand){

    } else if(!lastInputOperand) {
        display.textContent += addBtn.innerText;
    }
});
subtractBtn.addEventListener('click' , event => {
    lastInputOperand = checkLastInput(display.textContent);
    if(lastInputOperand){

    } else if(!lastInputOperand) {
        display.textContent += subtractBtn.innerText;
    }
});
multiplyBtn.addEventListener('click' , event => {
    lastInputOperand = checkLastInput(display.textContent);
    if(lastInputOperand){

    } else if(!lastInputOperand) {
        display.textContent += multiplyBtn.innerText;
    }
});
equalsBtn.addEventListener('click' , event => {
    let sum = calculateDisplayContent(display.textContent);

    let ulList = document.querySelector('.resultsList');

    let listItem = document.createElement('li');
    let importBtn = document.createElement('button');
    let removeBtn = document.createElement('button');

    listItem.textContent = display.textContent + "=" + sum;
    importBtn.textContent = 'import';
    importBtn.className = 'resultButtons';
    removeBtn.textContent = 'x';
    removeBtn.className = 'resultButtons';

    ulList.append(listItem);
    ulList.append(importBtn);
    ulList.append(removeBtn);

    removeBtn.addEventListener('click', event =>{
        listItem.remove();
        importBtn.remove();
        removeBtn.remove();
    });
    importBtn.addEventListener('click', event =>{
        display.textContent = listItem.textContent.split("=")[0];
    });

    display.textContent = clearDisplay(display.textContent);
});
oneBtn.addEventListener('click' , event => {
    display.textContent += oneBtn.innerText;
});
twoBtn.addEventListener('click' , event => {
    display.textContent += twoBtn.innerText;
});
threeBtn.addEventListener('click' , event => {
    display.textContent += threeBtn.innerText;
});
fourBtn.addEventListener('click' , event => {
    display.textContent += fourBtn.innerText;
});
fiveBtn.addEventListener('click' , event => {
    display.textContent += fiveBtn.innerText;
});
sixBtn.addEventListener('click' , event => {
    display.textContent += sixBtn.innerText;
});
sevenBtn.addEventListener('click' , event => {
    display.textContent += sevenBtn.innerText;
});
eightBtn.addEventListener('click' , event => {
    display.textContent += eightBtn.innerText;
});
nineBtn.addEventListener('click' , event => {
    display.textContent += nineBtn.innerText;
});
zeroBtn.addEventListener('click' , event => {
    display.textContent += zeroBtn.innerText;
});
resetBtn.addEventListener('click', event =>{
    display.textContent = clearDisplay(display.textContent);
});

function backspace(string) {
    return newString = string.slice(0, -1);
};
function clearDisplay(displayContent) {
    return displayContent = '';
};
function checkLastInput(displayContent) {
 let lastInput = displayContent.slice(-1);

 if(lastInput === '+' || lastInput === '-' || lastInput === '*' || lastInput === '') {
     return true;
 } else{
     return false;
 }
}
function calculateDisplayContent(displayContent){
    let sum = eval(displayContent)
    return sum;
}