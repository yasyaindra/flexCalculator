// const namaDepan = prompt("Siapa nama depanmu?")
// const namaBelakang = prompt("Siapa nama belakangmu?")
// const bahasa = prompt("bisa bahasa apa?")

// const user = {
//     name: {
//         first:namaDepan,
//         last:namaBelakang
//     },
//     bahasa: bahasa
// }

// if(user.bahasa==='inggris') {
//     alert('nice to meet you '+(user.name.first='NoName')+" "+(user.name.last='NoName'));
// } else {
//     alert('selamat pagi '+(user.name.first='NoName')+" "+(user.name.last='NoName'));
// }

const calculator = {
    displayNumber : '0',
    operator:null,
    firstNumber:null,
    waitingForSecondNumber:false
}

function updateDisplay() {
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalculator() {
    calculator.displayNumber = '0'
    calculator.operator = null
    calculator.firstNumber = null
    calculator.waitingForSecondNumber = false
}

function inputDigit(digit) {
    if(calculator.waitingForSecondNumber && calculator.firstNumber === calculator.displayNumber) {
        calculator.displayNumber = digit
    } else {
        if(calculator.displayNumber == 0) {
            calculator.displayNumber = digit
        } else {
            calculator.displayNumber += digit
        }
    }
}

function inverseNumber() {
    if(calculator.displayNumber ==='0') {
        return;
    }
    calculator.displayNumber = calculator.displayNumber * -1
}

function handleOperator(operator) {
    if(!calculator.waitingForSecondNumber) {
        calculator.operator = operator
        calculator.waitingForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;
    } else {
        alert('Anda sudah memasukkan operator')
    }
}

function performCalculation() {
    if(calculator.firstNumber == null || calculator.operator == null) {
        alert("Anda belum menetapkan operator");
        return
    }
    let result = 0
    if(calculator.operator === "+"){
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
    }

    const history = {
        firstNumber:calculator.firstNumber,
        secondNumber:calculator.displayNumber,
        operator:calculator.operator,
        result:result
    }

    putHistory(history)
    calculator.displayNumber = result;
    renderHistory();
}
const buttons = document.querySelectorAll(".button")
for(let button of buttons) {
    button.addEventListener('click',function(event){
        const target = event.target

        if(target.classList.contains('clear')){
            clearCalculator();
            updateDisplay();
            return;
        }

        if(target.classList.contains('negative')){
            inverseNumber()
            updateDisplay();
            return
        }

        if(target.classList.contains('equals')){
            performCalculation()
            updateDisplay();
            return
        }

        if(target.classList.contains('operator')){
            handleOperator(target.innerText)
            updateDisplay();
            return
        }
        
        inputDigit(target.innerText)
        updateDisplay()
    })
}

if(typeof(Storage) !== "undefined") {

} else {
    
}

