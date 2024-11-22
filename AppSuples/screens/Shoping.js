import React, { useState } from 'react';
import { ImageBackground, View, StyleSheet, TouchableOpacity } from 'react-native';
import ProductContainer from '../components/layout/ProductContainer';
import { Content, HeaderTwo } from '../components/layout';
import Colors from '../constants/Colors';
import Button, { ButtonClassTree } from '../components/controls/Button';
import Fonts from '../constants/Fonts';
import { ProductItem } from '../components/layout/ProductItem';

const image = require('../assets/images/Background.png');

export default function Shoping({navigation}) {
  const goToProfile = () => {
    navigation.navigate('Profile');
  }
  const goToHome = () => {
    navigation.navigate('Home');
  }

  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
    console.log('Filter selected:', value);
  };

  return (
    <ImageBackground
    source={image}
    resizeMode="cover"
    style = {styles.image}
    >
    <View style={styles.container}>
      <HeaderTwo/>
      <TouchableOpacity style={styles.button}>
        <ButtonClassTree label={"H O M E"} type={Colors.red} />
        <Button onPress={goToHome} label={"CARRITO"} type={Colors.red} />
        <Button onPress={goToProfile} label={"PROFILE"} type={Colors.red} />
        
      </TouchableOpacity>
      <ProductContainer style={styles.productContainer}>
        <ProductItem label={"PROTEINA"} price={"$1400"}/>
        <ProductItem label={"PROTEINA"} price={"$1400"}/>
        <ProductItem label={"PROTEINA"} price={"$1400"}/>
        <ProductItem label={"PROTEINA"} price={"$1400"}/>
        <ProductItem label={"PROTEINA"} price={"$1400"}/>
        <ProductItem label={"PROTEINA"} price={"$1400"}/>
      </ProductContainer>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 5,
  },
  productContainer: {
    flex: 1,
    backgroundColor: Colors.black,
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between', 
    padding: 10,
    paddingBottom: 20
    
  },
  image: {
    flex: 1,
    justifyContent: 'center',
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

