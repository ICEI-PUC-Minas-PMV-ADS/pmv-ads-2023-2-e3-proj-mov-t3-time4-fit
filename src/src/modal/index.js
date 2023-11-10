import { useState } from "react";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import useStorage from "../../hooks/useStorage";

export function ModalHorario({ handleClose }) {
   const [food, setFood] = useState("");
   const [time, setTime] = useState("");
   const [remove,setRemove] = useState("");
   const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

   const handleFoodChange = (text) => {
      setFood(text);
   };


   const handleTimeChange = (text) => {
      let formattedTime = text;

      if (/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(text)) {
         formattedTime = text;
      } else if (/^([01]?[0-9]|2[0-3])$/.test(text)) {
         if (text.length === 3) {
            formattedTime = text.slice(0, 2) + ":" + text.slice(2);
         } else if (text.length === 2) {
            formattedTime = text + ":";
         }
      }
      setTime(formattedTime);
   };


   const { saveFood, saveTime } = useStorage();

   async function handleSaveFoodAndTime() {
      if (!food || !time) {
         alert("Preencha todos os campos!");
         return;
      }

      if (!timeRegex.test(time)) {
         alert("Por favor, insira um horário válido no formato HH:mm (24 horas)!");
         return;
      }

      try {
         await Clipboard.setStringAsync(food);
         await saveFood('@pass', food);
         await saveTime('@time', time);

         alert("Refeição e horário salvos com sucesso!");
         handleClose();
      } catch (error) {
         console.error("Erro ao salvar:", error);
      }
   }

   async function handleRemove() {
      if (!remove) {
         alert("Por favor, insira o item a ser removido!");
         return;
      }

      try {
         await removeItem('@pass', remove);

         alert("Item removido com sucesso!");
      } catch (error) {
         console.error("Erro ao remover:", error);
      }
   }


   return (
      <View style={styles.centeredView}>
         <View style={styles.modalView}>
            <Text style={styles.modalText}>Adicionar Horário</Text>
            <View style={styles.inputContainer}>
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
                  <TextInput
                     style={styles.input}
                     placeholder="Escolha o horário"
                     value={time}
                     onChangeText={handleTimeChange}
                  />
               </View>
            </View>
            <View style={styles.buttonArea}>
               <TouchableOpacity style={[styles.buttonSave, { marginRight: 'auto' }]} onPress={handleRemove}>
                  <Text style={styles.button}>Excluir</Text>
               </TouchableOpacity>
               <View style={{ flex: 1 }} />
               <TouchableOpacity style={[styles.buttonSave, { marginRight: 10 }]} onPress={handleClose}>
                  <Text style={styles.button}>Cancelar</Text>
               </TouchableOpacity>
               <TouchableOpacity style={[styles.buttonSave, { marginLeft: 10 }]} onPress={handleSaveFoodAndTime}>
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
      margin: 30,
      backgroundColor: "white",
      borderRadius: 3,
      padding: 30,
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
      width: '75%',
      marginTop: 15,
      alignItems: 'center',
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
  timeText: {
      flex: 2,
  },
})