import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";

import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn";
import Register from "../screens/Register";
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";
import Explorar from "../screens/Explorar";
import ManageRefeicao from "../screens/ManageRefeicao";
import HomeCalendar from "../screens/HomeCalendar";
import SearchAlimento from "../screens/SearchAlimento";
import HomeVisitor from "../screens/HomeVisitor";
import {useCallback, useContext, useEffect, useState} from "react";
import {AuthContext} from "../store/auth-context";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator initialRouteName={"Home"}>
            <BottomTab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: "Diário",
                }}
            />
            <BottomTab.Screen
                name="Explorar"
                component={Explorar}
                options={{
                    headerShown: false,
                }}
            />
            <BottomTab.Screen
                name="Perfil"
                component={Perfil}
            />
        </BottomTab.Navigator>
    )
}

function AuthenticatedStack() {
    return (
        <Stack.Navigator initialRouteName={"BottomTabNavigator"}>
            <Stack.Screen
                name="BottomTabNavigator"
                component={BottomTabNavigator}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="ManageRefeicao"
                component={ManageRefeicao}
            />
            <Stack.Screen
                name="SearchAlimento"
                component={SearchAlimento}
            />
            <Stack.Screen
                name="HomeCalendar"
                component={HomeCalendar}
                options={{
                    headerShown: false,
                    presentation: "modal"
                }}
            />
            <Stack.Screen
                name={"HomeVisitor"}
                component={HomeVisitor}
            />
        </Stack.Navigator>
    );
}

function AuthStack() {
    return (
        <Stack.Navigator initialRouteName={"Welcome"}>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}

function Navigation() {
    const authCtx = useContext(AuthContext);

    return (
        <NavigationContainer>
            {!authCtx.isAuthenticated && <AuthStack/>}
            {authCtx.isAuthenticated && <AuthenticatedStack/>}
        </NavigationContainer>
    )
}

export default function Routes() {
    const [appIsReady, setAppIsReady] = useState(false);
    const authCtx = useContext(AuthContext);

    useEffect(() => {
        async function checkAuth() {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                authCtx.authenticate(token);
            }
        }

        checkAuth().then(() => setAppIsReady(true));
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <View style={{flex: 1}} onLayout={onLayoutRootView}>
            <Navigation/>
        </View>
    )
}
