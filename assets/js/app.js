let board = document.querySelector("#board");
let cell = document.querySelectorAll(".cell").value;
let result = document.querySelector("#result");
let turn = 0;
let font = 3;
let resultshow = 0;
let resultshow2 = 0;
let resultReal = 0;
let calc = "0";
let calc2 = "0";
let calcPars = 0;
let calcPars2 = 0;
let valueElem;
let sign = "";
let reset = document.querySelector('#AC')
let onclick = document.querySelector('#test');
let orange = 'background-color: orange;'

function Calculator(elem) {
  valueElem = elem.value;
  if (valueElem == "add") {
    Addition();
    onclick.removeAttribute('id', 'color')
    onclick = elem
    onclick.setAttribute('id', 'color')
  } else if (valueElem == "=") {
    Equal();
  } else if (valueElem == "+/-") {
    MoreOrLess();
  } else if (valueElem == "%") {
    PerCent();
  } else if (valueElem == "substarct") {
    onclick.removeAttribute('id', 'color')
    onclick = elem
    onclick.setAttribute('id', 'color')
    Substraction();
  } else if (valueElem == "x") {
    onclick.removeAttribute('id', 'color')
    onclick = elem
    onclick.setAttribute('id', 'color')
    Multiplication();
  } else if (valueElem == "÷") {
    onclick.removeAttribute('id', 'color')
    onclick = elem
    onclick.setAttribute('id', 'color')
    Division();
  } else if (valueElem == "AC") {
    Erase();
  } else if (valueElem == "C") {
    EraseCalc();
  }else {
        onclick.removeAttribute('id', 'color')
        TakeNumbers();
        if (calc != "0" || calc2 != "0") {
            reset.setAttribute('value', 'C')
            reset.innerHTML = 'C'
        }else{
            reset.setAttribute('value', 'AC')
            reset.innerHTML = 'AC'
        }
  }
}

function TakeNumbers() {
  if (
    valueElem == "AC" ||
    valueElem == "÷" ||
    valueElem == "x" ||
    valueElem == "substarct" ||
    valueElem == "add" ||
    valueElem == "="
  ) {
    turn++;
  } else {
    if (turn % 2) {
        if (sign == "") {
          if (calc[0] == "0" && valueElem != '.') {
            reduce()
            resultReal = 0
            calc = valueElem;
            result.innerHTML = calc;
          }else{
            reduce()
            resultReal = 0
            calc = calc + valueElem;
            result.innerHTML = calc;
          }
        }else{
          if (calc[0] == "0" && valueElem != '.') {
            reduce()
            calc = valueElem;
            result.innerHTML = calc;
          }else{
            reduce()
            calc = calc + valueElem;
            result.innerHTML = calc;
          }

        }
    } else {
        if (sign == "") {
          if (calc2[0] == "0" && valueElem != '.') {
            console.log("A");
            resultReal = 0
            calc2 = valueElem;
            result.innerHTML = calc2;
          }else{
            resultReal = 0
            calc2 = calc2 + valueElem;
            result.innerHTML = calc2;
          }
        }else{
          if (calc2[0] == "0" && valueElem != '.') {
            calc2 = valueElem;
            result.innerHTML = calc2;
          }else{
            calc2 = calc2 + valueElem;
            result.innerHTML = calc2;
          }
        }
    }
  }
  calcPars = parseFloat(calc);
  calcPars2 = parseFloat(calc2);
}

function Addition() {
  if (turn % 2) {
    if (sign == "substarct") {
      Substraction();
    }else if (sign == "x") {
      Multiplication();
    } else if (sign == "÷") {
      Division();
    } else {
      resultshow = calcPars2 + calcPars;
      resultReal = resultReal + resultshow;
    }
  } else {
    if (sign == "substarct") {
      Substraction();
    }else if (sign == "x") {
      Multiplication();
    } else if (sign == "÷") {
      Division();
    } else {
      resultshow2 = calcPars2 + calcPars;
      resultReal = resultReal + resultshow2;
    }
  }
  calcPars = 0;
  calcPars2 = 0;
  calc = "0";
  resultshow = 0;
  calc2 = "0";
  resultshow2 = 0;
  result.innerHTML = parseFloat(resultReal);
  sign = valueElem;
}

function Substraction() {
  if (turn % 2) {
    if (resultReal == 0) {
      if (sign == "add") {
        Addition();
      }else if (sign == "x") {
        Multiplication();
      } else if (sign == "÷") {
        Division();
      } else {
        resultshow = calcPars2 + calcPars;
        resultReal = resultshow - resultReal;
      }
    } else {
      if (sign == "add") {
        Addition();
      }else if (sign == "x") {
        Multiplication();
      } else if (sign == "÷") {
        Division();
      } else {
        resultshow = calcPars2 + calcPars;
        resultReal = resultReal - resultshow;
      }
    }
  } else {
    if (resultReal == 0) {
      if (sign == "add") {
        Addition();
      } else if (sign == "x") {
        Multiplication();
      } else if (sign == "÷") {
        Division();
      } else {
        resultshow2 = calcPars2 + calcPars;
        resultReal = resultshow2 - resultReal;
      }
    } else {
      if (sign == "add") {
        Addition();
      }else if (sign == "x") {
        Multiplication();
      } else if (sign == "÷") {
        Division();
      } else {
        resultshow2 = calcPars2 + calcPars;
        resultReal = resultReal - resultshow2;
      }
    }
  }
  calcPars = 0;
  calcPars2 = 0;
  calc = "0";
  calc2 = "0";
  resultshow = 0;
  resultshow2 = 0;
  result.innerHTML = parseFloat(resultReal);
  sign = valueElem;
}

function Multiplication() {
  if (turn % 2) {
    if (resultReal == 0) {
      if (sign == "add") {
        Addition();
      } else if (sign == "substarct") {
        Substraction();
      } else if (sign == "÷") {
        Division();
      } else {
        resultReal = calcPars;
      }
    } else if (sign == "") {
        calcPars = resultReal
    } else {
      if (sign == "add") {
        Addition();
      }else if (sign == "substarct") {
        Substraction();
      } else if (sign == "÷") {
        Division();
      } else {
        resultReal = resultReal * calcPars;
      }
    }
  } else {
    if (resultReal == 0) {
      if (sign == "add") {
        Addition();
      }else if (sign == "substarct") {
        Substraction();
      } else if (sign == "÷") {
        Division();
      } else {
        resultReal = calcPars2;
      }
    } else if (sign == "") {
        calcPars2 = resultReal
    } else {
      if (sign == "add") {
        Addition();
      } else if (sign == "substarct") {
        Substraction();
      } else if (sign == "÷") {
        Division();
      } else {
        resultReal = resultReal * calcPars2;
      }
    }
  }
  calcPars = 0;
  calcPars2 = 0;
  calc2 = "0";
  resultshow2 = 0;
  calc = "0";
  resultshow = 0;
  result.innerHTML = parseFloat(resultReal);
  sign = valueElem;
}

function Division() {
  if (turn % 2) {
    if (resultReal == 0) {
      if (sign == "add") {
        Addition();
      } else if (sign == "substarct") {
        Substraction();
      } else if (sign == "x") {
        Multiplication();
      }else{
        resultReal = calcPars;
      }
    } else if (sign == "") {
        calcPars = resultReal
    } else {
      if (sign == "add") {
        Addition();
      } else if (sign == "substarct") {
        Substraction();
      } else if (sign == "x") {
        Multiplication();
      }else{
      resultReal = resultReal / calcPars;
      }
    }
  } else {
    if (resultReal == 0) {
      if (sign == "add") {
        Addition();
      }  else if (sign == "substarct") {
        Substraction();
      } else if (sign == "x") {
        Multiplication();
      }else{
        resultReal = calcPars2;
      }
    } else if (sign == "") {
        calcPars2 = resultReal
    } else {
      if (sign == "add") {
        Addition();
      } else if (sign == "substarct") {
        Substraction();
      } else if (sign == "x") {
        Multiplication();
      }else{
        resultReal = resultReal / calcPars2;
      }
    }
  }
  calcPars = 0;
  calcPars2 = 0;
  calc2 = "0";
  resultshow2 = 0;
  calc = "0";
  resultshow = 0;
  result.innerHTML = parseFloat(resultReal);
  sign = valueElem;
}

function MoreOrLess() {
  if (turn % 2) {
    if (resultReal == 0) {
        resultReal = calcPars - (calcPars * 2);
  result.innerHTML = parseFloat(resultReal);
      
    }else if (calcPars == 0) {
      resultReal =  resultReal - (resultReal * 2);
  result.innerHTML = parseFloat(resultReal);
    
  }else {
    calcPars = calcPars - (calcPars * 2);
  result.innerHTML = parseFloat(calcPars);
    }
  } else {
    if (resultReal == 0) {
        resultReal = calcPars2 - (calcPars2 * 2);
  result.innerHTML = parseFloat(resultReal);
      }else if (calcPars2 == 0) {
      resultReal =  resultReal - (resultReal * 2);
  result.innerHTML = parseFloat(resultReal);

    
  }else {
    calcPars2 = calcPars2 - (calcPars2 * 2);
    result.innerHTML = parseFloat(calcPars2);

    }
  }
}

function PerCent() {
  if (turn % 2) {
    if (resultReal == 0) {
        resultReal = calcPars / 100;
  result.innerHTML = parseFloat(resultReal);
      
    }else if (calcPars == 0) {
      resultReal =  resultReal / 100;
  result.innerHTML = parseFloat(resultReal);
    
  }else {
    calcPars = calcPars / 100;
  result.innerHTML = parseFloat(calcPars);
    }
  } else {
if (calcPars2 == 0) {
      resultReal =  resultReal / 100;
  result.innerHTML = parseFloat(calcPars2);
  }else {
    calcPars2 = calcPars2 / 100;
    result.innerHTML = parseFloat(calcPars2);
    }
  }
  calc2 = "0";
  resultshow2 = 0;
  calc = "0";
  resultshow = 0;
}

function Equal() {
  if (sign == "add") {
    resultReal = resultReal + (calcPars + calcPars2);
  } else if (sign == "substarct") {
    resultReal = resultReal - (calcPars + calcPars2);
  } else if (sign == "x") {
    resultReal = resultReal * (calcPars + calcPars2);
  } else if (sign == "÷") {
    resultReal = resultReal / (calcPars + calcPars2);
  } else if (sign == "÷") {
    resultReal = resultReal / (calcPars + calcPars2);
  }
  sign = "";
  calcPars = 0;
  calcPars2 = 0;
  calc = "0";
  calc2 = "0";
  resultshow = 0;
  resultshow2 = 0;
  result.innerHTML = parseFloat(resultReal);
}

function Erase() {
    onclick.removeAttribute('id', 'color')
    sign = "",
  calcPars = 0;
  calcPars2 = 0;
  calc = "0";
  calc2 = "0";
  resultshow = 0;
  resultshow2 = 0;
  resultReal = 0;
  result.innerHTML = "";
}

function EraseCalc() {
  calcPars = 0;
  calcPars2 = 0;
  calc = "0";
  calc2 = "0";
  resultshow = 0;
  resultshow2 = 0;
  result.innerHTML = "";
  reset.setAttribute('value', 'AC')
  reset.innerHTML = 'AC'
}

function reduce() {
if (result.length == 9) {
  result.setAttribute('style', 'font-size: 1px;')
}else{
}
}
