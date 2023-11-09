import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet,TouchableOpacity, Image } from 'react-native';

const RouteDriver = ({navigation}) => {
  const [feedback, setFeedback] = useState('');

  const handleFeedback = () => {
    
      Alert.alert('Success', 'Thank you for your feedback');
      navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      
      <Text style={styles.app}> Waste Guard</Text>
      <Image style={styles.user} source={require('../images/user.png')} /> 
    </View>
    <View style={styles.detail}>
      <Text style={styles.location}>Batticaloa</Text>
      <Text style={styles.time}>8.00am</Text>
      <Image style={styles.img} source={require('../images/checked.png')}/>
      <Text style={styles.done}>Completed</Text>
    </View>

    <View style={styles.detail}>
      <Text style={styles.location}>Arasady</Text>
      <Text style={styles.time}>8.45am</Text>
      <Image style={styles.img} source={require('../images/checked.png')}/>
      <Text style={styles.done}>Completed</Text>
    </View>

    <View style={styles.detail}>
      <Text style={styles.location}>Kallady</Text>
      <Text style={styles.time}>9.30am</Text>
      <Image style={styles.img} source={require('../images/checked.png')}/>
      <Text style={styles.done}>Completed</Text>
    </View>

    <View style={styles.detail}>
      <Text style={styles.location}>Navatkudah</Text>
      <Text style={styles.time}>10.15am</Text>
      <Image style={styles.img} source={require('../images/uncheck.png')}/>
      <Text style={styles.undone}>Mark as done</Text>
    </View>

    <View style={styles.detail}>
      <Text style={styles.location}>Kattankudy</Text>
      <Text style={styles.time}>11.00am</Text>
      <Image style={styles.img} source={require('../images/uncheck.png')}/>
      <Text style={styles.undone}>Mark as done</Text>
    </View>

    <View style={styles.detail}>
      <Text style={styles.location}>Arayampathy</Text>
      <Text style={styles.time}>11.45am</Text>
      <Image style={styles.img} source={require('../images/uncheck.png')}/>
      <Text style={styles.undone}>Mark as done</Text>
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
    marginTop: -380,
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
  detail : {
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    width: 400,
    height: 45,
    marginTop: 10,
    marginLeft: 0,
    marginBottom: 5
  },
  
  location : {
    fontSize: 18,
    marginBottom: 0,
    marginTop: 8,
    marginLeft: -280,
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
    fontSize: 13,
    marginBottom: 0,
    marginTop: -20,
    marginLeft: -100,
    fontStyle: 'normal',
    textAlign: 'auto',
    color: 'black'
  },
  feedback : {
  
  },
  img : {
    width: 30,
    height: 30,
    marginLeft: 50,
    marginTop: -25
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
  done : {
    fontSize: 13,
    marginBottom: 0,
    marginTop: -20,
    marginLeft: 250,
    fontStyle: 'normal',
    textAlign: 'auto',
    color: 'green'
  },
  undone : {
    fontSize: 13,
    marginBottom: 0,
    marginTop: -20,
    marginLeft: 250,
    fontStyle: 'normal',
    textAlign: 'auto',
    color: 'black'
  },
});

export default RouteDriver;