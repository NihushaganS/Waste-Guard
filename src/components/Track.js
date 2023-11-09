import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet,TouchableOpacity, Image } from 'react-native';

const Track = ({navigation}) => {
  

  

  return (
    <View style={styles.container}>
    <View style={styles.header}>
      
      <Text style={styles.app}> Waste Guard</Text>
      <Image style={styles.user} source={require('../images/user.png')} /> 
    </View>
      <View style={styles.main}>
    <TouchableOpacity onPress={() => navigation.navigate('Route01')} style={styles.loginLink}>
      <View style={styles.route}>
        <Text style={styles.title}>Route 01</Text>
        <Text style={styles.date}>30th September 2023, Saturday</Text>
        <Text style={styles.path}>Batticaloa - Arayampathy</Text>
        <Image style={styles.truck} source={require('../images/truck.png')}/>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Track')} style={styles.loginLink}>
      <View style={styles.route}>
        <Text style={styles.title}>Route 02</Text>
        <Text style={styles.date}>30th September 2023, Saturday</Text>
        <Text style={styles.path}>Batticaloa - Vavunativu</Text>
        <Image style={styles.truck} source={require('../images/truck.png')}/>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Track')} style={styles.loginLink}>
      <View style={styles.route}>
        <Text style={styles.title}>Route 03</Text>
        <Text style={styles.date}>3rd October 2023, Tuesday</Text>
        <Text style={styles.path}>Batticaloa - Mamangam</Text>
        <Image style={styles.truck} source={require('../images/truck.png')}/>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Track')} style={styles.loginLink}>
      <View style={styles.route}>
        <Text style={styles.title}>Route 04</Text>
        <Text style={styles.date}>3rd October 2023, Tuesday</Text>
        <Text style={styles.path}>Batticaloa - Urani</Text>
        <Image style={styles.truck} source={require('../images/truck.png')}/>
      </View>
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
  header: {
    marginTop: -200,
    width: '110%',
    height: '7%',
    backgroundColor: 'darkgray',
    position: 'relative',
    
  },
  app : {
    textAlign: 'center',
    fontSize: 35,
    fontStyle: 'normal',
    marginBottom: '0%',
    marginTop: 5,
    color: 'black',
    marginLeft: -200,
    fontWeight: '900'
  },
  
  user: {
    width: 40,
    height: 40,
    marginTop: -43,  
    marginLeft: 360
  },
  
  txt : {
    fontSize: 23,
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
    fontStyle: 'italic'
  },
 
  box: {
    height: '80%',
    width: '80%',
    marginTop: 80
  },
  route : {
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    width: 400,
    height: 100,
    marginTop: 30,
    marginLeft: 0,
    marginBottom: 5
  },
  title : {
    fontSize: 35,
    marginBottom: 8,
    marginTop: 0,
    marginLeft: -100,
    fontStyle: 'normal',
    textAlign: 'center',
    color: 'black',
    fontWeight: '600'
  },
  path : {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: -100,
    marginTop: 5,
    fontStyle: 'normal',
    textAlign: 'center',
    color: 'black',
    fontWeight: '600'
  },
  truck : {
    height: 90,
    width: 90,
    marginLeft:'70%',
    marginTop: '-25%'
  },
  main : {
    
  },
  login_img : {
  
  },
  date : {
    fontSize: 20,
    marginBottom: -5,
    marginTop: -10,
    marginLeft: -100,
    fontStyle: 'normal',
    textAlign: 'center',
    color: 'black'
  },
});

export default Track;