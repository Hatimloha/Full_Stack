// Use switch to return traffic signal messages (red = stop, green = go, yellow = wait).

let signal_status = "yellow";
switch(signal_status){
    case "red":
        console.log("Stop")
        break;
    case "yellow":
        console.log("Start your vehicle");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Continue flow: Yellow light blink")
}
