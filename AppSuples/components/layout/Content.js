import { View, StyleSheet, BackgroundColor } from "react-native";
import Colors from "../../constants/Colors";

export function Content ({ children}){
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

export function ContentTwo ({ children}){
    return (
        <View style={styles.containerTwo}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 5,
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 40,
        padding: 50,
        width: '100%',
        height: '70%',
        borderRadius: 25,
    },

    containerTwo: {
        color: Colors.black,
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        marginTop: -10,
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        padding: 10,
        width: '100%',
        height: '60%',
    },

    
});