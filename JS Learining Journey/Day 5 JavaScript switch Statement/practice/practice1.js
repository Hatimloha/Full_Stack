// Use switch to print the day of the week from a number (e.g. 1 = Monday, 2 = Tuesday...).

let day = 2;
switch(day){
    case 1:
        console.log("Today is: Monday");
        break;
    case 2:
        console.log("Today is: Tuesday");
        break;
    case 3:
        console.log("Today is: Wednesday");
        break;
    case 4:
        console.log("Today is: Thrusday");
        break;
    case 5:
        console.log("Today is: Firday");
        break;
    case 6:
        console.log("Today is: Saturday");
        break;
    case 7:
        console.log("Today is: Sunday");
        break;
    default:
        console.log("Input should be betweeb 1 - 7")
}