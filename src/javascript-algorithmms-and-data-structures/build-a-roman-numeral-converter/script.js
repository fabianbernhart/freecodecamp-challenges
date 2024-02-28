function convertRomanNumerals(event) {
    let numberInput = document.getElementById('number').value
    let outputEl = document.getElementById('output')
    let validation = isInavlidText(numberInput)
    outputEl.innerHTML = validation ? validation : romanize(numberInput)
    event.preventDefault()
}

function isInavlidText(numberInput /*number*/) /* return: string, false */ {
    if (numberInput.length == 0) return 'Please enter a valid number'
    if (numberInput < 0)
        return 'Please enter a number greater than or equal to 1'
    if (numberInput > 3999)
        return 'Please enter a number less than or equal to 3999'

    return false
}

const lookup /*key: string, value: number*/ = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
}

function romanize(inputNumber /*number*/) /* return: string */ {
    let roman = ''
    for (let i of Object.keys(lookup)) {
        while (inputNumber >= lookup[i]) {
            roman += i
            inputNumber -= lookup[i]
        }
    }
    return roman
}
