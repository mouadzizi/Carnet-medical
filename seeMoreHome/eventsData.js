import React, { useState, useEffect } from 'react';
import {Text, View, ScrollView, FlatList } from 'react-native';
import { List } from 'react-native-paper';
import {GlobalStyle} from '../styles/GlobalStyle'
import { auth, db } from '../database/firebase';

export default function eventsData() {
  const [dataSurgery, setDataSurgery] = useState([])
  const [dataAppointment, setDataAppointment] = useState([])
  const [dataVaccins, setDataVaccins] = useState([])

  const loadDataSurgery = () => {
    db.ref('user/' + auth.currentUser.uid + '/surgery')
      .on('value', snap => {
        var items = []
        snap.forEach(c => {
          items.push({
            ...c.val(),
            key: c.key
          })
        })
        setDataSurgery(items)
      })
  }

  const loadDataVaccins = () => {
    db.ref('user/' + auth.currentUser.uid + '/surgery')
      .on('value', snap => {
        var items = []
        snap.forEach(c => {
          items.push({
            ...c.val(),
            key: c.key
          })
        })
        setDataVaccins(items)
      })
  }

  const loadDataAppointment = () => {
    db.ref('user/' + auth.currentUser.uid + '/appointments')
      .on('value', snap => {
        var items = []
        snap.forEach(c => {
          items.push({
            ...c.val(),
            key: c.key
          })
        })
        setDataAppointment(items)
      })
  }

  useEffect(() => {
    loadDataSurgery()
    return () => {
      db.ref('user/' + auth.currentUser.uid + '/surgery').off()
    }
  }, [])

  useEffect(() => {
    loadDataVaccins()
    return () => {
      db.ref('user/' + auth.currentUser.uid + '/vaccins').off()
    }
  }, [])

  useEffect(() => {
    loadDataAppointment()
    return () => {
      db.ref('user/' + auth.currentUser.uid + '/appointments').off()
    }
  }, [])

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      
    <View style={GlobalStyle.container}>

    <FlatList
        data={dataSurgery}
        renderItem={({ item }) => (
          <View>  
          <List.Section>
        <List.Item
          title="Surgery"
          left={() => <List.Icon icon="calendar-month" />}/>
          </List.Section>
          <View style={{ flexDirection: 'column', marginLeft: 20 }} >
            <View>
              <Text>price :{item.cost}</Text>
              <Text>Doctor : {item.doctor}</Text>
              <Text>Date : {item.date}</Text>
            </View>

          </View>
          </View>
        )}
      />

      <FlatList
        data={dataAppointment}
        renderItem={({ item }) => (
          <View>  
          <List.Section>
        <List.Item
          title="Appointment"
          left={() => <List.Icon icon="calendar-month" />}/>
          </List.Section>
          <View style={{ flexDirection: 'column', marginLeft: 20 }} >
            <View style={{marginBottom: 20}}>
              <Text>Doctor : {item.doctor}</Text>
              <Text>Date : {item.date}</Text>
              <Text>Time : {item.time}</Text>
            </View>

          </View>
          </View>
        )}
      />
    
      <FlatList
        data={dataVaccins}
        renderItem={({ item }) => (
          <View>  
          <List.Section>
        <List.Item
          title="Vaccins"
          left={() => <List.Icon icon="calendar-month" />}/>
          </List.Section>
          <View style={{ flexDirection: 'column', marginLeft: 20 }} >
            <View style={{marginBottom: 20}}>
              <Text>Laboratory : {item.Laboratory}</Text>
              <Text>Vaccin type / name : {item.vaccinType}</Text>
              <Text>Date : {item.date}</Text>
              <Text>Cost : {item.cost}</Text>
            </View>

          </View>
          </View>
        )}
      />

    </View>
    
    </ScrollView>
  );
}