import axios from "axios";

export function RegisterAuth(data){
    return axios({
        method: 'POST',
        url: "http://127.0.0.1/ArenationBack/Controllers/createUser.php",
        data: JSON.stringify(data)
    });
}

export function LoginAuth(data){
    return axios({
        method: 'POST',
        url: "http://127.0.0.1/ArenationBack/Controllers/login.php",
        data: JSON.stringify(data)
    });
}

export function GetAllUsers(){
    return axios({
        method: 'GET',
        url: "http://127.0.0.1/ArenationBack/Controllers/getAllUsers.php"
    });
}

export function GetOneUser(data){
    console.log("datos", data)
    return axios({
        method: 'POST',
        url: "http://127.0.0.1/ArenationBack/Controllers/getUser.php",
        data: JSON.stringify(data)
    });
}