import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet,TouchableOpacity, Image } from 'react-native';

const Language = ({navigation}) => {
  

  

  return (
    <View style={styles.container}>
      
        <Text style={styles.app}> Waste Guard</Text>
        <View style={styles.select}>
          <Text style={styles.txt}>Select your language</Text>
          <Text style={styles.txt}>ඔබේ භාෂාව තෝරන්න</Text>
          <Text style={styles.txt}>உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்</Text>
        </View>
        
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
          <View style={styles.language}>
         <Image style={styles.language0} source={require('../images/english.png')}/>
         </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
          <View style={styles.language}>
          <Image style={styles.language0} source={require('../images/sinhala.png')}/>
         </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
          <View style={styles.language}>
          <Image style={styles.language0} source={require('../images/tamil.png')}/>
         </View>
        </TouchableOpacity>

      
     
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
    marginTop: -26,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#044fbf',
    marginBottom: '5%'
  },
  
  login_img : {
  
  },
  loginLink : {
  
  },
  select : {
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    width: 400,
    height: 150,
    marginTop: 10,
    marginLeft: 0,
    marginBottom: 5
  },
  txt : {
    fontSize: 18,
    marginBottom: 4,
    marginTop: 6,
    marginLeft: 0,
    fontStyle: 'normal',
    textAlign: 'center',
    color: 'black'
  },
  s_txt : {

  },
  language0 : {
    width: 400,
    height: 60,
    marginTop: 30
  },
  language : {

  },

});

export default Language;