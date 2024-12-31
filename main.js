const display = document.getElementById("display");
function appendtoDisplay(input) {
  display.value += input;
}
function clearDisplay() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
    if (display.value === `undefined` || display.value === `Infinity`) {
      throw new Error(`Syntax error`);
    }
  } catch (Error) {
    display.value = `Syntax error`;
  }
}
