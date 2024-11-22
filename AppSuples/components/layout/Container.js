import { View, StyleSheet, BackgroundColor } from "react-native";

export function Cont ({ children}){
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 50,
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 40,
        padding: 50,
        width: '100%',
        height: '70%',
        borderRadius: 25,
    },

    
});