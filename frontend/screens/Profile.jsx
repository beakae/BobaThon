import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { Navbar, Footer } from '../components';
import { colors } from '../styles/globalStyles';

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
    <Navbar />
    <ScrollView style={{ flex: 1, backgroundColor: colors.secondary }}>
      <View>
        <Text>Profile</Text>
      </View>  
    </ScrollView>
    <Footer />
  </SafeAreaView>
  );
}

export default Profile;