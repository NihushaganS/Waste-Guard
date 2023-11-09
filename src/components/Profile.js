import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet,TouchableOpacity, Image } from 'react-native';

const Profile = ({navigation}) => {
  const [phoneno, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');

  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.app}> Waste Guard</Text>
      
      </View>

    <View style={styles.box}>
      
      <View style={styles.box1}>
        
        <Text style={styles.txt}>Change phone number</Text>
        <TouchableOpacity ><Image style={styles.img} source={require('../images/number.png')} /></TouchableOpacity>
        
      </View>

      <View style={styles.box2}>
        <Text style={styles.txt}>Change e-mail</Text>
        <TouchableOpacity ><Image style={styles.img} source={require('../images/mail.png')} /></TouchableOpacity>
      </View>

      <View style={styles.box1}>
        <Text style={styles.txt}>Change District</Text>
        <TouchableOpacity ><Image style={styles.img} source={require('../images/dis.png')} /></TouchableOpacity>
      </View>

      <View style={styles.box2}>
        <Text style={styles.txt}>Change Municipal council</Text>
        <TouchableOpacity ><Image style={styles.img} source={require('../images/mc.png')} /></TouchableOpacity>
      </View>
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
    marginTop: -50,
    width: '110%',
    height: '8%',
    backgroundColor: 'darkgray'
  },
  app : {
    textAlign: 'center',
    fontSize: 35,
    fontStyle: 'normal',
    marginBottom: '4%',
    marginTop: '1%',
    color: 'black',
    marginLeft: '-50%',
    fontWeight: '900'
  },
  box1 : {
  
    backgroundColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    width: '50%',
    height: '25%',
    marginTop: 100,
    marginLeft: -30
  },
  
  box2 : {
    
    backgroundColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    width: '50%',
    height: '25%',
    marginTop: -160,
    marginLeft: 190
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
    padding: 10,
    marginBottom: 25,
  },
  loginText : {
    marginTop: -26,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#044fbf',
  },
  button : {
    width: 200,
    height: 40,
    backgroundColor: '#6de8af',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  img : {
    width: 70,
    height: 70,
    marginTop: -10
  },
  txt : {
    fontSize: 20,
    marginBottom: 8,
    marginTop: 6,
    textAlign: 'center',
    fontStyle: 'italic'
  },
  user: {
    width: 40,
    height: 40,
    marginTop: '-11%',
    marginLeft: '85%'
  },
  box: {
    height: '80%',
    width: '80%',
    marginTop: 80
  }
});

export default Profile;
