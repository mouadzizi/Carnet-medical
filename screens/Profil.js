import React from 'react';
import {Text, View, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard, Image  } from 'react-native';
import {GlobalStyle} from '../styles/GlobalStyle'
import {TextInput} from 'react-native-paper';


export default function Profil() {
  return (

  <ScrollView
  style={{backgroundColor: 'white'}}>

    <TouchableWithoutFeedback
    onPress={Keyboard.dismiss()}>
      
      <View style={{flex:1, alignContent: 'center', margin: 10}}>

      <Image 
      source={require('../assets/logo.png')}
      style={{alignSelf: 'center', marginTop: 50, width: 180, height: 182}}
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
        
        <TextInput
          label='Age'
          mode='outlined'
          keyboardType='numeric'
          theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
          style={{marginTop: 10}}
        />

        <TextInput
          label='Location'
          mode='outlined'
          theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
          style={{marginTop: 10}}
        />

      <Text style={[GlobalStyle.formSubTitle,{
        marginTop: 30
      }]}>Health information</Text>

        <TextInput
          label='Blood Sample'
          mode='outlined'
          placeholder='O+/AB- ..'
          theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
          style={{marginTop: 10}}
        />


        <Text style={[GlobalStyle.formSubTitle,{
          marginTop: 30
          }]}>Autehntification information</Text>

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
          style={{marginBottom: 10, marginTop: 10}}
        />

        <TouchableOpacity
        onPress={()=> alert('information are updated')}
        style={{marginBottom: 30}}>
        <Text
        style={GlobalStyle.buttonSignUp}>Confirme</Text>
        </TouchableOpacity>

    </View>
    </TouchableWithoutFeedback>
    </ScrollView>

    
  );
}