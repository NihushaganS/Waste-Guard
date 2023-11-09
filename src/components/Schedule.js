import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';


const Schedule = ({navigation}) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [session, setSession] = useState('');

  const handleSignup = () => {
    if (name && address && date && session) {
      Alert.alert('Success', 'Account created successfully');
      navigation.navigate('Otp');
    } else {
      Alert.alert('Error', 'Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.header}>
      <Text style={styles.app}> Waste Guard</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}><Image style={styles.user} source={require('../images/user.png')} /></TouchableOpacity> 
      </View>
      <View style={styles.login}>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />

      <TextInput
        style={styles.input}
        placeholder="Date"
        value={date}
        onChangeText={setDate}
      />

      <TextInput
        style={styles.input}
        placeholder="Morning / Evening"
        value={session}
        onChangeText={setSession}
      />

      
      <Text style={styles.txt}>Select your payment type</Text>

      <View>
        <TouchableOpacity>
          <Image style={styles.visa} source={require('../images/visa.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.master} source={require('../images/master.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.bank} source={require('../images/bank.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.paypal} source={require('../images/paypal.png')}/>
        </TouchableOpacity>
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
    marginLeft: '-45%',
    fontWeight: '900'
  },
  user: {
    width: 40,
    height: 40,
    marginTop: '-10%',
    marginLeft: '85%'
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
  visa : {
    width: 70,
    height: 70,
    marginLeft: -20,
    marginTop: 50
  },
  master : {
    width: 70,
    height: 70,
    marginLeft: 70,
    marginTop: -80
  },
  paypal : {
    width: 70,
    height: 70,
    marginLeft: 270,
    marginTop: -80
  },
  bank : {
    width: 70,
    height: 70,
    marginLeft: 170,
    marginTop: -80
  },
  txt: {
    fontSize: 25
  }
});

export default Schedule;