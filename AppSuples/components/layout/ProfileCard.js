import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";

export function ProfileCard({children}){
    return(
        <View style={styles.container}>
            {children}
        </View>
    )
}
export function ProfileCardTwo({children}){
    return(
        <View style={styles.containerTwo}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: "90%",
      marginBottom: 10,
      backgroundColor: Colors.white,
      height: 100,
      alignItems: "center",
      justifyContent: 'center',
      padding: 10,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    containerTwo: {
        width: "90%",
        marginBottom: 10,
        backgroundColor: Colors.white,
        height: 250,
        alignItems: "center",
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      },
})