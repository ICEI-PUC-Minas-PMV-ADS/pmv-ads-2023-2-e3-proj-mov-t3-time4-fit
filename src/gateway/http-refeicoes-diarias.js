import axios from "axios";

const BACKEND_URL = "https://eatsmart.azurewebsites.net/refeicoes-diarias";

export async function storeRefeicaoDiaria(refeicaoDiariaData) {
    const {data: response} = await axios.post(BACKEND_URL, refeicaoDiariaData);
    //return the id of the stored expense
    return response.id;
}

export async function fetchRefeicoesDiarias(idUsuario, date) {
    const {data: response} = await axios.get(BACKEND_URL + `?idUsuario=${idUsuario}&data=${date}`);
    return response;
}

export async function fetchRefeicoesDiariasPorRefeicao(idRefeicao) {
    const {data: response} = await axios.get(BACKEND_URL + `?idRefeicao=${idRefeicao}`);
    return response;
}

export function deleteRefeicaoDiaria(id) {
    return axios.delete(BACKEND_URL + `/${id}`);
}