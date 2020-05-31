import React, {useState} from 'react';
import {Text, View, Alert} from 'react-native';
import {TextInput} from 'react-native-paper';

import {GlobalStyle} from '../styles/GlobalStyle'
import * as Animatable from 'react-native-animatable'
import { TouchableOpacity } from 'react-native-gesture-handler';

import {auth} from '../database/firebase';




export default function SignUp({navigation}) {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [userName,setUserName]=useState("")

  function CreatUser() {
    
    auth.createUserWithEmailAndPassword(email.trim(), password)
    .catch(error => {
      Alert.alert(error.message)
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

        <TextInput
        label='Full Name'
        mode='outlined'
        placeholder='e.g mohamed mousawi'
        theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
        style={{marginTop: 50}}
        onChangeText={text => setUserName(text)}
        />

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
          onPress={()=>{CreatUser()}}>
          <Text style={GlobalStyle.buttonSignIn}>Sign Up</Text>
        </TouchableOpacity>

      </Animatable.View>
      </View>
  );

}