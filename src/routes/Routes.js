import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn";
import Register from "../screens/Register";
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";
import Explorar from "../screens/Explorar";
import ManageRefeicao from "../screens/ManageRefeicao";
import HomeCalendar from "../screens/HomeCalendar";
import ManageAlimento from "../screens/ManageAlimento";
import SearchAlimento from "../screens/SearchAlimento";

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
            />
            <BottomTab.Screen
                name="Perfil"
                component={Perfil}
            />
        </BottomTab.Navigator>
    )
}

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName={"BottomTabNavigator"}>
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
                name="BottomTabNavigator"
                component={BottomTabNavigator}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="ManageRefeicao"
                component={ManageRefeicao}
            />
            <Stack.Screen
                name="ManageAlimento"
                component={ManageAlimento}
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
        </Stack.Navigator>
    )
}
