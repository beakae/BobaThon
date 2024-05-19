import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Menu, MenuOptions, MenuOption } from 'react-native-popup-menu';

const FacetedSearch = () => {

  return (
    <MenuOptions>
      <MenuOption onSelect={() => alert('Search by location')}>
        <Text>Search by location</Text>
      </MenuOption>
      <MenuOption onSelect={() => alert('Search by deal')}>
        <Text>Search by deal</Text>
      </MenuOption>
      <MenuOption onSelect={() => alert('Search by price')}>
        <Text>Search by price</Text>
      </MenuOption>
  </MenuOptions>
  )
}

const localStyles = StyleSheet.create({

})

export default FacetedSearch;