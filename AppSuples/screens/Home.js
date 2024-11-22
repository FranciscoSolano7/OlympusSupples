import React, { useState } from 'react';
import { ImageBackground, Image, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Content, Wrapper, HeaderTwo } from '../components/layout';
import FormItem from '../components/controls/Formitem';
import Button, { ButtonClassTree, ButtonClassTwo } from '../components/controls/Button';
import State from '../components/controls/State';
import Base from '../components/modals/Base';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

const image = require('../assets/images/Background.png');
const product = require('../assets/images/Producto.png')

export default function Home({ navigation }) {
  const goToProfile = () => {
    navigation.navigate('Profile');
  }
  const goToShoping = () => {
    navigation.navigate('Shoping');
  }

  return (
    <ImageBackground
    source={image}
    resizeMode="cover"
    style = {styles.image}
    >
        <HeaderTwo/>
        <TouchableOpacity style={styles.button}>
          <Button onPress={goToShoping} label={"H O M E"} type={Colors.red} />
          <ButtonClassTree label={"Carrito"} type={Colors.red} />
          <Button onPress={goToProfile} label={"PROFILE"} type={Colors.red} />
        </TouchableOpacity>
        <Content>
          <Image
          style={styles.product}
          source={product}
          />
          <Image
          style={styles.product}
          source={product}
          />
          <Image
          style={styles.product}
          source={product}
          />
          <Image
          style={styles.product}
          source={product}
          />
          <TouchableOpacity>
              <ButtonClassTwo label={"COMPRAR"} type={Colors.red} />
          </TouchableOpacity>
        </Content>
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
  product: {
    width: '120%',
    height: 100,
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  label: {
    marginTop: 20,
    marginBottom: 50,
    backgroundColor: Colors.platinum,
    fontFamily: Fonts.family.bold,
  },
  header: {
    marginTop: 100,
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
});
