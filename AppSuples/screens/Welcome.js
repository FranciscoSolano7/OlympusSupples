import { ImageBackground, StyleSheet } from 'react-native';

import { Content, Wrapper, Title, Logo } from '../components/layout';
import Button from '../components/controls/Button';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

const image = require ('../assets/images/MR_OLYMPIA.jpg');

export default function Welcome({ navigation }) {
  const goToLogin = () => {
    navigation.navigate('Login');
  }

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style = {styles.image}
      >
    <Wrapper>
      <Content>
        <ImageBackground
          style={styles.background}
        >
          <Logo type="white" />
        </ImageBackground>
        <Title color={Colors.white} title="BIENVENID@ A OLYMPUS SUPLES" />
        <Button onPress={goToLogin} label={"INICIAR SESIÓN"} type={Colors.ghostwhite} style={styles.label} />
        <Button onPress={goToLogin} label={"REGÍSTRATE"} type={Colors.ghostwhite} style={styles.label}/>
      </Content>
    </Wrapper>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    marginBottom: 20,
    marginTop: 50,
    width: '100%',
  },

  image: {
    flex: 1,
    justifyContent: 'center',
  },

  label: {
    marginTop: 20,
    marginBottom: 50,
    backgroundColor: Colors.platinum,
    fontFamily: Fonts.family.bold,
  }
})