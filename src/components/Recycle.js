import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet,TouchableOpacity, Image } from 'react-native';

const Recycle = ({navigation}) => {
  const [type, setType] = useState('');
  const [weight, setWeight] = useState('');

  

  return (
    <View style={styles.container}>
    <View style={styles.header}>
      
      <Text style={styles.app}> Waste Guard</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}><Image style={styles.user} source={require('../images/user.png')} /></TouchableOpacity> 
    </View>
      <View style={styles.main}>
      <Image style={styles.photo} source={require('../images/photo.jpg')}/>
    </View>
    <Text style={styles.ftxt}>October-December 2023</Text>
    <View style={styles.detail}>
      
      <Image style={styles.line} source={require('../images/line.png')}/>
    </View>

    <View style={styles.login}>
      <TextInput
        style={styles.input}
        placeholder="Type"
        value={type}
        onChangeText={setType}
      />
      <TextInput
        style={styles.input}
        placeholder="Weight"
        value={weight}
        onChangeText={setWeight}
        secureTextEntry
      />
       <Text style={styles.stxt}>Upload images</Text>
      <Image style={styles.img} source={require('../images/photo.png')} /> 
       <Image style={styles.submit} source={require('../images/submit.png')} /> 
      

       <View style={styles.detail1}>
      <Text style={styles.txt}>Unlock your priority pass</Text>
      <Image style={styles.unlock} source={require('../images/unlock.png')}/>
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
    marginTop: -20,
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
    marginTop: -40,  
    marginLeft: 360
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
    marginBottom: '10%',
  },
  loginText : {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#044fbf',
    marginBottom: 10
  },
  
 
  line : {
    height: 100,
    width: 400,
    marginLeft:'0%',
    marginTop: '3%'
  },
  
  txt : {
    fontSize: 22,
    marginBottom: 0,
    marginTop: 0,
    textAlign: 'center',
    fontStyle: 'normal'
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
    marginTop: 10,
    marginLeft: 0,
    marginBottom: 5
  },
  title : {
    fontSize: 35,
    marginBottom: 8,
    marginTop: 10,
    marginLeft: -40,
    fontStyle: 'normal',
    textAlign: 'center',
    color: 'black'
  },
  path : {
    fontSize: 20,
    marginBottom: 5,
    marginTop: 5,
    fontStyle: 'normal',
    textAlign: 'center',
    color: 'black'
  },
  detail : {
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    width: 350,
    height: 45,
    marginTop: 40,
    marginLeft: 0,
    marginBottom: 0
  },
  detail1 : {
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    width: 350,
    height: 80,
    marginTop: 10,
    marginLeft: 0,
    marginBottom: 5
  },
  truck : {
    height: 90,
    width: 90,
    marginLeft:'70%',
    marginTop: '-25%'
  },
  unlock : {
    height: 50,
    width: 50,
    marginLeft:'0%',
    marginTop: '0%'
  },
  submit : {
    height: 50,
    width: 150,
    marginLeft:'0%',
    marginTop: '0%'
  },
  photo : {
    height: 200,
    width: 200,
    marginLeft:'0%',
    marginTop: '5%'
  },
  stxt : {
    fontSize: 22,
    marginBottom: 0,
    marginLeft: -100,
    marginTop: 0,
    textAlign: 'center',
    fontStyle: 'normal'
  },
  date : {
    fontSize: 20,
    marginBottom: -5,
    marginTop: -10,
    marginLeft: -50,
    fontStyle: 'normal',
    textAlign: 'center',
    color: 'black'
  },
  img: {
    width: 60,
    height: 60,
    marginLeft: 180,
    marginTop: -45
  },
  ftxt: {
    fontSize: 22,
    marginBottom: 0,
    marginLeft: 0,
    marginTop: 0,
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: '600'
  }
});

export default Recycle;