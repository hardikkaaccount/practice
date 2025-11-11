class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}Hardik`
    }

    set password(value){
        this._password = value
    }
}

const Hardik = new User("h@Hardik.ai", "abc")
console.log(Hardik.email);