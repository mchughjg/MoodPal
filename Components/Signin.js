import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SignIn = ({ navigation }) => {
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    
    checkLoginStatus();
  }, []);

    const checkLoginStatus = async () => {
    if (isLoggedIn) { 
      navigation.navigate('Dashboard');
    }
  };

  const handleSignIn = () => {
    console.log('Signing in with:', username, password);
    setIsLoggedIn(true);
    navigation.navigate('Dashboard');
  };

  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const navigateToSupport = () => {
    navigation.navigate('Support');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>
      <Button title="Sign In" onPress={handleSignIn} />
      <Button title="Sign Up" onPress={navigateToSignUp} color="#1e90ff" />
      <Button title="Support" onPress={navigateToSupport} color="#1e90ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});

export default SignIn;