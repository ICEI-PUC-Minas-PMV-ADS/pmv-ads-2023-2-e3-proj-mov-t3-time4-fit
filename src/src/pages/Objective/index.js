import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'

export default function Objective() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logo.png')}
                    style={{ width:'100%'}}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm} /* direcionamento */>
                <Text style={styles.title}>Qual o seu objetivo?</Text>

                <TouchableOpacity style={styles.buttonText}
                                  onPress={ () => navigation.navigate('levelActivity')}
                >
                    <Text style={styles.principalText}> <FontAwesome5 name="weight" size={24} color="blue" /> Emagrecer</Text>
                    <Text>Perder peso de uma forma saudável</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonText}
                                  onPress={ () => navigation.navigate('levelActivity')}
                >
                    <Text style={styles.principalText}> <MaterialCommunityIcons name="weight-lifter" size={24} color="black"/> Ganhar Peso</Text>
                    <Text>Aumentar massa muscular</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonText}
                                  onPress={ () => navigation.navigate('levelActivity')}
                >
                    <Text style={styles.principalText}> <MaterialCommunityIcons name="food-apple" size={24} color="red"/>Manter Peso</Text>
                    <Text>Manter peso com saúde</Text>
                </TouchableOpacity>

            </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
    },
    containerLogo:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm:{
        flex:2,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        alignItems: "center",
        alignContent: 'center',
        textAlign: 'center'
    },
    text:{
        color: '#a1a1a1',
        alignItems: 'center',
        fontWeight: 'bold',
        alignContent: 'center',
        textAlign: 'center'
    },
    buttonText:{
        padding:20,
        borderRadius: 5,
        height: 95,
        marginBottom: 12,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#7D9C3E",
        alignItems: 'center',
        textAlign: 'center',
        alignContent: 'center'
    },
    principalText:{
        fontSize:16,
        fontWeight:'bold'
    }

})