import React, {useState} from 'react';
import {Text, View, Platform, TouchableOpacity } from 'react-native';
import {Button} from 'react-native-paper'

import {GlobalStyle} from '../../styles/GlobalStyle';
import {TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function appointment() {

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

    <View style={GlobalStyle.formContainer}>

    <Text style={GlobalStyle.formTitle}> Blood pressure </Text>
        <View style={GlobalStyle.formDateContainer}>
        <View>
        <Button 
          icon="book-open-outline" 
          mode="contained" 
          onPress={showDatepicker}
          color='#A8D28F'>
          pick date</Button>
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          timeZoneOffsetInMinutes={60}
          textColor="red"
          minimumDate={new Date(2020, 1, 1)}
        />
      )}
      
        </View>

        <View style={GlobalStyle.formSubTitle}>
          <Text>information </Text>
        <TextInput
          label='Upper Bound'
          mode='outlined'
          theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
          style={{marginTop: 30}}
          />

        <TextInput
          label='Lower Bound'
          mode='outlined'
          theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
          style={{marginTop: 30}}
          />

        </View>
    </View>
  );
}