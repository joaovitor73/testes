class UserDataBase{
    users;
    constructor(){
        this.users = new Map();
    }

    addUser(username, password){
        this.users.set(username, password);
    }

    getUserPassword(username){
        return this.users.get(username);
    }

    listUsers(){
        this.users.forEach((key, value) => {
            console.log(key + ":" + value);
        });
    }

}

module.exports =  UserDataBase;