import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Ionicons, EvilIcons} from '@expo/vector-icons';
import FormItem from '../components/controls/Formitem';
import { HeaderTwo, Wrapper, Title, LogoTwo } from '../components/layout';
import { ContentTwo} from '../components/layout';
import { ProfileCard, ProfileCardTwo } from '../components/layout/ProfileCard';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import Button, { ButtonClassTwo, ButtonClassTree } from '../components/controls/Button';
    
const image = require('../assets/images/Background.png');

export default function Profile({navigation}){
    const goToShoping = () => {
        navigation.navigate('Shoping');
      }

      const goToHome = () => {
        navigation.navigate('Home');
      }

      const goToWelcome = () => {
        navigation.navigate('Welcome');
      }

    return(
        <ImageBackground
        source={image}
        resizeMode="cover"
        style = {styles.image}>
        
        <View style={styles.view}>
            <HeaderTwo/>
            <TouchableOpacity style={styles.button}>
              <Button onPress={goToShoping} label={"H O M E"} type={Colors.red} />
              <Button onPress={goToHome} label={"CARRITO"} type={Colors.red} />
              <ButtonClassTree label={"PROFILE"} type={Colors.red} />
            </TouchableOpacity>
            <ContentTwo>
            <LogoTwo style = {styles.conteiner}/>
            <Title color={Colors.white} title="HOLA USUARI@" />
              <ProfileCard>
                <Text style = {styles.text}>SALDO DISPONIBLE:</Text>
                <Text style = {styles.title}>$450.00</Text>
              </ProfileCard>

              <ProfileCardTwo>
                <Text style = {styles.title}>E-Mail:</Text>
                <Text style = {styles.text}>usuario123@example.com</Text>
                <Text style = {styles.title}>Nombre de Usuario:</Text>
                <Text style = {styles.text}>Usuario123</Text>
                <Text style = {styles.title}>Numero de celular:</Text>
                <Text style = {styles.text}>552 200 5878</Text>
              </ProfileCardTwo>
                <TouchableOpacity style={styles.sesion}>
                  <ButtonClassTwo onPress={goToWelcome} label={"Cerrar Sesión"} type={Colors.red} />
                </TouchableOpacity>
            </ContentTwo>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
  view:{
    flex: 1,
  },
    background: {
      marginBottom: 20,
      marginTop: 30,
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
    },
    text: {
      fontSize: 20,
      color: Colors.black,
      textAlign: "left"
    },
    title: {
      fontSize: 28,
      color: Colors.black,
      textAlign: 'center',
    },
    button:{
      alignSelf: "center",
      marginRight: 210,
      flexDirection: 'row',
      width: '40%',
      marginTop: -5,
      gap: 5,
      paddingBottom: 20,
  },
  sesion:{
    marginTop: -30,
  }
})