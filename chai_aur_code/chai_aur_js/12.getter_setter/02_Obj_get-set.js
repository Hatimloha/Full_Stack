// Imp: Basically get and set is helping to overwrite the property will get and set from memory 

const user = {
    _email: 'h@hc.com',
    _pass: 'abc',    
    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        return this._email = value
    }
}
const tea = Object.create(user)
console.log(tea.email)