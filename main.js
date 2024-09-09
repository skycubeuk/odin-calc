let left
let right
let operator

function add(l, r) {
    return l + r
}
function subtract(l, r) {
    return l - r
}
function multiply(l, r) {
    return l * r
}
function divide(l, r) {
    return l / r
}


function operate(operator, left, right) {
    switch (operator) {
        case "+":
            return add(left, right)
        case "-":
            return subtract(left, right)
        case "*":
            return multiply(left, right)
        case "/":
            return divide(left, right)


        default:
            break;
    }
}