import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn";
import Register from "../screens/Register";
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";
import Explorar from "../screens/Explorar";
import Objective from "../screens/Objective";
import LevelActivity from "../screens/LevelActivity";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        // TODO: Alterar o initialRoute
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
    )
}
