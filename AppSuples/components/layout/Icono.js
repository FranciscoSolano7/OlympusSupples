import { View, Image, Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export function Logo({
  type = 'black',
  width,
}) {
  const image = type === 'black' ? require('../../assets/icon(1).png') : require('../../assets/logo-white.png');
  const size = width || windowWidth * 0.2;
  const image1 = require('../../assets/images/Logo_Olympia.jpeg')

  return (
    <View style={styles.container}>
      <Image
        style={
          styles.image
        }
        source={image1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  image: {
    borderRadius: 100,
    height: windowWidth * 0.2,
    width: windowWidth * 0.2,
  }
});