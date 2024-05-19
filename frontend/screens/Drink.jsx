import React, { useContext } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import styles, { colors } from '../styles/globalStyles';
import { Navbar, Footer, Search } from '../components';
import images from '../assets/img/images';
import { UserContext } from '../contexts/UserContext';

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
  "zen-tea": images.zen_tea,
  "reg-small": images.reg_small,
  "reg-medium": images.reg_medium,
  "reg-large": images.reg_large,
};

const Drink = ({ route }) => {
  const { user, setUser } = useContext(UserContext);

  const { drink } = route.params;
  const ingredient = drink.ingredients.find(ingredient => drinkMap[ingredient]);
  const image = ingredient ? drinkMap[ingredient] : images['bubble-tea'];

  const handlePress = async () => {
    try {
      const response = await fetch(`http://10.0.0.153:4000/api/user/users/${user._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cartName: drink.name,
          cartStore: drink.store,
          cartPrice: drink.price
        }),
      });
  
      if (!response.ok) {
        const error = new Error('Failed to add item to cart');
        error.status = response.status;
        error.statusText = response.statusText;
        throw error;
      }
  
      const updatedUser = await response.json();
      setUser(updatedUser);
    } catch (error) {
      console.error(error);
      alert('Failed to add item to cart');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
      <Navbar />
        <View style={{ flex: 1, backgroundColor: colors.white }}>
          <View>
            <Image 
              source={ image }               
              style={{ width: "100%", height: 200, alignSelf: 'center'}}
              resizeMode="contain"
            />
            <Text style={ localStyles.name }>{drink.name}</Text>
            <Text style={ localStyles.store }>{drink.store}</Text>
          </View>
          <View>
            <Text style={ localStyles.subOption }>Size Options</Text>
            <View style={ localStyles.line }></View>
            <View  style={ localStyles.optionContainer }>
              <View style={ localStyles.optionSubContainer }>
                <Image source={ images['regSmall'] } style={ localStyles.optionImage } />
                <Text style={ localStyles.optionName }>Small</Text>
                <Text style={ localStyles.optionPrice }>$4.49</Text>
              </View>
              <View style={ localStyles.optionSubContainer }>
                <Image source={ images['regMedium'] } style={ localStyles.optionImage } />
                <Text style={ localStyles.optionName }>Medium</Text>
                <Text style={ localStyles.optionPrice }>${drink.price.toFixed(2)}</Text>
              </View>
              <View style={ localStyles.optionSubContainer }>
                <Image source={ images['regLarge'] } style={ localStyles.optionImage } />
                <Text style={ localStyles.optionName }>Large</Text>
                <Text style={ localStyles.optionPrice }>$7.99</Text>
              </View>
            </View>
            <View style={{ marginTop: 10, }}>
              <Text style={ localStyles.subOption }>Ingredients</Text>
              <View style={ localStyles.line }></View>
              <View style={{ flexDirection: "row" }}>
              {drink.ingredients.map((ingredient, index) => (
                <Text key={index} style={localStyles.subOption}>{ingredient}</Text>
              ))}
              </View>
            </View>
            <TouchableOpacity style={ localStyles.button } onPress={ handlePress } >
              <Text style={ localStyles.buttonText }>Add to Cart</Text>
            </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </SafeAreaView>
  )
}

const localStyles = StyleSheet.create({
  name: {
    fontSize: 25,
    textAlign: 'center',
    margin: 2.5,
    fontFamily: 'Chewy-Regular',
    },
  store: {
    fontSize: 20,
    textAlign: 'center',
    margin: 2.5,
    fontFamily: 'Chewy-Regular',
  },
  subOption: {
    fontSize: 15,
    margin: 2.5,
    paddingLeft: 15,
    fontFamily: 'Chewy-Regular',
  },
  optionImage: {
    width: 40,
    height: 40,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'nowrap', 
    margin: 2.5,
  },
  optionSubContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  optionName: {
    fontSize: 15,
    fontFamily: 'Chewy-Regular',
  },
  optionPrice: {
    fontSize: 15,
    fontFamily: 'Chewy-Regular',
  },
  line: {
    borderBottomColor: colors.secondary,
    borderBottomWidth: 2,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.secondary, 
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 60,
    marginHorizontal: 50,

  },
  buttonText: {
    color: 'white', 
    fontSize: 16,
    fontFamily: 'Chewy-Regular',
  },
})

export default Drink;