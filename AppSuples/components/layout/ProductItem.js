import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";
import { ProductImage } from "../../screens/ProductImage";
import { ButtonClassTree } from "../controls/Button";
import Fonts from "../../constants/Fonts";

export function ProductItem({label , price}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ProductImage />
      </View>
      {label && <Text style={styles.title}>{label}</Text>}
      {price&& <Text style={styles.price}>{price}</Text>}
      <View style={styles.buttonContainer}>
        <ButtonClassTree label={"Add"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "48%",
    marginBottom: 15, 
    backgroundColor: Colors.white,
    height: 300,
    alignItems: "center",
    borderRadius: 10,
    gap: 5,

  },
  imageContainer: {
    width: "100%", 
    height: "60%", 
    overflow: "hidden", 
    justifyContent: "center",
  },
  buttonContainer: {
    width: "90%",
    alignItems: "center",
    height: 85,
    marginTop: 220,
    position:"absolute"
  },
  title: {
    fontFamily: Fonts.family.bold,
    fontSize: 18,
    color: Colors.wine,
    textAlign: 'center',
  },
  price: {
    fontFamily: Fonts.family.bold,
    fontSize: 20,
    color: Colors.red,
    textAlign: 'center',
  },
});