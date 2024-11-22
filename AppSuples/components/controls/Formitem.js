import {View, Text, TextInput, StyleSheet, BackgroundColor} from 'react-native';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

export default function FormItem({label})
{
    return(
        <View style={styles.container}>
            {label && <Text style= {styles.label}>{label}</Text>}
            <TextInput style={styles.input}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      marginBottom: 10,
      width: '100%',

    },
    label:{
      color: Colors.white,
      fontSize: 18,
      fontFamily: Fonts.family.regular,
      textAlign: 'left',
      marginBottom: 20,
      marginTop: 10,
    },
    input:{
      borderColor: Colors.white,
      borderWidth: 3,
      borderRadius: 25,
      backgroundColor: Colors.white_ghost,
      color: Colors.white,
      fontSize: 18,
      paddingBottom:5,
      paddingTop: 5,
    },
  });