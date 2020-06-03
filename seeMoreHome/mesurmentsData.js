import React from 'react';
import {Text, View, ScrollView, Dimensions } from 'react-native';

import {GlobalStyle} from '../styles/GlobalStyle'
import {
  LineChart,
} from "react-native-chart-kit";

import { DataTable } from 'react-native-paper';

const screenWidth = Dimensions.get("window").width;

export default function mesurmentsData() {

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rainy Days", "Sunny Days", "Snowy Days"] // optional
  };
  return (
    <ScrollView>

    <View style={{flex: 1 , alignItems: 'center'}}>

    

    <Text style={GlobalStyle.titleAbout}>Suger level </Text>
  <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} 
    height={220}
    yAxisSuffix="ml"
    yAxisInterval={1} 
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 10
      },
      propsForDots: {
        r: "4",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />

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