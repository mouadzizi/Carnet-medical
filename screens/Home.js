import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import {GlobalStyle} from '../styles/GlobalStyle';

export default function Home({navigation}) {
  return (
    <ScrollView>
    <View style={GlobalStyle.container}>

    <Card>

      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      
      <Card.Cover source={{ uri: 'https://picsum.photos/id/111/700' }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>

    </Card>
      
      <Card style={{marginTop: 30}}>

      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>

    </Card>

    <Card style={{marginTop: 30, marginBottom: 20}}>

      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>

    </Card>
    </View>
    </ScrollView>
  );
}