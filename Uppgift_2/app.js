let display = document.querySelector(".display");
let deleteBtn = document.querySelector("#delete");
let addBtn = document.querySelector("#add");
let subtractBtn = document.querySelector("#subtract");
let equalsBtn = document.querySelector("#equals");
let multiplyBtn = document.querySelector("#multiply");
let resetBtn = document.querySelector("#reset");
let numbersBtn = document.querySelectorAll("#numbers");

let lastInputOperand = false;

deleteBtn.addEventListener("click", (event) => {
  display.textContent = backspace(display.textContent);
});
addBtn.addEventListener("click", (event) => {
  lastInputOperand = checkLastInput(display.textContent);
  if (lastInputOperand) {
  } else if (!lastInputOperand) {
    display.textContent += addBtn.innerText;
  }
});
subtractBtn.addEventListener("click", (event) => {
  lastInputOperand = checkLastInput(display.textContent);
  if (lastInputOperand) {
  } else if (!lastInputOperand) {
    display.textContent += subtractBtn.innerText;
  }
});
multiplyBtn.addEventListener("click", (event) => {
  lastInputOperand = checkLastInput(display.textContent);
  if (!checkDisplayEmpty(display.textContent)) {
    if (lastInputOperand) {
    } else if (!lastInputOperand) {
      display.textContent += multiplyBtn.innerText;
    }
  }
});
equalsBtn.addEventListener("click", (event) => {
  if (!checkDisplayEmpty(display.textContent)) {
    let sum = calculateDisplayContent(display.textContent);

    let ulList = document.querySelector(".resultsList");

    let listItem = document.createElement("li");
    let importBtn = document.createElement("button");
    let removeBtn = document.createElement("button");

    listItem.textContent = display.textContent + "=" + sum;
    importBtn.textContent = "import";
    importBtn.className = "resultButtons";
    removeBtn.textContent = "x";
    removeBtn.className = "resultButtons";

    ulList.append(listItem);
    listItem.append(importBtn, removeBtn);

    removeBtn.addEventListener("click", (event) => {
      listItem.remove();
    });
    importBtn.addEventListener("click", (event) => {
      display.textContent = listItem.textContent.split("=")[0];
    });

    display.textContent = clearDisplay(display.textContent);
    ulList.scrollTop = ulList.scrollHeight;
  }
});
for (let i = 0; i < numbersBtn.length; i++) {
  numbersBtn[i].addEventListener("click", (event) => {
    display.textContent += numbersBtn[i].innerText;
  });
}

resetBtn.addEventListener("click", (event) => {
  display.textContent = clearDisplay(display.textContent);
});

function backspace(string) {
  return (newString = string.slice(0, -1));
}
function clearDisplay(displayContent) {
  return (displayContent = "");
}
function checkLastInput(displayContent) {
  let lastInput = displayContent.slice(-1);

  if (lastInput === "+" || lastInput === "-" || lastInput === "*") {
    return true;
  } else {
    return false;
  }
}
function checkDisplayEmpty(displayContent) {
  if (displayContent.length < 1) {
    return true;
  } else {
    return false;
  }
}
function calculateDisplayContent(displayContent) {
  let sum = eval(displayContent);
  return sum;
}
