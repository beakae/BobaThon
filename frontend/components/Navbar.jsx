import React, { useContext, useState } from 'react';
import { SafeAreaView, View, Text, Image, StatusBar, TouchableOpacity, StyleSheet } from 'react-native';
import styles, { colors } from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { UserContext } from '../contexts/UserContext';
import Modal from 'react-native-modal';
import Cart from './Cart';

const Navbar = () => {
  const { user } = useContext(UserContext);
  const [isCartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([
    { name: 'Mango Lassi', company: 'Fruitalicious', price: 5.55 },
    { name: 'El Diablo', company: 'Fruitalicious', price: 5.35 },
  ]);
  
  return (
    <View style={{ backgroundColor: colors.primary }}>
      <StatusBar backgroundColor={ colors.primary } barStyle="light-content" />
      <SafeAreaView>
        <View style= { localStyles.navbarContainer } >
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={require('../assets/logo.png')}
              style={{ width: 70, height: 50 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={ localStyles.navbarText }>{user ? user.bubbles : '0'} Bubbles</Text>
          <View>
            <Icon.Button
              name="shopping-cart"
              size={30}
              backgroundColor={colors.primary}
              onPress={() => setCartVisible(true)}
            >
            </Icon.Button>

            <Modal
              isVisible={isCartVisible}
              onBackdropPress={() => setCartVisible(false)}
              style={styles.modal}
            >
              <Cart items={cartItems} />
            </Modal>
          </View>
        </View>
      </SafeAreaView>
      
    </View>
  );
}

const localStyles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    position: 'relative',
  },

  navbarText: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'Chewy-Regular',
    fontSize: 25,
  },
})

export default Navbar;