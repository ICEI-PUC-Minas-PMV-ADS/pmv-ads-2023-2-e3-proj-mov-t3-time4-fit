import axios from "axios";

const BACKEND_URL = "https://eatsmart.azurewebsites.net/usuarios";

export async function storeUsuario(usuarioData) {
    const {data: response} = await axios.post(BACKEND_URL, usuarioData);
    //retorna o id do usuario cadastrado
    return response.id;
}

export async function fetchUsuario(id) {
    const {data: response} = await axios.get(BACKEND_URL + `/${id}`);
    return response;
}

export async function fetchUsuarios(nomeCompleto, id) {
    const {data: response} =
        await axios.get(BACKEND_URL +
            `?nomeCompleto_like=${nomeCompleto}&_sort=nomeCompleto&publico=true&id_ne=${id}`);
    return response;
}

export async function loginUsuario(email, senha) {
    const {data: response} = await axios.get(BACKEND_URL + `?email=${email}&senha=${senha}`);
    return response;
}

export async function checkUsuarioByEmail(email) {
    const {data: response} = await axios.get(BACKEND_URL + `?email=${email}`);
    return response;
}

export function updateUsuario(id, usuarioData) {
    return axios.put(BACKEND_URL + `/${id}`, usuarioData);
}

export function deleteUsuario(id) {
    return axios.delete(BACKEND_URL + `/${id}`);
}

