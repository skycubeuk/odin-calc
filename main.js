let sum = {
    left: "",
    right: "",
    operator: ""
}

let divzeroerror = "💣💣💣 /0 ERROR 💣💣💣"


btn = document.querySelectorAll(".cbtn")

function add(l, r) {
    return Number(l) + Number(r)
}
function subtract(l, r) {
    return Number(l) - Number(r)
}
function multiply(l, r) {
    return Number(l) * Number(r)
}
function divide(l, r) {
    if (sum.right == "0") {
        return divzeroerror
    } else {
        return Number(l) / Number(r)
    }
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


function isDigit(char) {
    return /[0-9]/.test(char)
}


function isOper(char) {
    return (char == "+" || char == "-" || char == "*" || char == "/") ? true : false
}



btn.forEach((e) => {
    e.addEventListener("click", (ee) => {
        if (sum.left == divzeroerror || ee.target.textContent == "C") {
            sum.operator = ""
            sum.right = ""
            sum.left = ""
        }
        if (sum.operator === "" && isDigit(ee.target.textContent)) {
            sum.left += ee.target.textContent
        }
        if (sum.operator === "" && isOper(ee.target.textContent)) {
            if (sum.left) {
                sum.operator = ee.target.textContent
            }
        }
        if (ee.target.textContent == ".")
            if (sum.operator == "" && sum.left.length > 0 && !sum.left.includes(".")) {
                sum.left += ee.target.textContent
            } else if (sum.operator != "" && sum.right.length > 0 && !sum.right.includes(".")) {
                sum.right += ee.target.textContent
            }

        if (sum.operator != "" && isDigit(ee.target.textContent)) {
            sum.right += ee.target.textContent
        }
        if (ee.target.textContent == "=" && sum.left && sum.right && sum.operator) {
            res = operate(sum.operator, sum.left, sum.right)
            sum.operator = ""
            sum.right = ""
            sum.left = res.toString()
            console.log(res)
        }

        if (isOper(ee.target.textContent) && sum.left && sum.right && sum.operator) {
            res = operate(sum.operator, sum.left, sum.right)
            sum.operator = ee.target.textContent
            sum.right = ""
            sum.left = res.toString()
            console.log(res)
        }
        upddatedispaly()
    })
});

function upddatedispaly() {
    dotbnt = document.querySelector(".dotbtn")
    if ((sum.left.includes(".") && sum.operator == "") || (sum.right.includes(".") && sum.operator != "")) {

        dotbnt.classList.add("disbutton")
    }else {
        dotbnt.classList.remove("disbutton")
    }

    dis = document.querySelector(".dtest")
    dis.textContent = sum.left + " " + sum.operator + " " + sum.right
    console.log(sum)
}