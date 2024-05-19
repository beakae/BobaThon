import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import styles, { colors } from '../styles/globalStyles';
import { Navbar, Footer, HomeDrink, Search } from '../components';

const Drinks = () => {
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const res = await fetch(`http://10.0.0.153:4000/api/boba/drinks`)
  
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
  
        const data = await res.json()
        setDrinks(data)
      } catch (error) {
        console.error('Failed to fetch drinks', error)
      }
    }

    fetchDrinks()
  }, [])

  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
        <Navbar />
        <ScrollView style={{ flex: 1, backgroundColor: colors.secondary }}>
          <Search />
          <View>
            { drinks.map(drink => <HomeDrink key={ drink._id } drink={ drink } />) }
          </View>  
        </ScrollView>
        <Footer />
      </SafeAreaView>
  );
}

export default Drinks;
