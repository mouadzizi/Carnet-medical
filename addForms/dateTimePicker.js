import React, {useState} from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto'
import {TextInput } from 'react-native-paper';
import {GlobalStyle} from '../styles/GlobalStyle';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function dateTimePicker() {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (

        <View style={GlobalStyle.container}>

        <TouchableOpacity style={GlobalStyle.preference2}
        onPress={showDatepicker}>
        <Fontisto
            name="date"
            size={30}
            style={{marginBottom: 10}}
            color= '#A8D28F'
        />
        </TouchableOpacity>
        <TextInput
        label='01/01/1996'
        mode='outlined'
        theme={{colors: {primary: '#A8D28F', background: '#fff',  width: 100 }}}
        />

        
        <TouchableOpacity style={GlobalStyle.preference2}
        onPress={showTimepicker}>
        <Fontisto
            name="clock"
            size={30}
            style={{marginBottom: 10, marginTop: 10}}
            color= '#A8D28F'
        />
        </TouchableOpacity>
        <TextInput
        label='22:22'
        mode='outlined'
        theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
        />
        

        
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          timeZoneOffsetInMinutes={60}
          minimumDate={new Date(2020, 1, 1)}
        />
      )}
      
        </View>


  );
}