import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet,TouchableOpacity, Image } from 'react-native';

const Route01 = ({navigation}) => {
  const [feedback, setFeedback] = useState('');

  const handleFeedback = () => {
    
      Alert.alert('Success', 'Thank you for your feedback');
      navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      
      <Text style={styles.app}> Waste Guard</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}><Image style={styles.user} source={require('../images/user.png')} /></TouchableOpacity> 
    </View>
    <View style={styles.detail}>
      <Text style={styles.location}>Batticaloa</Text>
      <Text style={styles.time}>8.00am</Text>
      <Image style={styles.img} source={require('../images/checked.png')}/>
    </View>

    <View style={styles.detail}>
      <Text style={styles.location}>Arasady</Text>
      <Text style={styles.time}>8.45am</Text>
      <Image style={styles.img} source={require('../images/checked.png')}/>
    </View>

    <View style={styles.detail}>
      <Text style={styles.location}>Kallady</Text>
      <Text style={styles.time}>9.30am</Text>
      <Image style={styles.img} source={require('../images/checked.png')}/>
    </View>

    <View style={styles.detail}>
      <Text style={styles.location}>Navatkudah</Text>
      <Text style={styles.time}>10.15am</Text>
      <Image style={styles.img} source={require('../images/uncheck.png')}/>
    </View>

    <View style={styles.detail}>
      <Text style={styles.location}>Kattankudy</Text>
      <Text style={styles.time}>11.00am</Text>
      <Image style={styles.img} source={require('../images/uncheck.png')}/>
    </View>

    <View style={styles.detail}>
      <Text style={styles.location}>Arayampathy</Text>
      <Text style={styles.time}>11.45am</Text>
      <Image style={styles.img} source={require('../images/uncheck.png')}/>
    </View>

    <View style={styles.feedback}>
     <TextInput
        style={styles.input}
        placeholder="Submit your feedback"
        value={feedback}
        onChangeText={setFeedback}
      />

    <TouchableOpacity onPress={handleFeedback} style={styles.button}>
       <Image style={styles.submit} source={require('../images/submit.png')} /> 
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
    marginTop: -220,
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
    marginLeft: -200
  
  },
  
  user: {
    width: 40,
    height: 40,
    marginTop: -40,  
    marginLeft: 360
  },
  detail : {
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    width: 350,
    height: 45,
    marginTop: 10,
    marginLeft: 0,
    marginBottom: 5
  },
  
  location : {
    fontSize: 25,
    marginBottom: 0,
    marginTop: 8,
    marginLeft: -180,
    fontStyle: 'normal',
    textAlign: 'auto',
    color: 'black'
  },
  submit : {
    width: 100,
    height: 40,
    marginLeft: 150,
    marginTop: 24
  },
  time : {
    fontSize: 15,
    marginBottom: 0,
    marginTop: -20,
    marginLeft: 50,
    fontStyle: 'normal',
    textAlign: 'auto',
    color: 'black'
  },
  feedback : {
  
  },
  img : {
    width: 40,
    height: 40,
    marginLeft: 240,
    marginTop: -35
  },
  input : {
    width: 400,
    height: 50,
    color: 'black',
    backgroundColor: 'white',
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'gray',
    paddingLeft: 16,
    paddingTop: 5,
    marginBottom: '1%',
    marginTop: 50
  },
});

export default Route01;