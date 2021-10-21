//Присвоим начальные значения

let firstNumber = 0;
let currentNumber = 0;
let calculatedNumber = 0;
let remainder = 0;
let calculateMethod = "null";
let visualDisplay = document.getElementById("input");

//Объявим операции

let addition = () => {
  calculateMethod = "addition";
  firstNumber = currentNumber;
  currentNumber = 0;
};

let subtract = () => {
  calculateMethod = "subtract";
  let remainder = currentNumber;
  firstNumber = currentNumber;
  currentNumber = 0;
};

let multiply = () => {
  calculateMethod = "multiply";
  let remainder = currentNumber;
  firstNumber = currentNumber;
  currentNumber = 0;
};

let divide = () => {
  calculateMethod = "divide";
  let remainder = currentNumber;
  firstNumber = currentNumber;
  currentNumber = 0;
};

//Зададим логику вычисления

let calculation = () => {
  if (calculateMethod === "addition") {
    calculatedNumber = currentNumber + firstNumber;
    visualDisplay.innerHTML = calculatedNumber.toString();
    }
    else if (calculateMethod === "subtract") {
    calculatedNumber = firstNumber - currentNumber;
    visualDisplay.innerHTML = calculatedNumber.toString();
    }
    else if (calculateMethod === "multiply") {
    calculatedNumber = currentNumber * firstNumber;
    visualDisplay.innerHTML = calculatedNumber.toString();
    }
    else if (calculateMethod === "divide") {

      //Проверка деления на 0

      if (currentNumber === 0) { 
          visualDisplay.innerHTML = "Error";
          calculatedNumber = 0;
          currentNumber = 0;
          firstNumber = 0;
      }

    else {
      calculatedNumber = firstNumber / currentNumber;
      visualDisplay.innerHTML = calculatedNumber.toString();
      }
    }
  currentNumber = calculatedNumber;
  firstNumber = 0;
};

//Нажатие на клавишу С

let clearCalc = () => {
  currentNumber = 0;
  firstNumber = 0;
  visualDisplay.innerHTML = currentNumber.toString();
};

//Ввод каждого последующего разряда

let currenter = (curNumber) => {
  if (currentNumber < 1000000000000000 && currentNumber > 0) {
    currentNumber *= 10;
  }
  currentNumber += curNumber;
  visualDisplay.innerHTML = currentNumber.toString();
};