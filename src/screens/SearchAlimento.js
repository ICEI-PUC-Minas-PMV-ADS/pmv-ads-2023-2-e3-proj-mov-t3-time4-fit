import {FlatList, StyleSheet, Text, TextInput, View} from "react-native";
import {useContext, useLayoutEffect, useState} from "react";

import {GlobalStyles} from "../constants/styles";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {getFormattedDayMonth} from "../util/date";
import {RefeicaoContext} from "../store/refeicao-context";
import IconButton from "../components/ui/IconButton";
import {fetchComidas} from "../gateway/http-comidas";
import AlimentoSearchItem from "../components/ManageRefeicao/AlimentoSearchItem";

function SearchAlimento({navigation, route}) {
    const {idRefeicao, idUsuario, data} = route.params;

    const [searchText, setSearchText] = useState('');
    const [alimentos, setAlimentos] = useState([]);

    const refeicaoCtx = useContext(RefeicaoContext);
    const refeicao = refeicaoCtx.refeicoes.find(refeicao => refeicao.id === idRefeicao);

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

    function textChangeHandler(text) {
        setSearchText(text);
        searchAlimentoHandler(text).then(alimentos => setAlimentos(alimentos));
    }

    function clearSearchHandler() {
        setSearchText('');
        setAlimentos([]);
    }

    async function searchAlimentoHandler(comida) {
        try {
            return await fetchComidas(comida)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
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
            <View style={styles.searchOuterContainer}>
                <View style={styles.searchContainer}>
                    <TextInput
                        placeholder={'Pesquisar'}
                        value={searchText}
                        style={styles.searchBar}
                        onChangeText={textChangeHandler}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                    />
                    <IconButton
                        size={24}
                        color={GlobalStyles.colors.text100}
                        icon={'close-circle'}
                        style={styles.closeButton}
                        onPress={clearSearchHandler}
                    />
                </View>
            </View>
            <FlatList
                data={alimentos}
                renderItem={alimento => {
                    console.log(alimento);
                    return (
                        <AlimentoSearchItem {...alimento.item} idRefeicao={idRefeicao} idUsuario={idUsuario} data={data} />
                    )
                }}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default SearchAlimento;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.text50,
    },
    headerOuterContainer: {
        backgroundColor: GlobalStyles.colors.primary,
        marginTop: -10,
        paddingLeft: '5%',
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
    searchOuterContainer: {
        backgroundColor: GlobalStyles.colors.primary,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 25,
        paddingHorizontal: '5%',
        marginBottom: 20,
    },
    searchContainer: {
        flex: 1
    },
    searchBar: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: GlobalStyles.colors.text50,
        backgroundColor: GlobalStyles.colors.text50,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 20,
    },
    closeButton: {
        position: 'absolute',
        right: '5%',
        top: '25%',
        padding: 0,
        backgroundColor: GlobalStyles.colors.text50,
        borderRadius: 0,
        elevation: 0,
    },
})