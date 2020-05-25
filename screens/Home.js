import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

import {GlobalStyle} from '../styles/GlobalStyle';

export default function Home({navigation}) {
  return (

    <ScrollView >
    <View style={GlobalStyle.container}>

    <Card>

      <Card.Content>
        <Title>Mesurments</Title>
        <Paragraph>blood - pressur </Paragraph>
      </Card.Content>

      <Card.Cover source={require('../assets/mesurements.jpg')} />
      <Card.Actions>
        <Button
        onPress={()=>navigation.navigate('MesurmentsData')}
        color='green'>See More</Button>
      </Card.Actions>

    </Card>

    <Card style={{marginTop: 30}}>
      <Card.Content>
        <Title>Tests</Title>
        <Paragraph>Analyse - Radiologie - Vaccins - medicaments</Paragraph>
      </Card.Content>
      
      <Card.Cover source={require('../assets/tests.jpg')} />
      <Card.Actions>
        <Button
        onPress={()=>navigation.navigate('TestsData')}
        color='green'>
        See More</Button>
      </Card.Actions>

    </Card>
      


    <Card style={{marginTop: 30, marginBottom: 20}}>

      <Card.Content>
        <Title>Events</Title>
        <Paragraph>Rendez vous - Chirurgie </Paragraph>
      </Card.Content>
      
      <Card.Cover source={require('../assets/events.jpg')} />
      <Card.Actions>
        <Button
        onPress={()=>navigation.navigate('EventsData')}
        color='green'>
        See More</Button>
      </Card.Actions>

    </Card>

    
    </View>
    
    </ScrollView>

  );
}