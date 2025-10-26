// static: It is used to stop the access of property to all the object 

class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){
        return `123`
    }

}

const userInfo = new User('hatim');
console.log(userInfo.createId())