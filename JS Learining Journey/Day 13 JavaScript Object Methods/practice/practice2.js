// Add a method updateEmail(newEmail) to the user object that changes the email.

var user_info = {
  name: "ravi",
  email: "rav345@gmail.com",

  login(username, email) {
    if (username.toLowerCase() === this.name && email === this.email) {
      console.log("Login Success");
    } else {
      console.log("Invalid details");
    }
  },

  updateEmail(newEmail) {
    this.email = newEmail;
    console.log(`Email updated to: ${this.email}`);
  }
};

// ✅ Before update
console.log("Old Email:", user_info.email);

// 🔄 Update email
user_info.updateEmail("ravi.newmail@example.com");

// ✅ After update
console.log("New Email:", user_info.email);
