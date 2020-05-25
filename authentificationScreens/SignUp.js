import React from 'react';
import {Text, View, Button } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

import {GlobalStyle} from '../styles/GlobalStyle'
import * as Animatable from 'react-native-animatable'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SignUp({navigation}) {
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
        label='Email'
        mode='outlined'
        placeholder='e.g "yourMail@mail.com"'
        theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
        style={{marginTop: 50}}
        />

        <TextInput
        label='Password'
        mode='outlined'
        placeholder='Password must contain at least 8 lettres'
        theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
        secureTextEntry={true}
        style={{marginTop: 25}}
        />
        <TextInput
        label='Confirm Password'
        mode='outlined'
        placeholder='Confirme your Password'
        theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
        secureTextEntry={true}
        style={{marginTop: 25}}
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
        onPress={()=> navigation.navigate('TabNavigator')}>
        <Text
        style={GlobalStyle.buttonSignIn}>Sign Up</Text>
        </TouchableOpacity>

      </Animatable.View>
      </View>
  );
}