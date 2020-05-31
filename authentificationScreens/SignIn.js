import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Alert} from 'react-native';
import {TextInput} from 'react-native-paper';
import {GlobalStyle} from '../styles/GlobalStyle'

import * as Animatable from 'react-native-animatable'

import {auth} from '../database/firebase';

export default function SignIn({navigation}) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function signIn() {
    auth.signInWithEmailAndPassword(email.trim(), password)
    .catch(error => {
      Alert.alert(error.message)
    });
  }

  return (

    <View style={GlobalStyle.SplashContainer}>
     <View style={GlobalStyle.SignInHeader}>
        <Text style={GlobalStyle.titleSplash}>Welcome To MedDoc</Text>
      </View>

      <Animatable.View 
      style={GlobalStyle.SignInFooter}
      animation="fadeInUpBig"
      duration={2000}>

        
        <TextInput
        label='Email'
        mode='outlined'
        placeholder='e.g: yourMail@mail.com'
        theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
        style={{marginTop: 50}}
        onChangeText={text => setEmail(text)}
        />
        <TextInput
        label='Password'
        mode='outlined'
        placeholder='Enter your Password'
        theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
        secureTextEntry={true}
        style={{marginTop: 25}}
        onChangeText={text => setPassword(text)}
        />

        <TouchableOpacity
        onPress={()=> alert('sorry mate can\'t help for now ')}>
        <Text style={{
          marginTop: 15,
          fontWeight: 'bold',
          color: '#573085',
        }}>Forgot Password ?</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=> signIn()}>
        <Text
        style={GlobalStyle.buttonSignIn}>Sign In</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
        onPress={()=> navigation.navigate('SignUp') }>
        <Text
        style={GlobalStyle.buttonSignUp}>Sign Up</Text>
        </TouchableOpacity>

      </Animatable.View>
      </View>
  );
}