import { Content, Header, Wrapper, Title} from '../components/layout';
import { ImageBackground, StyleSheet } from 'react-native';

import Button from '../components/controls/Button';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import FormItem from '../components/controls/Formitem';

const image = require('../assets/images/MR_OLYMPIA.jpg');

export default function Login({ navigation }) {
  const goToShoping = () => {
    navigation.navigate('Shoping');
  }

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style = {styles.image}
      >
        <Wrapper>
          <Header showBack={true} showCart={false} />
          <Content>
            <Title title="LOGIN" />
            <FormItem label="Nombre de usuario"></FormItem>
            <FormItem label="Contraseña"></FormItem>
            <Button onPress={goToShoping} label={"INICIAR SESIÓN"} type={Colors.ghostwhite} />
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