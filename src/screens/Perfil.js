import { View, Text, TextInput, Button, StyleSheet, Image} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {GlobalStyles} from "../constants/styles";


export default function Metas ({navigation}){
  
  const [nascimento, setNascimento] = useState('');
  const [sexo, setSexo] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [objetivo, setObjetivo] = useState('');

  

  const handleSave = () => {
    // Aqui você pode implementar a lógica para salvar os dados, por exemplo, enviá-los para um servidor ou armazená-los localmente.
    console.log("Nascimento:", nascimento);
    console.log("Sexo", sexo)
    console.log("Altura:", altura);
    console.log("Peso:", peso);
    console.log("Objetivo:", objetivo);
  };

  return (
    <View style={styles.container}>

      <View style={styles.cabeçalho}>
          <View>
              <Text>FOTO DE PERFIL</Text>
              <Text style={styles.name}>usuario.nome</Text>
          </View>
      </View>

      <View style={styles.display}>
          <View style={styles.subtitle}><Text style={styles.subtitle}>Meu Perfil</Text></View>     
              <View style={styles.valores}>
                  <View style={styles.atributos}>
                    <View style={styles.campos}>
                      <Text style={styles.label}>Nascimento </Text>
                      <TextInput
                          style={styles.input}
                          value={nascimento}
                          onChangeText={text => setNascimento(text)}
                      />            
                    </View>
                    <View style={styles.campos}>
                      <Text style={styles.label}>Sexo:</Text>
                      <TextInput
                              style={styles.input}
                              value={sexo}
                              onChangeText={text => setSexo(text)}
                              keyboardType="enum"
                          />
                    </View>
                    <View style={styles.campos}>
                      <Text style={styles.label}>Altura:</Text>
                      <TextInput
                              style={styles.input}
                              value={sexo}
                              onChangeText={text => setAltura(text)}
                              keyboardType="enum"
                          />
                    </View>
                    <View style={styles.campos}>
                      <Text style={styles.label}>Peso:</Text>
                      <TextInput
                              style={styles.input}
                              value={sexo}
                              onChangeText={text => setPeso(text)}
                              keyboardType="enum"
                          />
                    </View>
                    <View style={styles.campos}>
                      <Text style={styles.label}>Objetivo:</Text>
                      <TextInput
                              style={styles.input}
                              value={sexo}
                              onChangeText={text => setObjetivo(text)}
                              keyboardType="enum"
                          />
                    </View>   
                  </View>
              </View>
          </View>
      <View style={styles.cards}>
        <View>
          <Text>META CALORIA</Text>
        </View>
        <View>
          <Text>META PESO</Text>
        </View>
      </View>


      <Button style={styles.botao} title="Salvar" onPress={handleSave} />
    </View>

  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    flexDirection: "column",
  },
  
  cabeçalho: {
    backgroundColor: 'white',
    borderWidth: 2, // Largura da borda
    borderColor: 'black', // Cor da borda
    padding: 10,
    flexDirection: 'row', 
    justifyContent: 'space-around',
    borderRadius: 20,
    marginBottom: 10,
  },

  subtitle: {
    paddingTop:10,
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold'

  },
  valores:{
    padding: 20,
    borderRadius: 20,
  },
  display:{
  backgroundColor: 'white',
  marginBottom: 10,
  borderWidth: 2, // Largura da borda
  borderColor: '#FFFFF', // Cor da borda
  borderRadius: 20,
  shadowColor: 'black', // Cor da sombra
  shadowOffset: { width: 0, height: 2 }, // Offset (deslocamento) da sombra
  shadowOpacity: 0.2, // Opacidade da sombra
  shadowRadius: 5, // Raio da sombra

  },

  campos:{
    flexDirection:'row',
    justifyContent: 'space-between'
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 2,
    borderColor: '#888',
    borderRadius: 5,
    height: 30,
    marginBottom: 10,
    paddingHorizontal: 12,
  },
  cards:{
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor: 'white',
    borderWidth: 2, // Largura da borda
    borderColor: '#FFFFF', // Cor da borda
    borderRadius: 20,

  },
  botao: {
    padding: 10,
  }
});
