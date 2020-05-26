import React from 'react';
import {Text, View, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard, Image  } from 'react-native';
import {GlobalStyle} from '../styles/GlobalStyle'
import {Avatar, TextInput} from 'react-native-paper';


export default function Profil() {
  return (

  <ScrollView>

    <TouchableWithoutFeedback
    onPress={Keyboard.dismiss()}>
      
      <View style={{flex:1, alignContent: 'center', margin: 10}}>
      <Avatar.Image 
      size={150} 
      source={require('../assets/logo.png')}
      style={{alignSelf: 'center', margin: 20}}
      />

      <Text style={GlobalStyle.formSubTitle}>Personal information</Text>

        <TextInput
          label='Full name'
          mode='outlined'
          theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
          style={{marginTop: 10}}
        />

        <TextInput
          label='Phone Number'
          mode='outlined'
          keyboardType='numeric'
          theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
          style={{marginTop: 10}}
        />
        
        <TextInput
          label='Sex'
          mode='outlined'
          theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
          style={{marginTop: 10}}
        />

      <Text style={GlobalStyle.formSubTitle}>Health information</Text>

        <TextInput
          label='Blood Sample'
          mode='outlined'
          placeholder='O+/AB- ..'
          theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
          style={{marginTop: 10}}
        />

        <TextInput
          label='Age'
          mode='outlined'
          keyboardType='numeric'
          theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
          style={{marginTop: 10}}
        />
        
        <TextInput
          label='Sex'
          mode='outlined'
          theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
          style={{marginTop: 10}}
        />

        <Text style={GlobalStyle.formSubTitle}>Autehntification information</Text>

        <TextInput
          label='E-mail'
          mode='outlined'
          theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
          style={{marginTop: 10}}
        />

        <TextInput
          label='Password'
          mode='outlined'
          theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
          style={{marginTop: 10}}
        />
        
        <TextInput
          label='Confirme password'
          mode='outlined'
          theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
          style={{marginBottom: 30, marginTop: 10}}
        />

        <TouchableOpacity
        onPress={()=> alert('information are updated')}>
        <Text
        style={GlobalStyle.buttonSignUp}>Confirme</Text>
        </TouchableOpacity>

    </View>
    </TouchableWithoutFeedback>
    </ScrollView>

    
  );
}