// Write logic to print "Access Granted" if age >= 18 and hasID is true.

function access(){
    let age = 17;
    let hasID = true;

    if(age >= 18 && hasID == true){
        console.log("You are eligible for entry")
    }
    else{
        console.log("You are not eligible for entry")
    }
}
access()