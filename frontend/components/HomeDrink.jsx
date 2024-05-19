import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../styles/globalStyles';
import images from '../assets/img/images';
import { useNavigation } from '@react-navigation/native';

const drinkMap = {
  "black-tea": images.black_tea,
  "bubble-tea": images.bubble_tea,
  "caramel": images.caramel,
  "chai": images.chai,
  "chocolate": images.chocolate,
  "citrus": images.citrus,
  "coffee": images.coffee,
  "cookie": images.cookie,
  "cream": images.cream,
  "diy": images.diy,
  "green-tea": images.green_tea,
  "hazelnut": images.hazelnut,
  "honey": images.honey,
  "lemon": images.lemon,
  "mango": images.mango,
  "matcha": images.matcha,
  "minty": images.minty,
  "mocha": images.mocha,
  "raspberry": images.raspberry,
  "reg-large": images.reg_large,
  "reg-medium": images.reg_medium,
  "shaker": images.shaker,
  "strawberry": images.strawberry,
  "zen-tea": images.zen_tea
};

const HomeDrink = ({ drink }) => {
  const navigation = useNavigation();
  const ingredient = drink.ingredients.find(ingredient => drinkMap[ingredient]);
  const image = ingredient ? drinkMap[ingredient] : images['bubble-tea'];

  const handlePress = () => {
    navigation.navigate('Drink', { drink })
  }

  return (
    <View style={ localStyles.container }>
      <TouchableOpacity style={ localStyles.drinkContainer } onPress={ handlePress }>
        <Image source={image} style={ localStyles.image }/>
        <View style={ localStyles.drinkInfo }>
          <Text style={ localStyles.name }>{drink.name}</Text>
          <Text style={ localStyles.store }>{drink.store}</Text>
          <Text style={ localStyles.price }>${drink.price.toFixed(2)}</Text>
        </View>
        <View style={ localStyles.dealContainer }>
          <Text style={ localStyles.deal }>+{(drink.price * 10).toFixed(0)} Bubbles</Text>
          <Icon name="sell" size={30} color={ colors.primary } />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const localStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  drinkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.white,
    marginBottom: 20,
    width: '90%',
    borderRadius: 20,

    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
  },
  dealContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  drinkInfo: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontFamily: 'Chewy-Regular',
    fontSize: 25,
  },
  store: {
    fontFamily: 'Chewy-Regular',
    fontSize: 20,
  },
  price: {
    fontFamily: 'Chewy-Regular',
    fontSize: 15,
  },
  deal: {
    fontFamily: 'Chewy-Regular',
    fontSize: 10,
  },
})

export default HomeDrink;