let display = document.getElementById("display");
let history = document.getElementById("history");

document.querySelectorAll("button").forEach(btn => {btn.addEventListener("click", () => handleInput(btn.dataset.value));});

function handleInput(value) {
  if (value === "C") {
    display.value = "";
  } 
  else if (value === "DEL") {
    display.value = display.value.slice(0, -1);
  } 
  else if (value === "=") {
    calculate();
  } 
  else {
    display.value += value;
  }
}

function calculate() {
  try {
    let result = Function("return " + display.value)();
    history.innerText = display.value + " = " + result;
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) || "+-*/.%".includes(e.key)) {
    display.value += e.key;
  }
  else if (e.key === "Enter") {
    calculate();
  }
  else if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }
});