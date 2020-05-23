import React from 'react';
import {Text, View, Button } from 'react-native';

import { List, TextInput, DataTable  } from 'react-native-paper';
import {GlobalStyle} from '../styles/GlobalStyle'
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function Tests( ) {
  return (
    <View style={GlobalStyle.container}>
    <TextInput
        label='Test'
        mode='flat'
        placeholder='add a test'
        underlineColor='#A8D28F'
        />

    <TouchableOpacity
        onPress={()=> alert('add a test')}>
        <Text
        style={GlobalStyle.buttonSignIn}>Add Test</Text>
    </TouchableOpacity>

    <DataTable style={{marginTop: 30}}>
        <DataTable.Header>
          <DataTable.Title>Name test</DataTable.Title>
          <DataTable.Title numeric>Date</DataTable.Title>
          <DataTable.Title numeric>+ / -</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>DiabTThX</DataTable.Cell>
          <DataTable.Cell numeric>6.5 mg</DataTable.Cell>
          <DataTable.Cell numeric>-</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>FxxMl</DataTable.Cell>
          <DataTable.Cell numeric>20.0</DataTable.Cell>
          <DataTable.Cell numeric>+</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={(page) => { console.log(page); }}
          label="1-2 of 6"
        />
      </DataTable>
      </View>
  );
}