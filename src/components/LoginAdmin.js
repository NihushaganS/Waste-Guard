import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet,TouchableOpacity, Image } from 'react-native';

const LoginAdmin = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    
      Alert.alert('Success', 'Logged in successfully');
      navigation.navigate('HomeAdmin');
    
  };

  return (
    <View style={styles.container}>

      <Text style={styles.app}> Waste Guard</Text>

      <View style={styles.login}>
      <TextInput
        style={styles.input}
        placeholder="User name"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
       <Image style={styles.login_img} source={require('../images/login.png')} /> 
      </TouchableOpacity>

      
    </View>
      <View>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.loginLink}>
        <Text style={styles.loginText}>Can't remember password ?</Text>
      </TouchableOpacity>
      </View>
 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems : 'center',
    padding: 16,
    backgroundColor: '#339c4f',
    height: '100%',
    width: '100%',
  },
  app : {
    textAlign: 'center',
    fontSize: 55,
    fontStyle: 'normal',
    marginBottom: '15%',
    marginTop: '10%',
    color: '#fff',
    fontWeight: '900'
  },
  login : {
    flex: 1,
    backgroundColor: '#339c4f',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    width: '90%',
    height: '20%',
    marginBottom: 10,
    marginTop: 10
  },
  input : {
    width: '90%',
    color: 'black',
    backgroundColor: 'white',
    height: 40,
    fontSize: 18,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'gray',
    paddingLeft: 16,
    paddingTop: 5,
    marginBottom: '15%',
  },
  loginText : {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#044fbf',
    marginBottom: 10
  },
  
  login_img : {
  marginTop: -50
  },
  loginLink : {
  
  },
});

export default LoginAdmin;