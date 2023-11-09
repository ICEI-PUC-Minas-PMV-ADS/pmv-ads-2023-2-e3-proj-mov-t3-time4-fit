import React from "react";
import {StatusBar} from "react-native";

import {NavigationContainer} from '@react-navigation/native'
import Routes from "./routes/Routes";
import AuthContextProvider from "./store/auth-context";

export default function App() {
    return (
        <>
            <StatusBar backgroundColor="#38A69D" barStyle="light-content"/>
            <AuthContextProvider>
                <NavigationContainer>
                    <Routes/>
                </NavigationContainer>
            </AuthContextProvider>
        </>
    );
}
