import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';

const WelcomeScreen = ({ navigation }) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigation.navigate('Auth');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the App</Text>
      <Text style={styles.userInfo}>Hello, {user?.email}</Text>
      <Button title="Log Out" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'skyblue',
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  userInfo: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
});

export default WelcomeScreen;
