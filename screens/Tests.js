import React from 'react';
import {View, ScrollView} from 'react-native';
import { Button, Card, Title } from 'react-native-paper';

import {GlobalStyle} from '../styles/GlobalStyle'




export default function Tests({navigation}) {

  
  return (
    <ScrollView>
    <View style={GlobalStyle.container}>

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

      <Card style={{marginBottom: 30}}>
        <Card.Content>
          <Title>Vaccins</Title>
        </Card.Content>
        <Card.Cover source={require('../assets/vaccins.jpg')} />
        <Card.Actions>
          <Button
            onPress={()=>navigation.navigate('Vaccins')}
            color='green'>Add analyse</Button>
        </Card.Actions>
      </Card>

    </View>
    </ScrollView>
  );
}
