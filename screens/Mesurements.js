import React from 'react';
import {Text, View, ScrollView } from 'react-native';
import { Button, Card, Title } from 'react-native-paper';

import {GlobalStyle} from '../styles/GlobalStyle'

export default function Mesurements({navigation}) {
  return (
<ScrollView>
    <View style={GlobalStyle.container}>

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