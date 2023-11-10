import {useContext, useEffect, useLayoutEffect, useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';

import {AuthContext} from "../store/auth-context";
import CaloriasDiario from "../components/Home/CaloriasDiario";
import RefeicoesList from "../components/Home/RefeicoesList";
import {RefeicaoContext} from "../store/refeicao-context";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {fetchRefeicoes} from "../gateway/http-refeicoes";
import {fetchUsuario} from "../gateway/http-usuarios";
import {fetchRefeicoesDiarias} from "../gateway/http-refeicoes-diarias";
import {getFormattedDate, getFormattedDatePretty} from "../util/date";
import {UsuarioContext} from "../store/usuario-context";
import {RefeicoesDiariasContext} from "../store/refeicoes-diarias-context";
import {LocaleConfig} from "react-native-calendars";
import {Ionicons} from "@expo/vector-icons";

LocaleConfig.locales['pt-br'] = {
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abr.', 'Mai.', 'Jun.',
        'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    today: 'Hoje'
}

LocaleConfig.defaultLocale = 'pt-br';

function Home({navigation, route}) {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedDate, setSelectedDate] = useState(getFormattedDate(new Date));

    const refeicaoCtx = useContext(RefeicaoContext);
    const refeicoesDiariasCtx = useContext(RefeicoesDiariasContext);
    const usuarioCtx = useContext(UsuarioContext);
    const authCtx = useContext(AuthContext);

    useEffect(() => {
        setIsLoading(true);
        if (route.params?.selectedDate) {
            setSelectedDate(route.params.selectedDate);
        }
    }, [route.params?.selectedDate]);

    useLayoutEffect(() => {
        async function getUsuario() {
            try {
                const usuario = await fetchUsuario(authCtx.token);
                usuarioCtx.fetchUsuario(usuario);
            } catch (error) {
                console.log(error);
            }
        }

        async function getRefeicoes() {
            try {
                const refeicoes = await fetchRefeicoes(authCtx.token);
                refeicaoCtx.setRefeicoes(refeicoes);
            } catch (error) {
                console.log(error);
            }
        }

        async function getRefeicoesDiarias() {
            try {
                const refeicoesDiarias = await fetchRefeicoesDiarias(authCtx.token, selectedDate);
                refeicoesDiariasCtx.setRefeicoesDiarias(refeicoesDiarias);
            } catch (error) {
                console.log(error);
            }
        }

        async function fetchData() {
            setIsLoading(true);
            await Promise.all([getUsuario(), getRefeicoes(), getRefeicoesDiarias()]);
        }

        fetchData().then(() => setIsLoading(false));
    }, [selectedDate]);

    if (isLoading) {
        return <LoadingOverlay/>
    }

    function calendarHandler() {
        navigation.navigate('HomeCalendar', {
            current: selectedDate,
        });
    }

    function maisOpcoesHandler() {
        navigation.navigate('ManageRefeicao', {
            id: 1,
            idUsuario: 1,
            data: selectedDate,
        });
    }

    const refeicoesDiarias = refeicoesDiariasCtx.refeicoesDiarias;

    const caloriasMeta = usuarioCtx.usuario.metaCalorica;
    const caloriasConsumidas = refeicoesDiarias.reduce((total, refeicaoDiaria) => total + refeicaoDiaria.calorias, 0);

    return (
        <ScrollView style={styles.container}>

            <Pressable onPress={calendarHandler} style={styles.calendarioContainer}>
                <Text style={styles.textCalendario}>{getFormattedDatePretty(selectedDate)}</Text>
                <Ionicons name={'calendar-outline'} size={24} color={''}/>
            </Pressable>

            <View style={styles.textoContainer}>
                <Text>Resumo</Text>
            </View>

            <View style={styles.caloriasContainer}>
                <CaloriasDiario
                    caloriasMeta={caloriasMeta}
                    caloriasConsumidas={caloriasConsumidas}/>
            </View>

            {/*Incluir botão que leva para a tela de editar refeicoes e lembretes*/}
            <View style={styles.textoContainer}>
                <Text>Refeições</Text>
                <Text style={styles.textoBotao} onPress={maisOpcoesHandler}>Mais opções</Text>
            </View>

            <View style={styles.refeicoesContainer}>
                <RefeicoesList
                    refeicoes={refeicaoCtx.refeicoes}
                    refeicoesDiarias={refeicoesDiarias}
                    data={selectedDate}/>
            </View>

        </ScrollView>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: '10%',
    },
    calendarioContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    textCalendario: {
        textTransform: 'capitalize',
    },
    caloriasContainer: {
        marginBottom: 30,
    },
    textoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '7%',
    },
    textoBotao: {
        color: '#38A69D',
        fontWeight: 'bold',
    },
    refeicoesContainer: {
        marginBottom: '10%',
    }
})