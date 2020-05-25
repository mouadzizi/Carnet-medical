import React from 'react';
import {View, ScrollView } from 'react-native';
import { Button, Card, Title } from 'react-native-paper';


import {GlobalStyle} from '../styles/GlobalStyle';



export default function Events ({navigation}) {

  return (
    <ScrollView>
    <View style={GlobalStyle.container}>

    <Card>
        <Card.Content>
          <Title>Appointment</Title>
        </Card.Content>
        <Card.Cover source={require('../assets/appointment.jpg')} />
        <Card.Actions>
          <Button
            onPress={()=>navigation.navigate('Appointment')}
            color='green'>Add Appointment</Button>
        </Card.Actions>
      </Card>


      <Card style={{marginBottom: 30}}>
        <Card.Content>
          <Title>Surgery</Title>
        </Card.Content>
        <Card.Cover source={require('../assets/surgery.jpg')} />
        <Card.Actions>
          <Button
            onPress={()=>navigation.navigate('Surgery')}
            color='green'>Add Surgery</Button>
        </Card.Actions>
      </Card>

    </View>
    </ScrollView>
  );
}