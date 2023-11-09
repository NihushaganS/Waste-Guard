import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet,TouchableOpacity, Image } from 'react-native';

const HomeAdmin = ({navigation}) => {
  const [phoneno, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');

  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.app}> Waste Guard</Text>
      <Image style={styles.user} source={require('../images/user.png')} /> 
      </View>

    <View style={styles.box}>
      
      <View style={styles.box1}>
        
        <Text style={styles.txt}>Track the trucks</Text>
        <TouchableOpacity onPress={() => navigation.navigate('TrackAdmin')}><Image style={styles.img} source={require('../images/g_truck.png')} /></TouchableOpacity>
        
      </View>

      <View style={styles.box2}>
        <Text style={styles.txt}>Review collection requests</Text>
        <TouchableOpacity onPress={() => navigation.navigate('HomeAdmin')}><Image style={styles.img} source={require('../images/schedule.png')} /></TouchableOpacity>
      </View>

      <View style={styles.box1}>
        <Text style={styles.txt}>Review recycling</Text>
        <TouchableOpacity onPress={() => navigation.navigate('HomeAdmin')}><Image style={styles.img} source={require('../images/recycle.png')} /></TouchableOpacity>
      </View>

      <View style={styles.box2}>
        <Text style={styles.txt}>Notify users</Text>
        <TouchableOpacity onPress={() => navigation.navigate('HomeAdmin')}><Image style={styles.img} source={require('../images/notify.png')} /></TouchableOpacity>
      </View>
      <View style={styles.box3}>
        <Text style={styles.txt}>Assign driver </Text>
        <TouchableOpacity onPress={() => navigation.navigate('HomeAdmin')}><Image style={styles.img} source={require('../images/add.png')} /></TouchableOpacity>
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
    marginTop: -110,
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
    marginTop: 60,
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
  box3 : {
  
    backgroundColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    width: '50%',
    height: '25%',
    marginTop: 60,
    marginLeft: 80
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
    width: 80,
    height: 80
  },
  txt : {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
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
    marginTop: 20
  }
});

export default HomeAdmin;