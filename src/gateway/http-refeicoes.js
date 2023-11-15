import axios from "axios";

const BACKEND_URL = "https://eatsmart.azurewebsites.net/refeicoes";

export async function fetchRefeicoes(idUsuario) {
    const {data: response} = await axios.get(BACKEND_URL + `?idUsuario=${idUsuario}`);
    return response;
}

export async function storeRefeicao(refeicaoData) {
    const {data: response} = await axios.post(BACKEND_URL, refeicaoData);
    return response.id;
}

export function deleteRefeicao(id) {
    return axios.delete(BACKEND_URL + `/${id}`);
}

export function atualizarRefeicao(id, refeicaoData) {
    return axios.put(BACKEND_URL + `/${id}`, refeicaoData);
}