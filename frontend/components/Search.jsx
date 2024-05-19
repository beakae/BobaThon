import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { colors } from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';

const Search = () => {
  const [search, setSearch] = useState('')
  
  return (
    <View style={ localStyles.searchContainer }>
      <Icon name='search' size={30} color={ colors.primary } />
      <TextInput
        placeholder='Search'
        value={ search }
        onChangeText={ setSearch }
        style={ localStyles.searchInput }
      />
      <Menu>
        <MenuTrigger>
          <Icon name='tune' size={30} color={ colors.primary } />
        </MenuTrigger>
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
      </Menu>
    </View>
  )
}

const localStyles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: colors.white,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  searchInput: {
    color: "black",
    fontFamily: 'Chewy-Regular',
    fontSize: 20,
    flex: 1,
    marginLeft: 10,
  },
})

export default Search;