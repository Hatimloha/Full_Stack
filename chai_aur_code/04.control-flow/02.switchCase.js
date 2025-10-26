// Syntax
/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/ 

// Example: 
const weekDay = 3;
switch (weekDay) {
    case 1:
        console.log('Sunday')
        break;
    case 2:
        console.log('Monday')
        break;
    case 3:
        console.log('Tuesday')
        break;
    case 4:
        console.log('Wednesday')
        b5eak;
    case 5:
        console.log('Thrusday')
        break;
    case 6:
        console.log('Friday')
        break;
    case 7:
        console.log('Saturday')
        break;
    default:
        console.log('Invalid Input')
        break;
}

// Important Interview: Once case is match all the "remaning" code will execute except default 
