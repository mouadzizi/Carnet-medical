import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, FlatList, Image } from 'react-native';
import { auth, db } from '../database/firebase';
import { Card, Title, Paragraph, List } from 'react-native-paper';

export default function mesurmentsData() {

  const [dataAnalyse, setDataAnalyse] = useState([])
  const [dataRadiology, setDataRadiology] = useState([])

  const loadDataAnalyse = () => {
    db.ref('user/' + auth.currentUser.uid + '/analyses')
      .on('value', snap => {
        var items = []
        snap.forEach(c => {
          items.push({
            ...c.val(),
            key: c.key
          })
        })
        setDataAnalyse(items)
      })
  }

  useEffect(() => {
    loadDataAnalyse()
    return () => {
      db.ref('user/' + auth.currentUser.uid + '/analyses').off()
    }
  }, [])


  
  const loadDataRadiology = () => {
    db.ref('user/' + auth.currentUser.uid + '/radiology')
      .on('value', snap => {
        var items = []
        snap.forEach(c => {
          items.push({
            ...c.val(),
            key: c.key
          })
        })
        setDataRadiology(items)
      })
  }

  useEffect(() => {
    loadDataRadiology()
    return () => {
      db.ref('user/' + auth.currentUser.uid + '/radiology').off()
    }
  }, [])
  
  return (
    <ScrollView style={{backgroundColor:'#fff'}}>
    <View style={{ flex: 1 }}>
    


      <FlatList
        data={dataAnalyse}
        renderItem={({ item }) => (
          <View>  

          <Card style={{marginBottom:20}}>
          <Card.Content>
            <Title>Analyse</Title>
            <Paragraph>laboratory : {item.lab} | the price : {item.cost} | Type : {item.type}</Paragraph>
           </Card.Content>
            <Card.Cover source={{ uri: item.img }} />
          </Card>

          </View>
        )}
      />
  
      <FlatList
        data={dataRadiology}
          renderItem={({ item }) => (
          <View>  
          <List.Section>
        <List.Item
          title="Radiology"
          left={() => <List.Icon icon="monitor-screenshot" />}/>
          </List.Section>
          <View style={{ flexDirection: 'column', marginLeft: 20 }} >
            <View style={{marginBottom: 20}}>
              <Text>price :{item.cost}</Text>
              <Text>laboratory : {item.Laboratory}</Text>
              <Text>Radiology Type / name : {item.RaduiologyType}</Text>
              <Text>Date : {item.date}</Text>
            </View>

          </View>
          </View>
        )}
      />

    </View>
    </ScrollView>

  );
}