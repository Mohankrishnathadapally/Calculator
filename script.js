let result = document.getElementById("result");
let memory = 0;
let operation = "";

function digit(d) {
  if (result.value == "0" && d != ".") {
    result.value = d;
  } else {
    result.value += d;
  }
}

function clearDisplay() {
  result.value = "0";
}

function changeSign() {
  result.value = -1 * parseFloat(result.value);
}

function back() {
  result.value = result.value.slice(0, -1);
  if (result.value == "") {
    result.value = "0";
  }
}

function equal() {
  switch (operation) {
    case "+":
      result.value = memory + parseFloat(result.value);
      break;
    case "-":
      result.value = memory - parseFloat(result.value);
      break;
    case "*":
      result.value = memory * parseFloat(result.value);
      break;
    case "/":
      result.value = memory / parseFloat(result.value);
      break;
  }
  memory = 0;
  operation = "";
}

function operation(op) {
  memory = parseFloat(result.value);
  operation = op;
  result.value = "0";
}