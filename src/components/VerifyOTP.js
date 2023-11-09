import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet,TouchableOpacity, Image } from 'react-native';

const VerifyOTP = ({navigation}) => {
  const [otp, setOTP] = useState('');

  const verifyOTP = () => {
    
    
      Alert.alert('Success', 'You have succesfully signed up to your account.');
      navigation.navigate('Language');
    
    
  };
  

  

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.app}> Waste Guard</Text>
        <View style={styles.login}>
        <Text style={styles.txt}> Enter the OTP sent to your mobile number </Text>
        
        <TextInput
        style={styles.input}
        placeholder="OTP"
        value={otp}
        onChangeText={setOTP}
      />
        <TouchableOpacity onPress={verifyOTP} style={styles.button}>
          <Image style={styles.verify} source={require('../images/verify.png')}/>
        </TouchableOpacity>
        </View>
        
        <Text style={styles.txt}> Didn't received the OTP?</Text>
        <Text style={styles.loginText}> Resend OTP</Text>

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
    marginTop: '1%',
    marginBottom: '',
    color: '#fff',
    fontWeight: '900'
  },
  
  txt : {
    fontSize: 25,
    marginBottom: 30,
    marginTop: 10,
    fontStyle: 'italic',
    textAlign: 'center',
    color: 'black'
  },
  s_txt : {
    fontSize: 25,
    marginBottom: 5,
    marginTop: 0,
    fontStyle: 'italic',
    textAlign: 'justify',
    marginLeft: '1%',
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
    width: 200,
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
    marginBottom: '5%',
    textAlign: 'center'
  },
  verify : {
    width: 300,
    height: 50
  },
  
  login_img : {
  
  },
  loginLink : {
  
  },
});

export default VerifyOTP;