import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, FlatList, Image } from 'react-native';
import { auth, db } from '../database/firebase';
import {GlobalStyle} from '../styles/GlobalStyle';


export default function mesurmentsData() {
  const [data, setData] = useState([])

  const loadData = () => {
    db.ref('user/' + auth.currentUser.uid + '/analyses')
      .on('value', snap => {
        var items = []
        snap.forEach(c => {
          items.push({
            ...c.val(),
            key: c.key
          })
        })
        setData(items)
      })
  }
  useEffect(() => {
    loadData()
    return () => {
      db.ref('user/' + auth.currentUser.uid + '/analyses').off()
    }
  }, [])
  return (
    <ScrollView style={{backgroundColor:'#fff'}}>
    <View style={{ flex: 1 }}>
    

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>  
          <Text style={GlobalStyle.formTitle}> Analyses Data </Text>
          <View style={{ flexDirection: 'row' }} >
            <Image source={{ uri: item.img }} style={{width: 200}}/>
            <View>
              <Text>{item.cost}</Text>
              <Text>{item.lab}</Text>
              <Text>{item.result}</Text>
              <Text>{item.type}</Text>
            </View>

          </View>
          </View>
        )}
      />
    
    </View>
    </ScrollView>

  );
}