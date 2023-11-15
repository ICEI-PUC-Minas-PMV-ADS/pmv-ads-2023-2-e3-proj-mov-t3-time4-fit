import {Pressable, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {GlobalStyles} from "../../constants/styles";

function IconButton({ icon, color, size, style, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, style, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} color={color} size={size} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    backgroundColor: GlobalStyles.colors.primary,
    borderRadius: 50,
    elevation: 4,
  },
  pressed: {
    opacity: 0.7,
  },
});
