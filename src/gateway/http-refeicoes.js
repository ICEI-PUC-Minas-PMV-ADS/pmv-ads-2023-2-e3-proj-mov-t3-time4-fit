import axios from "axios";

const BACKEND_URL = "https://eatsmart.azurewebsites.net/refeicoes";

export async function fetchRefeicoes(idUsuario) {
    const {data: response} = await axios.get(BACKEND_URL + `?idUsuario=${idUsuario}`);
    return response;
}