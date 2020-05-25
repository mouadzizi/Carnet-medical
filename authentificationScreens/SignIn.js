import React from 'react';
import {Text, View, BackHandler  } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

import {GlobalStyle} from '../styles/GlobalStyle'
import * as Animatable from 'react-native-animatable'
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function SignIn({navigation}) {

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
        />
        <TextInput
        label='Password'
        mode='outlined'
        placeholder='Enter your Password'
        theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
        secureTextEntry={true}
        style={{marginTop: 25}}
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
        onPress={()=> navigation.replace('TabNavigator')}>
        <Text
        style={GlobalStyle.buttonSignIn}>Sign In</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
        onPress={()=> navigation.navigate('SignUp')}>
        <Text
        style={GlobalStyle.buttonSignUp}>Sign Up</Text>
        </TouchableOpacity>

      </Animatable.View>
      </View>
  );
}