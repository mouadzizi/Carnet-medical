import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Alert,ActivityIndicator} from 'react-native';
import {TextInput} from 'react-native-paper';
import {GlobalStyle} from '../styles/GlobalStyle'

import * as Animatable from 'react-native-animatable'

import {auth} from '../database/firebase';

export default function SignIn({navigation}) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading,setLoading]=useState(false)

  const toggleLoading =()=>{
    setLoading(!loading)
  }
  function signIn() {
    toggleLoading()
    auth.signInWithEmailAndPassword(email.trim(), password)
    .catch(error => {
      Alert.alert(error.message)
    }).then(()=>{
      toggleLoading()
    });
  }

  return (
    <View style={GlobalStyle.SplashContainer}>
     <View style={GlobalStyle.SignInHeader}>

        <Text style={GlobalStyle.titleSplash}>Login</Text>
        <Text style={{
          color:'white',
          fontSize: 15,
          fontWeight: "100",
        }}>
        Login with Email and password</Text>
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
        onPress={()=> alert('comming up on the next virsion')}>
        <Text style={{
          marginTop: 15,
          fontWeight: 'bold',
          color: '#A8D28F',
        }}>Forgot Password ?</Text>
        </TouchableOpacity>

        <TouchableOpacity
        disabled={loading}
        onPress={()=> signIn()}>
        <Text
        style={GlobalStyle.buttonSignIn}>Sign In</Text>
         <ActivityIndicator style={{position:'absolute',left:10,top:25}} size="large" animating={loading} color='white' />
        </TouchableOpacity>
        
        <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: 20}}>
        <Text style={{fontSize: 15, color: 'grey'}}> You don't have an account ? </Text>
        
        <TouchableOpacity
        onPress={()=> navigation.replace('SignUp')}>
          <Text style={{color:'green'}}>Sign Up</Text>
        </TouchableOpacity>
        </View>

      </Animatable.View>
      </View>
  );
}