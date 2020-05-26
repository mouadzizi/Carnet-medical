import React from 'react';
import {Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';

import {GlobalStyle} from '../styles/GlobalStyle'
import { ScrollView } from 'react-native-gesture-handler';

export default function testesData() {
  return (
    <ScrollView>
      
    <View style={{flex: 1 , alignItems: 'center'}}>
    <Text style={GlobalStyle.formSubTitle}>Vaccin table</Text>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Vaccin</DataTable.Title>
          <DataTable.Title numeric>name</DataTable.Title>
          <DataTable.Title numeric>date</DataTable.Title>
        </DataTable.Header>


        <DataTable.Row>
          <DataTable.Cell>tubercolose</DataTable.Cell>
          <DataTable.Cell numeric>1.2 mg</DataTable.Cell>
          <DataTable.Cell numeric>20/05/2005</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>HIV</DataTable.Cell>
          <DataTable.Cell numeric>0.2 mg</DataTable.Cell>
          <DataTable.Cell numeric>20/05/2011</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={(page) => { console.log(page); }}
          label="1-2 of 6"
        />
      </DataTable>

      <Text style={GlobalStyle.formSubTitle}>Radiology table</Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Radiology</DataTable.Title>
          <DataTable.Title numeric>(+/-)</DataTable.Title>
          <DataTable.Title numeric>date</DataTable.Title>
        </DataTable.Header>


        <DataTable.Row>
          <DataTable.Cell>Hicv</DataTable.Cell>
          <DataTable.Cell numeric>+</DataTable.Cell>
          <DataTable.Cell numeric>20/05/2005</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Hicv</DataTable.Cell>
          <DataTable.Cell numeric>+</DataTable.Cell>
          <DataTable.Cell numeric>20/05/2005</DataTable.Cell>
        </DataTable.Row>
        
        <DataTable.Row>
          <DataTable.Cell>Hiss</DataTable.Cell>
          <DataTable.Cell numeric>-</DataTable.Cell>
          <DataTable.Cell numeric>20/05/2015</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={(page) => { console.log(page); }}
          label="1-2 of 6"
        />
      </DataTable>

    </View>

    
    </ScrollView>
  );
}