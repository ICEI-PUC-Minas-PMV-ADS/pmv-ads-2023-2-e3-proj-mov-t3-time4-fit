import {useContext, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';

import {AuthContext} from "../store/auth-context";
import CaloriasDiario from "../components/Home/CaloriasDiario";
import RefeicoesList from "../components/Home/RefeicoesList";
import {RefeicaoContext} from "../store/refeicao-context";
import {fetchRefeicoes} from "../gateway/http-refeicoes";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {fetchUsuario} from "../gateway/http-usuarios";

function Home({navigation}) {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [usuario, setUsuario] = useState(null);

    const refeicaoCtx = useContext(RefeicaoContext);
    const authCtx = useContext(AuthContext);

    useEffect(() => {
        async function getRefeicoes() {
            try {
                const refeicoes = await fetchRefeicoes(authCtx.token);
                refeicaoCtx.setRefeicoes(refeicoes);
            } catch (error) {
                console.log(error);
            }
        }

        async function getUsuario() {
            try {
                const usuario = await fetchUsuario(authCtx.token);
                setUsuario(usuario);
            } catch (error) {
                console.log(error);
            }
        }

        setIsLoading(true);
        getRefeicoes();
        getUsuario();
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <LoadingOverlay />
    }

    const metaCalorica = usuario.metaCalorica;

    return (
        <ScrollView style={styles.container}>
            {/*Calendário aqui*/}
            {/*Pelo valor selecionado no calendário obter a data*/}

            {/*Buscar os dados do usuario para ter a meta*/}
            {/*Bucar os dados do diario*/}
            {/*Buscar dados das de diarios-refeicoes*/}

            {/*Montar componente Card com os dados somados do diario-refeicoes*/}
            <View style={styles.caloriasContainer}>
                <CaloriasDiario caloriasMeta={metaCalorica} caloriasConsumidas={1200}/>
            </View>

            {/*Incluir botão que leva para a tela de editar refeicoes e lembretes*/}

            <View style={styles.refeicoesContainer}>
                <RefeicoesList refeicoes={refeicaoCtx.refeicoes}/>
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
    caloriasContainer:{
        marginVertical: 20,
    },
    refeicoesContainer: {
        marginBottom: 10,
    }
})