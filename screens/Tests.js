import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import { Button, Card, Title } from 'react-native-paper';

import {GlobalStyle} from '../styles/GlobalStyle'




export default function Tests({navigation}) {

  
  return (
    <ScrollView
    style={{backgroundColor:'white'}}>
    <View style={GlobalStyle.container}>

    <Text
    style={{fontWeight: 'bold', fontSize: 20, margin: 20}}>
    Medical tests</Text>

    <Card>
        <Card.Content>
          <Title>Analyse</Title>
        </Card.Content>
        <Card.Cover source={require('../assets/analyses.jpg')} />
        <Card.Actions>
          <Button
            onPress={()=>navigation.navigate('Analyses')}
            color='green'>Add analyse</Button>
        </Card.Actions>
      </Card>

      <Card>
        <Card.Content>
          <Title>Radiology</Title>
        </Card.Content>
        <Card.Cover source={require('../assets/radiology.jpg')} />
        <Card.Actions>
          <Button
            onPress={()=>navigation.navigate('Radiology')}
            color='green'>Add analyse</Button>
        </Card.Actions>
      </Card>


      <Text
        style={{fontWeight: 'bold', fontSize: 20, margin: 20}}>
        Medical events </Text>

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


      <Card >
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

      <Card>
        <Card.Content>
          <Title>Vaccins</Title>
        </Card.Content>
        <Card.Cover source={require('../assets/vaccins.jpg')} />
        <Card.Actions>
          <Button
            onPress={()=>navigation.navigate('Vaccins')}
            color='green'>Add Vaccins</Button>
        </Card.Actions>
      </Card>

      <Text
        style={{fontWeight: 'bold', fontSize: 20, margin: 20}}>
        Medical Mesurments </Text>
      <Card>
        <Card.Content>
          <Title>Blood Pressur</Title>
        </Card.Content>
        <Card.Cover source={require('../assets/bloodpressur.jpg')} />
        <Card.Actions>
          <Button
            onPress={()=>navigation.navigate('BloodPressur')}
            color='green'>Add blood pressur</Button>
        </Card.Actions>
      </Card>

      <Card>
        <Card.Content>
          <Title>Pulse</Title>
        </Card.Content>
        <Card.Cover source={require('../assets/pulse.jpg')} />
        <Card.Actions>
          <Button
            onPress={()=>navigation.navigate('Pulse')}
            color='green'>Add pulse</Button>
        </Card.Actions>
      </Card>

      <Card style={{marginBottom: 30}}>
        <Card.Content>
          <Title>Suger Level</Title>
        </Card.Content>
        <Card.Cover source={require('../assets/sugerlevel.jpg')} />
        <Card.Actions>
          <Button
            onPress={()=>navigation.navigate('SugerLevel')}
            color='green'>Add Sugger level</Button>
        </Card.Actions>
      </Card>



    </View>
    </ScrollView>
  );
}
