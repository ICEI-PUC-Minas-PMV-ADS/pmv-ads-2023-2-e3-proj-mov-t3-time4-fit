import {ScrollView, StyleSheet, Text, View} from "react-native";
import {useContext, useLayoutEffect, useState} from "react";

import {RefeicaoContext} from "../store/refeicao-context";
import {GlobalStyles} from "../constants/styles";
import {RefeicoesDiariasContext} from "../store/refeicoes-diarias-context";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {getFormattedDayMonth} from "../util/date";
import AlimentosList from "../components/ManageRefeicao/AlimentosList";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {deleteRefeicaoDiaria} from "../gateway/http-refeicoes-diarias";

function ManageRefeicao({route, navigation}) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const idRefeicao = route.params?.idRefeicao;
    const idUsuario = route.params?.idUsuario;
    const data = route.params?.data;

    const refeicaoCtx = useContext(RefeicaoContext);
    const refeicoesDiariasCtx = useContext(RefeicoesDiariasContext);

    const refeicao = refeicaoCtx.refeicoes.find(refeicao => refeicao.id === idRefeicao);
    const refeicoesDiarias = refeicoesDiariasCtx.refeicoesDiarias
        .filter(refeicaoDiaria => refeicaoDiaria.idRefeicao === idRefeicao && refeicaoDiaria.data === data);
    const caloriasTotais = refeicoesDiarias.reduce((acc, refeicaoDiaria) => acc + refeicaoDiaria.calorias, 0);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: '',
            statusBarColor: GlobalStyles.colors.primary,
            headerTintColor: GlobalStyles.colors.text50,
            headerShadowVisible: false,
            headerStyle: {
                backgroundColor: GlobalStyles.colors.primary,
            },
        })
    }, [navigation]);

    async function removeAlimentoHandler(id) {
        setIsSubmitting(true);
        try {
            await deleteRefeicaoDiaria(id);
            refeicoesDiariasCtx.removeRefeicaoDia(id);
        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false);
        }
    }

    if (isSubmitting) {
        return <LoadingOverlay />
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerOuterContainer}>
                <Text style={styles.textTitle}>{refeicao.nome}</Text>
                <View style={styles.headerInnerContainer}>
                    <View style={styles.headerInnerContainer}>
                        <MaterialCommunityIcons name={'calendar-month'} size={24} color={GlobalStyles.colors.text50}/>
                        <Text style={styles.textHeader}>&nbsp;{getFormattedDayMonth(data)}</Text>
                    </View>
                    <View><Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text></View>
                    <View style={styles.headerInnerContainer}>
                        <MaterialCommunityIcons name={'alarm'} size={24} color={GlobalStyles.colors.text50}/>
                        <Text style={styles.textHeader}>&nbsp;{refeicao.horario}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.alimentosContainer}>
                <AlimentosList refeicoesDiarias={refeicoesDiarias} onDelete={removeAlimentoHandler}/>
            </View>
            <View style={styles.totalOuterContainer}>
                <View style={styles.totalInnerContainer}>
                    <Text>Total:&nbsp;&nbsp;</Text>
                    <Text>{caloriasTotais} kcal</Text>
                </View>
            </View>
        </ScrollView>
    );

}

export default ManageRefeicao;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.background,
    },
    headerOuterContainer: {
        backgroundColor: GlobalStyles.colors.primary,
        marginTop: -10,
        paddingBottom: 20,
        paddingLeft: '5%',
        borderBottomStartRadius: 24,
        borderBottomEndRadius: 24,
        alignItems: 'flex-start',
    },
    headerInnerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 2.5,
    },
    textTitle: {
        fontSize: 32,
        color: GlobalStyles.colors.text50,
    },
    textHeader: {
        fontSize: 20,
        color: GlobalStyles.colors.text50,
        textTransform: 'capitalize'
    },
    alimentosContainer: {
        marginVertical: 20,
    },
    totalOuterContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    totalInnerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderWidth: 2,
        borderColor: GlobalStyles.colors.primary,
        borderRadius: 20,
    },
})