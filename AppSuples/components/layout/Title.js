import { View, Text, StyleSheet } from 'react-native';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

export function Title({ title, color }) {
  return (
    <View style={styles.container}>
      <Text style={
        styles.text}
      >{title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  text: {
    fontFamily: Fonts.family.bold,
    fontSize: 30,
    textAlign: 'center',
    color: Colors.white,
  }
});