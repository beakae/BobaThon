import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../styles/globalStyles';
import { UserContext } from '../contexts/UserContext';

const ShoppingCart = () => {
  const { user, setUser } = useContext(UserContext);

  const handlePress = async () => {
    try {
      const total = (user.cartPrice * 10).toFixed(2);
  
      // Update the user state
      setUser(prevUser => ({
        ...prevUser,
        bubbles: prevUser.bubbles + Number(total),
      }));
  
      // Call the API
      const response = await fetch(`http://10.0.0.153:4000/api/user/users/${user._id}`, {
        method: 'Patch',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bubbles: total }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response from server:', errorData);
      }

      // Clear the cart
      setUser(prevUser => ({
        ...prevUser,
        cartName: '',
        cartStore: '',
        cartPrice: 0,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      {user.cartName && user.cartStore && user.cartPrice ? (
        <View style={styles.item}>
          <Text style={styles.subItem}>{user.cartName} @ {user.cartStore}</Text>
          <Text style={styles.subItem}>${user.cartPrice}</Text>
        </View>
      ) : (
        <Text style={styles.subItem}>No items in cart</Text>
      )}
      <Text style={styles.total}>Total: ${user.cartPrice ? user.cartPrice.toFixed(2) : '0.00'}</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.secondary,
    borderRadius: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Chewy-Regular',
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  subItem: {
    fontFamily: 'Chewy-Regular',
    fontSize: 15,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
    width: '90%',
  },
  buttonText: {
    color: colors.white,
    fontFamily: 'Chewy-Regular',
    fontSize: 20,
    textAlign: 'center',
  },
  total: {
    fontFamily: 'Chewy-Regular',
    fontSize: 20,
    textAlign: 'right',
  },
});

export default ShoppingCart;