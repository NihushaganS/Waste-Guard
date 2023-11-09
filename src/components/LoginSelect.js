import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet,TouchableOpacity, Image } from 'react-native';

const LoginSelect = ({navigation}) => {
  

  

  return (
    <View style={styles.container}>
      
        <Text style={styles.app}> Waste Guard</Text>
        <View style={styles.admin}>
        <Text style={styles.txt}> Login as </Text>
        <Text style={styles.s_txt}>Administrator</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginAdmin')} >
        <Image style={styles.login_img} source={require('../images/login.png')} /> 
        </TouchableOpacity>
        </View>

        <View style={styles.admin}>
        <Text style={styles.txt}> Login as</Text>
        <Text style={styles.s_txt}>Truck driver</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginDriver')} >
          <Image style={styles.login_img} source={require('../images/login.png')} /> 
        </TouchableOpacity>
        </View>

        <View style={styles.admin}>
        <Text style={styles.txt}> Login as</Text>
        <Text style={styles.s_txt}>User</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} >
         <Image style={styles.login_img} source={require('../images/login.png')} /> 
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
  
  
 
  admin : {
    width: 300,
    height: 200,
    textAlign: 'center',
    marginTop: '2%',
    marginLeft: '10%'
  },

  txt : {
    fontSize: 30,
    marginBottom: 3,
    marginTop: 10,
    fontStyle: 'italic',
    textAlign: 'auto',
    color: 'black'
  },
  s_txt : {
    fontSize: 25,
    marginBottom: 5,
    marginTop: 0,
    fontStyle: 'italic',
    textAlign: 'justify',
    marginLeft: '1%',
    color: 'white'
  },
  
  login_img : {
    width: 100,
    height: 100,
    marginLeft: '55%',
    marginTop: '-33%'
  },

});

export default LoginSelect;