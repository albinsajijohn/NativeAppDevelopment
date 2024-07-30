// screens/AuthScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../config/firebase';

const AuthScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    setIsLoading(true);

    if (isSignUp) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          Alert.alert('Success', 'Account created! You can now log in.');
          setIsSignUp(false);
          setIsLoading(false);
        })
        .catch((error) => {
          Alert.alert('Sign Up Error', error.message);
          setIsLoading(false);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigation.navigate('Welcome');
          setIsLoading(false);
        })
        .catch((error) => {
          Alert.alert('Login Error', error.message);
          setIsLoading(false);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{isSignUp ? 'SIGN UP' : 'LOGIN'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title={isLoading ? (isSignUp ? 'Creating Account...' : 'Logging In...') : (isSignUp ? 'SIGN UP' : 'LOGIN')}
        onPress={handleAuth}
        disabled={isLoading}
      />
      <Button
        title={isSignUp ? 'Already have an account? LOGIN' : 'Need an account? SIGN UP'}
        onPress={() => setIsSignUp(!isSignUp)}
        disabled={isLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'indigo'
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',   
    color: 'white',    
    marginBottom: 20,
   
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default AuthScreen;
