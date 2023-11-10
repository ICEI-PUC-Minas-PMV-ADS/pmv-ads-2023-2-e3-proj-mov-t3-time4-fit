import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn";
import Register from "../screens/Register";
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";
import Explorar from "../screens/Explorar";
import ManageRefeicao from "../screens/ManageRefeicao";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator initialRouteName={"Home"}>
            <BottomTab.Screen
                name="Home"
                component={Home}
                options={{
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
                name="BottomTabNavigator"
                component={BottomTabNavigator}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="ManageRefeicao"
                component={ManageRefeicao}
            />
        </Stack.Navigator>
    )
}
