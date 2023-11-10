import React from "react";
import {StatusBar} from "react-native";

import {NavigationContainer} from '@react-navigation/native'
import Routes from "./routes/Routes";
import AuthContextProvider from "./store/auth-context";
import RefeicaoContextProvider from "./store/refeicao-context";
import UsuarioContextProvider from "./store/usuario-context";
import RefeicoesDiariasContextProvider from "./store/refeicoes-diarias-context";

export default function App() {
    return (
        <>
            <StatusBar backgroundColor="#38A69D" barStyle="light-content"/>
            <RefeicaoContextProvider>
                <RefeicoesDiariasContextProvider>
                    <UsuarioContextProvider>
                        <AuthContextProvider>
                            <NavigationContainer>
                                <Routes/>
                            </NavigationContainer>
                        </AuthContextProvider>
                    </UsuarioContextProvider>
                </RefeicoesDiariasContextProvider>
            </RefeicaoContextProvider>
        </>
    );
}
