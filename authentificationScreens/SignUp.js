import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';

import {GlobalStyle} from '../styles/GlobalStyle'
import * as Animatable from 'react-native-animatable'
import { TouchableOpacity } from 'react-native-gesture-handler';

import {auth} from '../database/firebase';





export default function SignUp({navigation}) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [err, setErr] = useState("")

  function CreatUser() {
    auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        setErr('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        setErr('That email address is invalid!');
      }
      if (password.length <= 7 ) {
        setErr('Password should be at least 8 caracters');
      }
      if (!password.equals(confirmPassword)) {
        setErr('Password not identical');
      }
  
      console.error(error);
    });
  }
  return (
    <View style={GlobalStyle.SplashContainer}>
      <View style={GlobalStyle.SignInHeader}>
        <Text style={GlobalStyle.titleSplash}>Sign Up with us</Text>
      </View>

      <Animatable.View 
      style={GlobalStyle.SignInFooter}
      animation="fadeInUpBig"
      duration={2500}>

        <Text style={{color:'red', alignSelf: 'center'}}>{err}</Text>
        <TextInput
        label='Email'
        mode='outlined'
        placeholder='e.g "yourMail@mail.com"'
        theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
        style={{marginTop: 50}}
        onChangeText={text => setEmail(text)}
        />

        <TextInput
        label='Password'
        mode='outlined'
        placeholder='Password must contain at least 8 lettres'
        theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
        secureTextEntry={true}
        style={{marginTop: 25}}
        onChangeText={text => setPassword(text)}
        />

        <TextInput
        label='Confirm Password'
        mode='outlined'
        placeholder='Confirme your Password'
        theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
        secureTextEntry={true}
        style={{marginTop: 25}}
        onChangeText={text => setConfirmPassword(text)}
        />

        <Text 
        style={{
          marginTop: 15,
          fontWeight: 'bold',
          color: '#DFDFDF',
        }}>By Signing up you agree to our: </Text>
        <TouchableOpacity
        onPress={()=> alert('sorry mate can\'t help for now ')}>
  
          <Text style={{
            fontWeight: 'bold',
            color: '#573085',
          }}>Terms of services and Privacy policy</Text>

        </TouchableOpacity>

        <TouchableOpacity
          onPress={()=> {CreatUser(), navigation.navigate('TabNavigator')} }>
          <Text style={GlobalStyle.buttonSignIn}>Sign Up</Text>
        </TouchableOpacity>

      </Animatable.View>
      </View>
  );
}