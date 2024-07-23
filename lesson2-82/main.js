function helloName(firstname){
    return `Hello ${firstname}`
}

console.log(helloName('Vlad'))

console.log('==================================')

function checkArray(arrayNumber){
    for(let i = 0; i < arrayNumber.length; i++){
        if(arrayNumber[i] > 10){
            console.log(arrayNumber[i])
        }
    }
}
const arrNumber = [1, 10, 5, 20, 9, 74]
checkArray(arrNumber)

console.log('==================================')


function calc(firstNumber, secondNumber, operation){
    if(operation === 'plus'){
        return firstNumber + secondNumber
    }else if (operation === 'minus'){
        return firstNumber - secondNumber
    }else if (operation === 'multiplication'){
        return firstNumber * secondNumber
    }else if (operation === 'division'){
        return firstNumber / secondNumber
    }
}

const result = calc(5, 3, 'division')
console.log(result);

console.log('==================================')
