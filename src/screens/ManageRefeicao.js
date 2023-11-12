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
import IconButton from "../components/ui/IconButton";

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

    function addAlimentoHandler() {
        navigation.navigate('SearchAlimento', {
            idRefeicao: idRefeicao,
            idUsuario: idUsuario,
            data: data,
        });
    }

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

    let content = (
        <View style={styles.fallbackContainer}>
            <Text style={styles.fallbackText}>Nenhum alimento adicionado</Text>
        </View>
    )

    if (refeicoesDiarias.length > 0) {
        content = (
            <View style={styles.alimentosContainer}>
                <AlimentosList refeicoesDiarias={refeicoesDiarias} onDelete={removeAlimentoHandler}/>
            </View>
        )
    }

    return (
        <View style={styles.container}>
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
            {content}
        </ScrollView>
            <View style={styles.addButton}>
                <IconButton icon={'add'}
                            size={42}
                            color={GlobalStyles.colors.text50}
                            style={styles.button}
                            onPress={addAlimentoHandler}/>
            </View>
        </View>
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
        marginHorizontal: '5%',
        marginVertical: 50,
        borderColor: GlobalStyles.colors.primary,
        borderRadius: 20,
    },
    addButton: {
        position: 'absolute',
        bottom: 60,
        right: '7%',
    },
    button: {
        // borderRadius: 15,
    },
    fallbackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '60%',
    },
    fallbackText: {
        fontSize: 18,
        color: GlobalStyles.colors.text800,
    }
})