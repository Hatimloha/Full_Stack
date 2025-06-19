// Create a switch block that checks a fruit name and logs:
// "Red" for Apple
// "Yellow" for Banana
// "Green" for Kiwi
// "Unknown color" for others

let fruit_name = "Apple";
switch(fruit_name){
    case "Red":
        console.log("Apple");
        break;
    case "Yellow":
        console.log("Banana");
        break;
    case "Green":
        console.log("Kiwi")
        break;
    default:
        console.log("The fruit color is not listed in list: ",fruit_name)
}