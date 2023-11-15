import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

export function ModalAdd({ handleClose, handleSalvar }) {
  const [food, setFood] = useState("");
  const [chosenHour, setChosenHour] = useState("00");
  const [chosenMinute, setChosenMinute] = useState("00");

  const handleFoodChange = (text) => {
    setFood(text);
  };

  const salvarRefeicao = () => {
    if (!food || !chosenHour || !chosenMinute) {
      alert("Preencha todos os campos!");
      return;
    }

    const time = `${chosenHour}:${chosenMinute}`;
    handleSalvar({ food, time });
    handleClose();
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Adicionar Horário</Text>
        <View style={styles.timeInput}>
          <MaterialCommunityIcons name="food-apple-outline" size={24} color="black" style={styles.foodIcon} />
          <TextInput
            style={styles.input}
            placeholder="Escolha a refeição"
            value={food}
            onChangeText={handleFoodChange}
          />
        </View>
        <View style={styles.timeInput}>
          <SimpleLineIcons name="clock" size={20} color="black" style={styles.clockIcon} />
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={chosenHour}
              style={styles.picker}
              onValueChange={(itemValue) => setChosenHour(itemValue)}
            >
              {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
                <Picker.Item key={hour} label={`${hour}`.padStart(2, '0')} value={`${hour}`.padStart(2, '0')} />
              ))}
            </Picker>
            <Text style={styles.timeText}>:</Text>
            <Picker
              selectedValue={chosenMinute}
              style={styles.picker}
              onValueChange={(itemValue) => setChosenMinute(itemValue)}
            >
              {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
                <Picker.Item key={minute} label={`${minute}`.padStart(2, '0')} value={`${minute}`.padStart(2, '0')} />
              ))}
            </Picker>
          </View>
        </View>
        <View style={styles.buttonArea}>
          <TouchableOpacity style={[styles.buttonSave, { marginRight: 10 }]} onPress={handleClose}>
            <Text style={styles.button}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonSave, { marginLeft: 10 }]} onPress={salvarRefeicao}>
            <Text style={styles.button}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: "rgba(24, 24, 24, 0.6)",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 3,
    padding: 20,
    alignItems: "center",
  },
  modalText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 25,
  },
  input: {
    padding: 1,
    paddingBottom: 5,
    marginVertical: 5,
  },
  buttonArea: {
    flexDirection: "row",
    width: '70%',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonSave: {
    alignItems: 'center',
    marginTop: 1,
    marginBottom: 12,
    fontSize: 20,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 5,
    fontSize: 15,
    fontWeight: 'bold',
    color: "#7D9C3E",
  },
  timeInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 1,
    paddingBottom: 5,
    marginVertical: 5,
  },
  clockIcon: {
    marginRight: 10,
  },
  foodIcon: {
    marginRight: 10,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  picker: {
    flex: 1,
    height: 50,
  },
  timeText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
