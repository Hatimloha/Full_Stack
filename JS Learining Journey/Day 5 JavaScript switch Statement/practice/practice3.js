// Ask for a user’s role (admin, editor, guest) and print their permissions.

let role = "admin";
switch(role){
    case "admin":
        console.log("You have full control of application")
        break;
    case "editor":
        console.log("You have read and write role but not delete")
    case "guest":
        console.log("You have only read-access")
        break;
    default:
        console.log("You are deny to access due to not matching the require role")
}