import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={ localStyles.footerContainer }>
      <TouchableOpacity style={ localStyles.iconContainer } onPress={() => navigation.navigate('Deals')}>
        <Icon name='home' size={30} color={ colors.white } />
        <Text style={ localStyles.iconText }>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ localStyles.iconContainer } onPress={() => navigation.navigate('Drinks')}>
        <Icon name='coffee' size={30} color={ colors.white } />
        <Text style={ localStyles.iconText }>Drinks</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ localStyles.iconContainer }>
        <Icon name='qr-code' size={30} color={ colors.white } />
        <Text style={ localStyles.iconText }>Scan</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ localStyles.iconContainer } onPress={() => navigation.navigate('Login')}>
        <Icon name='person' size={30} color={ colors.white } />
        <Text style={ localStyles.iconText }>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const localStyles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: 10,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    color: colors.white,
    fontFamily: 'Chewy-Regular',
    fontSize: 15,
  },
})

export default Footer;