import React from 'react';
import {Text, View, ScrollView, Keyboard } from 'react-native';
import DateTimePicker from '../dateTimePicker'

import {GlobalStyle} from '../../styles/GlobalStyle';
import {TextInput } from 'react-native-paper';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


export default function analyses() {
  return (

    <ScrollView>
    <TouchableWithoutFeedback
    onPress={Keyboard.dismiss()}>
      
    <View style={GlobalStyle.formContainer}>

    <Text style={GlobalStyle.formTitle}> Analyse </Text>

        <View style={GlobalStyle.formDateContainer}>
       <DateTimePicker />
        </View>

      <View style={{alignContent: 'center', margin: 10}}>

        <Text style={GlobalStyle.formSubTitle}>information </Text>

        <TextInput
          label='Analyse type'
          mode='outlined'
          theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
          style={{marginTop: 10}}
        />
        
        <TextInput
          label='Laboratory name'
          mode='outlined'
          theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
          style={{marginTop: 10}}
        />

        <TextInput
          label='Result'
          mode='outlined'
          theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
          style={{marginTop: 10}}
        />
        <TextInput
          label='Cost'
          mode='outlined'
          placeholder='MAD'
          theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
          style={{marginTop: 10}}
          keyboardType='numeric'
        />


      </View>
    </View>
    
    </TouchableWithoutFeedback>
    </ScrollView>
  );
}