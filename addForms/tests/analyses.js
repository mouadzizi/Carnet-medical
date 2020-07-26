import React, { useState } from 'react';
import { Text, View, ScrollView, Keyboard, TouchableOpacity, ActivityIndicator } from 'react-native';

import { auth, db, storage } from '../../database/firebase'
import { GlobalStyle } from '../../styles/GlobalStyle';
import { TextInput } from 'react-native-paper';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';


export default function analyses({navigation}) {
  const [analyse, setAnalyse] = useState('')
  const [labName, setLabName] = useState('')
  const [result, setResult] = useState('')
  const [cost, setCost] = useState('')
  const [imageSource, setImageSource] = useState('')
  const [uploaded, setUploaded] = useState(false)


  const pushAnalyses = () => {

    db.ref('user/' + auth.currentUser.uid + '/analyses').push({
      img: imageSource,
      type:analyse,
      lab:labName,
      result:result,
      cost:cost
    }).then(()=>navigation.goBack())

  }

  const uploadImg = async (uri, imgName) => {
    setUploaded(true)
    const response = await fetch(uri);
    const blob = await response.blob()
    var ref = storage.ref().child(auth.currentUser.uid + '/analysis/' + imgName)
    ref.put(blob)
      .then(() => {
        ref.getDownloadURL().then((url) => {
          setImageSource(url)
          setUploaded(false)
        }).catch(err => console.log(err.message))
      })
  }
  const _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
      if (!result.cancelled) {
        const imageNameStartIndex = result.uri.search('ImagePicker') + 12;
        const imageNameEndIndex = result.uri.length
        const imgName = result.uri.slice(imageNameStartIndex, imageNameEndIndex)
        uploadImg(result.uri, imgName)

      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss()}>
        <View style={GlobalStyle.formContainer}>
          <Text style={GlobalStyle.formTitle}> Analyse </Text>
          <TouchableOpacity
            onPress={_pickImage}
          >
            <Ionicons name="md-add-circle-outline" size={70} color="black" />
          </TouchableOpacity>
          <View style={{ alignContent: 'center', margin: 10 }}>
            <Text style={GlobalStyle.formSubTitle}>information </Text>
            <TextInput
              label='Analyse type'
              mode='outlined'
              theme={{ colors: { primary: '#A8D28F', background: '#fff' } }}
              style={{ marginTop: 10 }}
              onChangeText={text => setAnalyse(text)}
            />

            <TextInput
              label='Laboratory name'
              mode='outlined'
              theme={{ colors: { primary: '#A8D28F', background: '#fff' } }}
              style={{ marginTop: 10 }}
              onChangeText={text => setLabName(text)}
            />

            <TextInput
              label='Result'
              mode='outlined'
              theme={{ colors: { primary: '#A8D28F', background: '#fff' } }}
              style={{ marginTop: 10 }}
              onChangeText={text => setResult(text)}
            />
            <TextInput
              label='Cost'
              mode='outlined'
              placeholder='MAD'
              theme={{ colors: { primary: '#A8D28F', background: '#fff' } }}
              style={{ marginTop: 10 }}
              keyboardType='numeric'
              onChangeText={text => setCost(text)}
            />
            <TouchableOpacity
              disabled={uploaded}
              onPress={pushAnalyses}
            >
              {uploaded ? <View>
                <ActivityIndicator size='large' animating={true} />
                <Text style={{ alignSelf: 'center' }} > uploading Image ... </Text>
              </View> : null}
              <Ionicons name="md-add-circle-outline" size={70} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}