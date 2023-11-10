import { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, Modal } from "react-native";
import { ModalHorario } from './src/components/modal/'
import { ModalAdd } from './src/components/modalAdd'


import { AntDesign, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


export default function GerenciadorR() {

  const DATA = [
    { id: '1', title: 'Café da manhã' },
    { id: '2', title: 'Lanche da manhã ' },
    { id: '3', title: 'Almoço' },
    { id: '4', title: 'Lanche da Tarde' },
    { id: '5', title: 'Jantar' },
    { id: '6', title: 'Lanche da noite' },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.itemTitle}>{title}</Text>
      <TouchableOpacity style={styles.iconButton} onPress={() => setVisibleModal(true)} >
        <Entypo name="dots-three-vertical" size={15} color="black" />
      </TouchableOpacity>
    </View>
  );

  const [visibleModal, setVisibleModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#7D9C3E", "#C1FFC1"]}
        start={[0, 0]}
        end={[2.5, 0]}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity style={styles.button}>
            <AntDesign name="arrowleft" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>Gerenciar Refeições do Diário</Text>
        </View>
      </LinearGradient>

      <View style={styles.content}>
        <FlatList
          style={styles.flatlist}
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
        />
      </View>

      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <AntDesign name="plus" size={24} color="#fff" />
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={visibleModal}
        onRequestClose={() => setVisibleModal(false)}
      >
        <ModalHorario
          handleClose={() => setVisibleModal(false)}
          handleOpen={() => setVisibleModal(false)}

        />
      </Modal>

      <Modal
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <ModalAdd handleClose={handleCloseModal} />
    </Modal>

    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCDCDC",
  },
  header: {
    paddingTop: 40,
    paddingBottom: 14,
    paddingLeft: 20,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: 'bold',
    marginLeft: 15,
  },
  content: {
    flex: 1,
    backgroundColor: "#DCDCDC",
    padding: 5,
  },
  flatlist: {
    flex: 1,
    paddingTop: 1,
  },
  item: {
    backgroundColor: "#FFF",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
    paddingBottom: 15,
    marginVertical: 3,
    borderRadius: 5,
  },
  itemTitle: {
    fontSize: 16,
    paddingTop: 1,
  },
  button: {
    marginRight: 35,
  },
  addButton: {
    position: 'absolute',
    bottom: 80,
    right: 25,
    backgroundColor: "#7D9C3E",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    padding: 10,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 7,
    left: 10,
    marginLeft: 5,
    paddingLeft: 5,
  },


});
