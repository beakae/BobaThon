import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, Image } from 'react-native';
import { colors } from '../styles/globalStyles';
import { UserContext } from '../contexts/UserContext';

const Signup = ({ navigation }) => {
  const { setUser } = useContext(UserContext);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    try {
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }

      const res = await fetch('http://10.0.0.153:4000/api/user/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log('Signed up successfully', data);
      setUser(data);
      navigation.navigate('Deals')
    } 
    catch (error) {
      console.error('Failed to sign up', error.message)
    }
  }

  return (
    <View style={{ backgroundColor: colors.secondary, flex: 1 }}>
      <SafeAreaView>
        <Image source={require('../assets/logo.png')} style={ localStyles.logo } resizeMode="contain"/>
        <TextInput
          style={[localStyles.input, localStyles.textInput]}
          placeholder="Username"
          value={ username }
          onChangeText={ setUsername }
        />
        <TextInput
          style={[localStyles.input, localStyles.textInput]}
          placeholder="Email"
          value={ email }
          onChangeText={ setEmail }
        />
        <TextInput
          secureTextEntry
          style={[localStyles.input, localStyles.textInput]}
          placeholder="Password"
          value={ password }
          onChangeText={ setPassword }
        />
        <TextInput
          secureTextEntry
          style={[localStyles.input, localStyles.textInput]}
          placeholder="Confirm Password"
          value={ confirmPassword }
          onChangeText={ setConfirmPassword }
        />
        <TouchableOpacity style={ localStyles.button } onPress={ handleSignup }>
          <Text style={ localStyles.buttonText }>Sign Up</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  )
}

const localStyles = StyleSheet.create({
    button: {
      backgroundColor: colors.primary,
      padding: 10,
      borderRadius: 5,
      marginVertical: 15,
      marginHorizontal: 50,
    },
    buttonText: {
      color: colors.white,
      textAlign: 'center',
      fontSize: 15,
    },
    input: {
      backgroundColor: colors.white,
      borderWidth: 1,
      borderColor: "#b5b5b5",
      padding: 10,
      paddingLeft: 15,
      borderRadius: 5,
      marginVertical: 15,
      fontSize: 15,
      marginHorizontal: 50,
      width: '75%',
    },
    logo: {
      width: 200,
      height: 200,
      alignSelf: 'center',
      marginVertical: 50,
    },
    item: {
      flexDirection: 'row',
      padding: 10,
      fontSize: 18,
      height: 44,
    }
  })

export default Signup;