import AsyncStorage from '@react-native-async-storage/async-storage';


const useStorage = () => {
  const getItem = async (key) => {
    try {
      const food = await AsyncStorage.getItem(key);
      return JSON.parse(food) || [];
    } catch (error) {
      console.error('Erro ao buscar', error);
      return [];
    }
  };

  const saveFood = async (key, value) => {
    try {
      let foods = await getItem(key);
      foods.push(value);
      await AsyncStorage.setItem(key, JSON.stringify(foods));
    } catch (error) {
      console.error('Erro ao Salvar', error);
    }
  };

  const saveTime = async (key, value) => {
    try {
      let times = await getItem(key);
      times.push(value);
      await AsyncStorage.setItem(key, JSON.stringify(times));
    } catch (error) {
      console.error('Erro ao Salvar', error);
    }
  };


  const removeFood = async (key) => {
    try {
      await AsyncStorage.removeFood(key);
    } catch (error) {
      console.error('Erro ao remover item do storage', error);
    }
  };

  return { getItem, saveFood, saveTime, removeFood };
};

export default useStorage;
