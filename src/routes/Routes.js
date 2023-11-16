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
import Objective from "../screens/Objective";
import LevelActivity from "../screens/LevelActivity";
import DataNascimento from "../screens/DataNascimento";
import ManageRefeicao from "../screens/ManageRefeicao";
import ManageRefeicoes from "../screens/ManageRefeicoes";
import HomeCalendar from "../screens/HomeCalendar";
import SearchAlimento from "../screens/SearchAlimento";
import HomeCalendar from "../screens/HomeCalendar";
import HomeVisitor from "../screens/HomeVisitor";
import Medidas from "../screens/Medidas"
import {useCallback, useContext, useEffect, useState} from "react";
import {AuthContext} from "../store/auth-context";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {GlobalStyles} from "../constants/styles";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator initialRouteName={"Home"}
                             screenOptions={() => ({
                                 tabBarStyle: {backgroundColor: GlobalStyles.colors.text50},
                                 tabBarLabelStyle: {fontSize: 13, fontWeight: 'bold'},
                                 tabBarActiveTintColor: GlobalStyles.colors.primary,
                                 tabBarInactiveTintColor: GlobalStyles.colors.text100,
                             })}
        >
            <BottomTab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: "Diário",
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="food-apple" color={color} size={size}/>
                    ),
                }}
            />
            <BottomTab.Screen
                name="Explorar"
                component={Explorar}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="magnify" color={color} size={size}/>
                    ),
                }}
            />
            <BottomTab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="account" color={color} size={size}/>
                    ),
                }}
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
            <Stack.Screen
                name="ManageRefeicoes"
                component={ManageRefeicoes}
                options={{title: 'Gerenciar Refeições'}}
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
            <Stack.Screen
                name="Objective"
                component={Objective}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="LevelActivity"
                component={LevelActivity}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="DataNascimento"
                component={DataNascimento}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Medidas"
                component={Medidas}
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
