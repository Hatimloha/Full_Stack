// Create an object user with properties username, email, and a method login() that logs "user is logged in".

var user_info = {
    name: "ravi",
    email: "rav345@gmail.com",
    login(username, email){
        if(username.toLowerCase() === this.name && email === this.email){
            console.log("Login Success")
        }
        else{
            console.log("Invalid details")
        };
    }
};

// Try correct login
user_info.login("Ravi", "rav345@gmail.com");  // ✅ Login Success

// Try wrong login
user_info.login("Ali", "test@gmail.com");     // ❌ Invalid details