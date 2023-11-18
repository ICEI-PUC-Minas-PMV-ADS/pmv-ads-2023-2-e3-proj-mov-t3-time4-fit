import {FlatList, StyleSheet, Text, TextInput, View} from "react-native";
import {useContext, useState} from "react";
import {fetchUsuarios} from "../gateway/http-usuarios";
import {GlobalStyles} from "../constants/styles";
import IconButton from "../components/ui/IconButton";
import ExplorarSearchItem from "../components/Explorar/ExplorarSearchItem";
import {AuthContext} from "../store/auth-context";

function Explorar({navigation}) {
    const [searchText, setSearchText] = useState('');
    const [usuarios, setUsuarios] = useState([]);

    const authCtx = useContext(AuthContext);

    function textChangeHandler(text) {
        setSearchText(text);
        searchUsuarioHandler(text).then(usuarios => setUsuarios(usuarios));
    }

    function clearSearchHandler() {
        setSearchText('');
        setUsuarios([]);
    }

    async function searchUsuarioHandler(comida) {
        try {
            return await fetchUsuarios(comida, authCtx.token)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <Text style={styles.textHeader}>Explorar</Text>
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
                data={usuarios}
                renderItem={usuario => {
                    return (
                        <ExplorarSearchItem {...usuario.item} />
                    )
                }}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Explorar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.text50,
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
    searchOuterContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '5%',
        marginBottom: 20,
    },
    searchContainer: {
        flex: 1
    },
    searchBar: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: GlobalStyles.colors.primary,
        backgroundColor: GlobalStyles.colors.text50,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 18,
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