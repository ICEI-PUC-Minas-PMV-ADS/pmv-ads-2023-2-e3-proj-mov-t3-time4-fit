import {Alert, Pressable, StyleSheet, Text, View} from "react-native";
import {UsuarioContext} from "../store/usuario-context";
import * as Animatable from "react-native-animatable";
import {UserChoices} from "../constants/users";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {GlobalStyles} from "../constants/styles";
import {useContext, useEffect, useState} from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {storeUsuario} from "../gateway/http-usuarios";
import {AuthContext} from "../store/auth-context";
import {getMetaCalorica} from "../util/calculator";
import {id} from "date-fns/locale";
import {DefaultMeals} from "../constants/meals";
import {storeRefeicao} from "../gateway/http-refeicoes";

export default function SendRegister({navigation}) {
    const usuarioCtx = useContext(UsuarioContext);
    const authCtx = useContext(AuthContext);

    const usuario = usuarioCtx.usuario;

    useEffect(() => {
        const metaCalorica = getMetaCalorica(usuario);
        const usuarioData = {...usuario, metaCalorica: metaCalorica};

        async function storeUser() {
            try {
                return await storeUsuario(usuarioData);
            } catch (error) {
                Alert.alert('Falha no cadastro', 'Tente novamente mais tarde');
                navigation.navigate('Register')
            }
        }

        async function createRefeicoes(id) {
            try {
                for (let defaultMeal of DefaultMeals) {
                    const refeicaoData = {...defaultMeal, idUsuario: id};
                    await storeRefeicao(refeicaoData);
                }
                return id;
            } catch (error) {
                Alert.alert('Falha no cadastro', 'Tente novamente mais tarde');
                navigation.navigate('Register')
            }
        }

        storeUser()
            .then(id => createRefeicoes(id)
                .then(id => authCtx.authenticate(id.toString())));
    }, [])

    async function perfilStatusHandler(status) {

        const metaCalorica = getMetaCalorica(usuario)
        const usuarioData = {...usuario, metaCalorica: metaCalorica, public: status}

        try {
            const id = await storeUsuario(usuarioData);
            // usuarioCtx.updateUsuario({...usuarioData, id: id});
            // authCtx.authenticate(id);
        } catch (error) {
            Alert.alert('Falha no cadastro', 'Tente novamente mais tarde');
        }
    }

    return <LoadingOverlay message={'Criando usuário...'}/>
}