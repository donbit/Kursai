const numberArea = document.getElementById('numberArea');
const resultArea = document.getElementById('esamasuma');
let prevNumber;
let symbol;
let isEqualsClicked = false;

function addNumber(number){
    if (Number(numberArea.textContent) == 0){
        numberArea.textContent = number;
    } else {
        numberArea.textContent += number;
    }
}
function deleteNumber() {
    numberArea.textContent = numberArea.textContent.slice(0,-1);
    if (numberArea.textContent.length == 0){
        numberArea.textContent =0;
    }
}

function mathActions(symbolParam){
    if (prevNumber && !IsEqualsClicked){
        equals(false);
    }
    prevNumber=Number(numberArea.textContent);
    symbol =symbolParam;
    numberArea.textContent = 0;
    resultArea.textContent=prevNumber;
}

function equals(clicked) {
    IsEqualsClicked = clicked;
    if (symbol =='+'){
        numberArea.textContent = prevNumber + Number(numberArea.textContent);
    }
    if (symbol =='-'){
        numberArea.textContent = prevNumber - Number(numberArea.textContent);
    }
    if (symbol =='*'){
        numberArea.textContent = prevNumber * Number(numberArea.textContent);
    }
    if (symbol =='/'){
        numberArea.textContent = prevNumber / Number(numberArea.textContent);
    }
}

function getSquareRoot() {
    if(Number(numberArea.textContent)===0){
    numberArea.textContent = Math.sqrt(Number(resultArea.textContent));
} else {
    numberArea.textContent = Math.sqrt(Number(numberArea.textContent));
}
}





// const inputValue1 = document.getElementById('inputas');
// const a1 = 2;

// function sudedam() {
//     const inputValue = Number(inputValue1.value);
//     console.log(inputValue);
//     console.log(a1);
//     console.log(a1 + inputValue);
    
// }


// const inputValue = inputElement.valueAsNumber;
// const inputValueToNumber = Number(inputValue);
// let a, b, c;

// a = "Sveikas";
// b = "3";
// c = true;

// d = [a, b, c];

// console.log(a, b, c);
// console.log(d[0], d[1], d[2]);
// console.log(d);


// let x, y, z;
// x = 1;
// y = 2;
// z = 3;
// if (x + y > z) {

// } else if (z + x - y < z) {
//     console.log("Teisingai");

// } else if (z + x - y == 1) {

// } else {
//     console.log("nei viena salyga nera teisinga");
// }