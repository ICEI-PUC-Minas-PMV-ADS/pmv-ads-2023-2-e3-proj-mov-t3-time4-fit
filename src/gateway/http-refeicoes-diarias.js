import axios from "axios";

const BACKEND_URL = "https://eatsmart.azurewebsites.net/refeicoes-diarias";

export async function fetchRefeicoesDiarias(idUsuario, date) {
    const {data: response} = await axios.get(BACKEND_URL + `?idUsuario=${idUsuario}&data=${date}`);
    return response;
}