import {createContext, useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: (token) => {},
    logout: () => {},
});

function AuthContextProvider({children}) {
    //se quiser salvar mais dados do usuário, pode usar o objeto abaixo
    const [authToken, setAuthToken] = useState('1')

    function authenticate(token) {
        setAuthToken(token);
        AsyncStorage.setItem('token', token);
    }

    function logout() {
        setAuthToken(null);
        AsyncStorage.removeItem('token');
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;