// Create a simple calculator using switch that handles +, -, *, /.

let a = 10;
let b = 5;
let operator = "+";

switch(operator){
    case "+":
        console.log("Additon:", a + b);
        break;
    case "-":
        console.log("Sub: ", a - b);
        break;
    case "*":
        console.log("Multi: ", a * b);
        break;
    case "/":
        console.log("Divide: ", a / b)
        break;
    default:
        console.log("Choose from this option: +, -, *, /")
}