import axios from "axios";

const BACKEND_URL = "https://eatsmart.azurewebsites.net/comidas";

export async function fetchComidas(comida) {
    const {data: response} = await axios.get(BACKEND_URL + `?nome_like=${comida}&_sort=nome`);
    return response;
}