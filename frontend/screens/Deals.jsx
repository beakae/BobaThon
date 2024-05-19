import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import styles, { colors } from '../styles/globalStyles';
import { Navbar, Footer, Search } from '../components';
import images from '../assets/imgDeal/images'

const dealsMap =
{
  "mystery-drink": images.deal0,
  "tea-drink": images.deal1,
  "coffee-drink": images.deal2,
  "mango-citrus-drink": images.deal3,
  "bogo-drink": images.deal4,
  "wc-drink": images.deal5,
};
const Deals = ({ route }) => {
  // const { user } = route.params;
  // const bubbles = user.bubbles;
  //Image source={ images['regLarge'] } style={ localStyles.optionImage }
  const bubbles = 100;
  
  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
      <Navbar />
      <ScrollView style={{ flex: 1, backgroundColor: colors.secondary }}>
        <View style={{     
            borderBottomColor: colors.white,
            borderBottomWidth: 2,
            width: '90%',
            alignSelf: 'center',
            marginBottom: 10, 
            marginTop: 30,
          }}> 
          <Text style={styles.pointsText}>0 Points</Text>
          <View style={styles.pointsMeter}>
          <View style={styles.pointsFill}></View>
          </View>
        </View>

        <View style = { localStyles.dealCard }>
          <Text style = { localStyles.leftText }>Mystery Drink</Text>
          <Image 
            source = { images['deal0'] }
            style = { localStyles.dealImage }
            resizeMode = "contain"
          />
          <Text style = { localStyles.rightText }>
          The reward is in the risk! Take a chance on a mystery drink, and purchase with 75% discount!
          </Text>
        </View>

        <View style = { localStyles.dealCard }>
          <Text style = { localStyles.leftText }>Matcha Drink with Boba</Text>
          <Image 
            source = { images['deal1'] }
            style = { localStyles.dealImage }
            resizeMode = "contain"
          />
          <Text style = { localStyles.rightText }>
          Need a pick-me-up with a twist? Choose any matcha drink with boba for 20% of the price!
          </Text>
        </View>  

        <View style = { localStyles.dealCard }>
          <Text style = { localStyles.leftText }>Mystery Drink on Discount</Text>
          <Image 
            source = { images['deal2'] }
            style = { localStyles.dealImage }
            resizeMode = "contain"
          />
          <Text style = { localStyles.rightText }>
          The reward is in the risk! Take a chance on a mystery drink, and purchase with 75% discount!
          </Text>
        </View>

        <View style = { localStyles.dealCard }>
          <Text style = { localStyles.leftText }>Try the Mango-Citrus Infusion</Text>
          <Image 
            source = { images['deal3'] }
            style = { localStyles.dealImage }
            resizeMode = "contain"
          />
          <Text style = { localStyles.rightText }>
          With a jolt of caffeine and infusion of citrus with mango, refresh in the heat! 30% discount for
          those who purchase within one week of activation.
          </Text>
        </View>

        <View style = { localStyles.dealCard }>
          <Text style = { localStyles.leftText }>Buy One Get One Free</Text>
          <Image 
            source = { images['deal4'] } 
            style = { localStyles.dealImage } 
            resizeMode="contain"
          />
          <Text style = { localStyles.rightText }>
          Go to any participating store, and buy two drinks for the price of one!
          </Text>
        </View>

        <View style = { localStyles.dealCard }>
          <Text style = { localStyles.leftText }>Frappé Drink with Free Whipped Cream</Text>
          <Image
            source = { images['deal5'] }
            style = { localStyles.dealImage }
            resizeMode = "contain"
          />
          <Text style = { localStyles.rightText }>
          Why sacrifice whipped cream with boba? With this promotion, you can have both with a 35% discount!
          </Text>
        </View>

      </ScrollView>
      <Footer />
    </SafeAreaView>
  )
}

const localStyles = StyleSheet.create({

  pointsText:
  {
    fontSize: 17, 
    fontWeight: 'bold',
  },

  pointsMeter: {
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginTop: 10,
    overflow: 'hidden',
  },

  pointsFill: {
    height: '100%',
    width: '50%',
    backgroundColor: 'brown',
  },

  dealCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: colors.white,

    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,

    borderRadius: 10,
  },

  dealImage: {
    width: 120, 
    height: 150, 
    borderRadius: 10,
  },

  leftText: {
    fontFamily: 'Chewy-Regular',
    fontSize: 20,
    flex: 1,
    textAlign: 'left',
  },

  rightText: {
    fontFamily: 'Chewy-Regular',
    fontSize: 15,
    flex: 1,
    margin: 10,
    textAlign: 'right'
  }
});

export default Deals;

