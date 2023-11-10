import {useContext, useEffect, useLayoutEffect, useState} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';

import {AuthContext} from "../store/auth-context";
import CaloriasDiario from "../components/Home/CaloriasDiario";
import RefeicoesList from "../components/Home/RefeicoesList";
import {RefeicaoContext} from "../store/refeicao-context";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {fetchRefeicoes} from "../gateway/http-refeicoes";
import {fetchUsuario} from "../gateway/http-usuarios";
import {fetchRefeicoesDiarias} from "../gateway/http-refeicoes-diarias";
import {getFormattedDate} from "../util/date";
import {UsuarioContext} from "../store/usuario-context";
import {RefeicoesDiariasContext} from "../store/refeicoes-diarias-context";

function Home({navigation}) {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const refeicaoCtx = useContext(RefeicaoContext);
    const refeicoesDiariasCtx = useContext(RefeicoesDiariasContext);
    const usuarioCtx = useContext(UsuarioContext);
    const authCtx = useContext(AuthContext);

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
                const refeicoesDiarias = await fetchRefeicoesDiarias(authCtx.token, getFormattedDate(selectedDate));
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

    function maisOpcoesHandler() {
        navigation.navigate('ManageRefeicoes', {
            id: 1,
            idUsuario: 1,
            data: getFormattedDate(selectedDate),
        });
    }

    const refeicoesDiarias = refeicoesDiariasCtx.refeicoesDiarias;

    const caloriasMeta = usuarioCtx.usuario.metaCalorica;
    const caloriasConsumidas = refeicoesDiarias.reduce((total, refeicaoDiaria) => total + refeicaoDiaria.calorias, 0);

    return (
        <ScrollView style={styles.container}>
            {/*Calendário aqui*/}
            {/*Pelo valor selecionado no calendário obter a data*/}

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
                    refeicoes={refeicaoCtx.refeicoes.sort((a, b) => a.horario.localeCompare(b.horario))}
                    refeicoesDiarias={refeicoesDiarias}
                    data={getFormattedDate(selectedDate)}/>
            </View>

        </ScrollView>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
        marginBottom: 10,
    }
})