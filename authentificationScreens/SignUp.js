import React, {useState} from 'react';
import {Text, View, Alert, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {TextInput} from 'react-native-paper';

import {GlobalStyle} from '../styles/GlobalStyle'
import * as Animatable from 'react-native-animatable'

import {auth} from '../database/firebase';




export default function SignUp({navigation}) {

  const [userName,setUserName]=useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
 


  function CreatUser() {
    
    auth.createUserWithEmailAndPassword(email.trim(), password)
    .catch(error => {
      Alert.alert(error.message)
    });
  }

  return (
    <TouchableWithoutFeedback
    onPress={()=> Keyboard.dismiss()}>
      
    <View style={GlobalStyle.SplashContainer}>
      <View style={GlobalStyle.SignUpHeader}>

        <Text style={GlobalStyle.titleSplash}>Sign Up</Text>
        <Text style={{
          color:'white',
          fontSize: 15,
          fontWeight: "100",
        }}>
        Sign Up with Email and password</Text>
      </View>

      <Animatable.View
      style={GlobalStyle.SignInFooter}
      animation="fadeInUpBig"
      duration={2500}>

        <TextInput
        label='UsserName'
        mode='outlined'
        placeholder='e.g: CoolName'
        theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
        style={{marginTop: 10}}
        onChangeText={text => setUserName(text)}
        />

        <TextInput
        label='Email'
        mode='outlined'
        placeholder='e.g "yourMail@mail.com"'
        theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
        style={{marginTop: 10}}
        onChangeText={text => setEmail(text)}
        />

        <TextInput
        label='Password'
        mode='outlined'
        placeholder='Password must contain at least 6 characters'
        theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
        secureTextEntry={true}
        style={{marginTop: 10}}
        onChangeText={text => setPassword(text)}
        />

        <TextInput
        label='Confirm Password'
        mode='outlined'
        placeholder='Confirme your Password'
        theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
        secureTextEntry={true}
        style={{marginTop: 10}}
        onChangeText={text => setConfirmPassword(text)}
        />

        <Text 
        style={{
          marginTop: 15,
          fontWeight: 'bold',
          color: '#DFDFDF',
        }}>By Signing up you agree to our: </Text>
        <TouchableOpacity
        onPress={()=> alert('Comming up on the next virsion')}>
  
          <Text style={{
            fontWeight: 'bold',
            color: '#A8D28F',
          }}>Terms of services and Privacy policy</Text>

        </TouchableOpacity>

        <TouchableOpacity
          onPress={()=>{CreatUser()}}>
          <Text style={GlobalStyle.buttonSignIn}>Creat Account</Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: 20}}>
        <Text style={{fontSize: 15, color: 'grey'}}> You already have an account ? </Text>
        
        <TouchableOpacity
        onPress={()=> navigation.replace('SignIn')}>
          <Text style={{color:'green'}}>Sign In</Text>
        </TouchableOpacity>
        </View>

        </Animatable.View>

      </View>
      
    </TouchableWithoutFeedback>
  );

}