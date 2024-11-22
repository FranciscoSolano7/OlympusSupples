import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import {Ionicons, EvilIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import Button from "../controls/Button";
import Colors from '../../constants/Colors'
import Fonts from '../../constants/Fonts'

export function Header({
  title, 
  showBack=false,
  showCart=true,
}) {
  const navigation = useNavigation();

  const goToBack = () => {
    navigation.goBack();
  };

  const showDrawer = () => {
    navigation.openDrawer();
  };
  
  return(
    <View style={styles.container}>
        <TouchableOpacity onPress={goToBack}>
            <Ionicons name="arrow-back-outline" size={50} color="white"/>
        </TouchableOpacity>
        <View style={styles.logoContainer}>
            {title && <Text style={styles.title}>{title}</Text>}
            <Image style={styles.logo} source={require('../../assets/icon.png')}/>
        </View>
        <TouchableOpacity>
            <EvilIcons name="cart" size={50} color="white"/>
        </TouchableOpacity>
    </View>
       
    );
}

export function HeaderTwo({
  title, 
  showBack=false,
  showCart=true,
}) {
  const navigation = useNavigation();

  const goToBack = () => {
    navigation.goBack();
  };

  const showDrawer = () => {
    navigation.openDrawer();
  };
  
  return(
    <View style={styles.container}>
        <TouchableOpacity onPress={goToBack}>
            <Ionicons name="arrow-back-outline" size={50} color="black"/>
        </TouchableOpacity>
        <View style={styles.logoContainer}>
            {title && <Text style={styles.title}>{title}</Text>}
            <Image style={styles.logo} source={require('../../assets/icon.png')}/>
        </View>
        <TouchableOpacity>
            <EvilIcons name="cart" size={50} color="black"/>
        </TouchableOpacity>
    </View>
       
    );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      alignContent: 'center',
      flexDirection: 'row',
      paddingBottom: 30,
      paddingHorizontal: 30,
      paddingTop: 30,
    },
    title:{
      backgroundColor:Colors.red,
      borderColor: Colors.platinum,
      borderRadius: 20,
      borderWidth: 1,
      color:Colors.white,
      fontFamily: Fonts.family.bold,
      fontSize:18,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginBottom: 10,
    },
    logo:{
      height: 0,
      width: 0,
    },
    logoContainer:{
      alignItems: 'center',
    },
    button:{
      width:'25%',
      marginTop: 50,
    }
  });