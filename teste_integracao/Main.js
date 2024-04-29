//import AuthService from "./AuthService";
//import UserDataBase from "./UserDataBase";

const UserDataBase = require("./UserDataBase")

let banco = new UserDataBase();
banco.addUser("João", 123)
banco.addUser("João", 123)
banco.addUser("João", 123)
banco.listUsers()
console.log(banco.getUserPassword('João')
)