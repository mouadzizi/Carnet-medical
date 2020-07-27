import React, { useState } from 'react';
import { Text, View, ScrollView, Keyboard, TouchableOpacity, ActivityIndicator } from 'react-native';
import { auth, db, storage } from '../../database/firebase';
import { TextInput } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { GlobalStyle } from '../../styles/GlobalStyle';


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
    <ScrollView style={{backgroundColor: '#fff'}}>

        <View style={GlobalStyle.formContainer}>
          <Text style={GlobalStyle.formTitle}> Analyse </Text>
          <TouchableOpacity
            onPress={_pickImage}
          >
            <FontAwesome name="image" size={90} color="#C9CACA" style={{marginLeft: 20}} />
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
            onPress={pushAnalyses}>
            <Text style={GlobalStyle.buttonSignIn}>Save</Text>
            {uploaded ? <View>
                <ActivityIndicator size='large' animating={true} />
                <Text style={{ alignSelf: 'center' }} > uploading Image ... </Text>
              </View> : null}
            </TouchableOpacity>
          </View>
        </View>
        
    </ScrollView>
  );
}