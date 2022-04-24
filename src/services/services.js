import axios from "axios";

export function ChangePassword(data){
    return axios({
        method: 'POST',
        url: "https://arenation-back.herokuapp.com/Controllers/changePassword.php",
        data: JSON.stringify(data)
    });
}

export function UpdateUser(data){
    return axios({
        method: 'POST',
        url: "https://arenation-back.herokuapp.com/Controllers/updateUser.php",
        data: JSON.stringify(data)
    });
}

export function RegisterAuth(data){
    return axios({
        method: 'POST',
        url: "https://arenation-back.herokuapp.com/Controllers/createUser.php",
        data: JSON.stringify(data)
    });
}

export function LoginAuth(data){
    return axios({
        method: 'POST',
        url: "https://arenation-back.herokuapp.com/Controllers/login.php",
        data: JSON.stringify(data)
    });
}

export function GetAllUsers(){
    return axios({
        method: 'GET',
        url: "https://arenation-back.herokuapp.com/Controllers/getAllUsers.php"
    });
}

export function GetOneUser(data){
    return axios({
        method: 'POST',
        url: "https://arenation-back.herokuapp.com/Controllers/getUser.php",
        data: JSON.stringify(data)
    });
}