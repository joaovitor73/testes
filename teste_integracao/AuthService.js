import UserDataBase from "./UserDataBase";

class AuthService{
    database;
    constructor(database){
        this.database = database;
        this.loggedInUser = null;
    }

    login(username, password){
        const passwordUser = this.database.getUserPassword(username);
        if(passwordUser){
            if(password === password){
                this.loggedIn = username;
                return true;
            }
        }
        return false;
    }


    isLoggedIn(){
        return this.loggedInUser ? null : this.loggedInUser;
    }

    logout(){
        this.loggedInUser = null;
    }
}

export default AuthService;