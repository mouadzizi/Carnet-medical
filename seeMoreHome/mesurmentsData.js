import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Dimensions, FlatList } from 'react-native';
import { auth, db } from '../database/firebase'
import { GlobalStyle } from '../styles/GlobalStyle'
import { Avatar } from 'react-native-paper'


const screenWidth = Dimensions.get("window").width;

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
    <View style={{ flex: 1 }}>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row' }} >
            <Avatar.Image source={{ uri: item.img }} size={90} />
            <View>
              <Text>{item.cost}</Text>
              <Text>{item.lab}</Text>
              <Text>{item.result}</Text>
              <Text>{item.type}</Text>
            </View>

          </View>
        )}
      />

    </View>

  );
}