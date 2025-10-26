// How get and set define priviously in JS (old ninja technique):
function User(email, pass){
    this._email = email;
    this._pass = pass

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },

        set: function(value){
            this._email = value
        }
    })
}

const chai = new User('xyz@gmail.com', '123')
console.log(chai.email)