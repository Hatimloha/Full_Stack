// app.js
import { add, multiply } from './calculator.js';

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const result = document.getElementById("result");

window.handleAdd = function () {
    const a = Number(input1.value.trim());
    const b = Number(input2.value.trim());

    if (isNaN(a) || isNaN(b)) {
        result.textContent = "Please enter valid numbers";
        result.style.color = "red";
        return;
    }

    result.textContent = `${a} + ${b} = ${add(a, b)}`;
    result.style.color = "lightgreen";
}

window.handleMultiply = function () {
    const a = Number(input1.value.trim());
    const b = Number(input2.value.trim());

    if (isNaN(a) || isNaN(b)) {
        result.textContent = "Please enter valid numbers";
        result.style.color = "red";
        return;
    }

    result.textContent = `${a} × ${b} = ${multiply(a, b)}`;
    result.style.color = "lightgreen";
}
