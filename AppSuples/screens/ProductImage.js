import React from "react";
import { View, Image, StyleSheet } from "react-native";

export function ProductImage() {
  return (
    <View>
      <Image
        source={require('../assets/images/Proteina.jpeg')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%", 
    height: "100%", 
    resizeMode: "cover",
    borderRadius: 10
  },
});