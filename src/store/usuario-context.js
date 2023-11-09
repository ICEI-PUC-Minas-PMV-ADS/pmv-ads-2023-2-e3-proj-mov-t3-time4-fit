import {createContext, useState} from "react";

export const UsuarioContext = createContext({
    usuario: {},
    fetchUsuario: (usuarioData) => {},
    updateUsuario: (usuarioData) => {},
});

function UsuarioContextProvider({children}) {
    const [usuario, setUsuario] = useState({})

    function fetchUsuario(usuarioData) {
        setUsuario(usuarioData);
    }

    function updateUsuario(usuarioData) {
        setUsuario({...usuario, ...usuarioData});
    }

    const value = {
        usuario: usuario,
        fetchUsuario: fetchUsuario,
        updateUsuario: updateUsuario,
    };

    return (
        <UsuarioContext.Provider value={value}>
            {children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioContextProvider;