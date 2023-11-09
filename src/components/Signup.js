import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const Signup = ({navigation}) => {
  const [phoneno, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [district, setDistrict] = useState('');
  const [mCouncil, setMC] = useState('');

  const handleSignup = () => {
    
      Alert.alert('Success', 'Account created successfully');
      navigation.navigate('Otp');
    
  };

  return (
    <View style={styles.container}>
       
      <View style={styles.login}>

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneno}
        onChangeText={setPhoneNo}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="District"
        value={district}
        onChangeText={setDistrict}
      />

      <TextInput
        style={styles.input}
        placeholder="Municipal council"
        value={mCouncil}
        onChangeText={setMC}
      />


      <TouchableOpacity onPress={handleSignup} style={styles.button}>
       <Image style={styles.login_img} source={require('../images/signup.png')} /> 
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginLink}>
        <Text style={styles.loginText}>Already have an account ? Login</Text>
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
    color: '#fff'
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
    height: 35,
    fontSize: 18,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'gray',
    paddingLeft: 16,
    paddingTop: 5,
    marginBottom: '5%',
    marginTop: '-2%'
  },
  loginText : {
    marginTop: -26,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#044fbf',
    marginTop: '4%'
  },
  
  login_img : {
    width: 200,
    height: 100,
    marginTop: '10%'
  },
  loginLink : {
  
  },
});

export default Signup;