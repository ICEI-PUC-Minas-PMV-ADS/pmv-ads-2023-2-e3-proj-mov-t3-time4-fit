import {useEffect, useLayoutEffect, useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import CaloriasDiario from "../components/Home/CaloriasDiario";
import RefeicoesList from "../components/Home/RefeicoesList";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {fetchRefeicoes} from "../gateway/http-refeicoes";
import {fetchUsuario} from "../gateway/http-usuarios";
import {fetchRefeicoesDiarias} from "../gateway/http-refeicoes-diarias";
import {getFormattedDate, getFormattedDatePretty} from "../util/date";
import {Ionicons} from "@expo/vector-icons";
import {GlobalStyles} from "../constants/styles";

function HomeVisitor({navigation, route}) {
    const {idUsuario, nome, metaCalorica} = route.params;

    const [isLoading, setIsLoading] = useState(true);
    const [refeicoes, setRefeicoes] = useState([]);
    const [refeicoesDiarias, setRefeicoesDiarias] = useState([]);

    const today = getFormattedDate(new Date);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: nome,
            headerShadowVisible: false,
        })

        async function getRefeicoes() {
            try {
                const refeicoes = await fetchRefeicoes(idUsuario);
                setRefeicoes(refeicoes);
            } catch (error) {
                console.log(error);
            }
        }

        async function getRefeicoesDiarias() {
            try {
                const refeicoesDiarias = await fetchRefeicoesDiarias(idUsuario, today);
                setRefeicoesDiarias(refeicoesDiarias);
            } catch (error) {
                console.log(error);
            }
        }

        async function fetchData() {
            setIsLoading(true);
            await Promise.all([getRefeicoes(), getRefeicoesDiarias()]);
        }

        fetchData().then(() => setIsLoading(false));
    }, [idUsuario, today, nome, navigation]);

    if (isLoading) {
        return <LoadingOverlay/>
    }

    const caloriasConsumidas = refeicoesDiarias.reduce((total, refeicaoDiaria) => total + refeicaoDiaria.calorias, 0);

    return (
        <ScrollView style={styles.container}>

            <View style={styles.headerContainer}>
                <Text style={styles.textHeader}>Hoje</Text>
            </View>

            <View style={styles.textoContainer}>
                <Text>Resumo</Text>
            </View>

            <View style={styles.caloriasContainer}>
                <CaloriasDiario
                    caloriasMeta={metaCalorica}
                    caloriasConsumidas={caloriasConsumidas}/>
            </View>

            <View style={styles.textoContainer}>
                <Text>Refeições</Text>
            </View>

            <View style={styles.refeicoesContainer}>
                <RefeicoesList
                    refeicoes={refeicoes}
                    refeicoesDiarias={refeicoesDiarias}
                    data={today}
                    isVisitor={true}
                />
            </View>

        </ScrollView>
    );
}

export default HomeVisitor;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.background,
        paddingTop: '10%',
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: '7%',
        marginBottom: 30,
    },
    textHeader: {
        textTransform: 'capitalize',
        fontSize: 24,
        fontWeight: 'bold',
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
        color: GlobalStyles.colors.higlight,
        fontWeight: 'bold',
    },
    refeicoesContainer: {
        marginBottom: '10%',
    }
})