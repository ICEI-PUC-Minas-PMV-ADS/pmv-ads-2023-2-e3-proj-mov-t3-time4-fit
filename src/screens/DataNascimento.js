import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Modal,
  } from "react-native";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { useState } from "react";
  import DatePicker from "react-native-modern-datepicker";
  import { getFormatedDate } from "react-native-modern-datepicker";
  import { Ionicons } from '@expo/vector-icons';
  import {useNavigation} from '@react-navigation/native'
  
  export default function DataNascimento() {
    const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
    const hoje = new Date();
    const startDate = getFormatedDate(
      hoje.setDate(hoje.getDate() + 1),
      "DD/MM/YYYY"
    );
    const [selectedStartDate, setSelectedStartDate] = useState("");
    const [startedDate, setStartedDate] = useState("12/12/2023");
    const navigation = useNavigation();
    
    function handleChangeStartDate(propDate) {
      setStartedDate(propDate);
    }
  
    const handleOnPressStartDate = (navigation) => {
      setOpenStartDatePicker(!openStartDatePicker);
    };
    return (
      <SafeAreaView style={{ flex: 1 }}>
          <View>
          <View delay={600} animation="fadeInUp" style={styles.containerForm} /* direcionamento */>
                <Text style={styles.title}>Qual o seu sexo?</Text>

                <TouchableOpacity style={styles.buttonText}>
                    <Text style={styles.principalText}> <Ionicons name="ios-woman-outline" size={24} color="pink" /> Feminino</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonText}>
                    <Text style={styles.principalText}> <Ionicons name="ios-man" size={24} color="black" /> Masculino</Text>
                </TouchableOpacity>
                </View>

            <Text style={styles.title}>Sua data de nascimento</Text>
  
            <View style={styles.textSelect}>
              <View>
                <Text style={{ fontSize: 18 }}>Selecionar data</Text>
                <TouchableOpacity
                  style={styles.inputBtn}
                  onPress={handleOnPressStartDate}
                >
                  <Text>{selectedStartDate}</Text>
                </TouchableOpacity>
              </View>
  
              <TouchableOpacity
                onPress={() => console.log("Subimit data")}
                style={styles.submitBtn}
              >
                <Text style={{ fontSize: 20, color: "white" }} onPress={() => navigation.navigate('Medidas')} >Próximo</Text>
              </TouchableOpacity>

            </View>
  
            <Modal
              animationType="slide"
              transparent={true}
              visible={openStartDatePicker}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <DatePicker
                    mode="calendar"
                    minimumDate={startDate}
                    selected={startedDate}
                    onDateChanged={handleChangeStartDate}
                    onSelectedChange={(date) => setSelectedStartDate(date)}
                  />
                  <TouchableOpacity onPress={handleOnPressStartDate}>
                    <Text style={{ color: "white" }}>Fechar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    textHeader: {
      fontSize: 36,
      marginVertical: 60,
      color: "#111",
    },
    textSubHeader: {
      fontSize: 25,
      color: "#111",
    },
    buttonText: {
        padding: 20,
        borderRadius: 3,
        height: 70,
        marginBottom: 12,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#7D9C3E",
        alignItems: 'center',
        textAlign: 'center',
        alignContent: 'center',
        margin: 20
    },
    inputBtn: {
      borderWidth: 1,
      borderRadius: 4,
      borderColor: "#7D9C3E",
      height: 50,
      paddingLeft: 8,
      fontSize: 18,
      justifyContent: "center",
      marginTop: 5,
    },
    submitBtn: {
      backgroundColor: "#7D9C3E",
      paddingVertical: 22,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
      paddingVertical: 12,
      marginVertical: 16,
    },
    centeredView: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    modalView: {
      margin: 20,
      backgroundColor: "#080516",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
      padding: 35,
      width: "90%",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 70,
        alignItems: "center",
        alignContent: 'center',
        textAlign: 'center'
    },
    textSelect:{
        width: "100%", 
        paddingHorizontal: 22, 
        marginTop: 64 
    }
  });