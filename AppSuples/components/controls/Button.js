import { TouchableOpacity, Text, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

export default function Button({ label, type = 'black', onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={[
      styles.container2,
      type === 'white' && styles.container2White
    ]}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  )
}

export function ButtonClassTwo({label, type = 'black', onPress}){

  return(
    <TouchableOpacity onPress={onPress} style={[
      styles.container3,
      type === 'white' && styles.containerWhite
    ]}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  )
}
export function ButtonClassTree({label, type = 'black', onPress}){

  return(
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text2}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.red,
    borderRadius: 25,
    paddingVertical: 10,
    padding: 20,
    width: '80%',
    marginTop: 35,
  },
  container2: {
    alignItems: 'center',
    backgroundColor: Colors.white_ghost,
    borderRadius: 25,
    paddingVertical: 10,
    padding: 20,
    width: '80%',
    marginTop: 35,
  },
  container3: {
    alignItems: 'center',
    backgroundColor: Colors.black,
    borderRadius: 25,
    paddingVertical: 10,
    padding: 20,
    width: '80%',
    marginTop: 35,
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.family.bold,
    fontSize: 18,
  },
  containerWhite: {
    borderColor: Colors.white,
    borderRadius: 10,
    borderWidth: 2,
  },
});