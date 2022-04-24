import axios from "axios";

export function ChangePassword(data){
    return axios({
        method: 'POST',
        url: "http://127.0.0.1/ArenationBack/Controllers/changePassword.php",
        data: JSON.stringify(data)
    });
}

export function UpdateUser(data){
    return axios({
        method: 'POST',
        url: "http://127.0.0.1/ArenationBack/Controllers/updateUser.php",
        data: JSON.stringify(data)
    });
}

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
    return axios({
        method: 'POST',
        url: "http://127.0.0.1/ArenationBack/Controllers/getUser.php",
        data: JSON.stringify(data)
    });
}