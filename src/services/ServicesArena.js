import axios from "axios";

export function GetAllArenas(){
    return axios({
        method: 'GET',
        url: "http://127.0.0.1/ArenationBack/Controllers/Arenas/getAllArenas.php"
    });
}

export function GetOneArena(data){
    return axios({
        method: 'POST',
        url: "http://127.0.0.1/ArenationBack/Controllers/Arenas/getOneArena.php",
        data: JSON.stringify(data)
    });
}