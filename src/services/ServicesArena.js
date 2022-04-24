import axios from "axios";

export function GetAllArenas(){
    return axios({
        method: 'GET',
        url: "https://arenation-back.herokuapp.com/Controllers/Arenas/getAllArenas.php"
    });
}

export function GetOneArena(data){
    return axios({
        method: 'POST',
        url: "https://arenation-back.herokuapp.com/Controllers/Arenas/getOneArena.php",
        data: JSON.stringify(data)
    });
}