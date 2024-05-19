import React, { useState, useContext } from 'react';
import { SafeAreaView, TouchableOpacity, View, Text, Image, TextInput, StyleSheet } from 'react-native';
import { colors } from '../styles/globalStyles';
import { UserContext } from '../contexts/UserContext';

const Login = ({ navigation }) => {
  const { setUser } = useContext(UserContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await fetch('http://10.0.0.153:4000/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log('Logged in successfully', data);
      setUser(data);
      navigation.navigate('Deals')
    }
    catch (error) {
      console.error('Failed to log in', error.message)
    }
  }

  return (
    <View style={{ backgroundColor: colors.secondary, flex: 1 }}>
      <SafeAreaView>
        <Image source={require('../assets/logo.png')} style={ localStyles.logo } resizeMode="contain"/>
        <View>
          <TextInput
            style={ localStyles.input }
            placeholder="Username"
            value={ username }
            onChangeText={ setUsername }
          />
          <TextInput
            secureTextEntry
            style={ localStyles.input }
            placeholder="Password"
            value={ password }
            onChangeText={ setPassword }
          />
        </View>
        <TouchableOpacity style={ localStyles.button } onPress={ handleLogin }>
          <Text style={ localStyles.buttonText }>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={ localStyles.register }>Don't have an account? Register here</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const localStyles = StyleSheet.create({
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
  register: {
    color: colors.primary,
    textAlign: 'center',
    fontSize: 15,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 50,
  }
})

export default Login;