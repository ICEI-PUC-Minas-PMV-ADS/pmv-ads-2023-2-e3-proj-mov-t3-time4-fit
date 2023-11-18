import {createContext, useState} from "react";

export const UsuarioContext = createContext({
    usuario: {},
    fetchUsuario: (usuarioData) => {},
    updateUsuario: (usuarioData) => {},
    clearUsuario: () => {},
});

function UsuarioContextProvider({children}) {
    const [usuario, setUsuario] = useState({})

    function fetchUsuario(usuarioData) {
        setUsuario(usuarioData);
    }

    function updateUsuario(usuarioData) {
        setUsuario({...usuario, ...usuarioData});
    }

    function clearUsuario() {
        setUsuario({});
    }

    const value = {
        usuario: usuario,
        fetchUsuario: fetchUsuario,
        updateUsuario: updateUsuario,
        clearUsuario: clearUsuario,
    };

    return (
        <UsuarioContext.Provider value={value}>
            {children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioContextProvider;