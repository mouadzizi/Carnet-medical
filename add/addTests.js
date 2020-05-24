import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,FlatList, Image } from 'react-native'



import cons from '../assets/doctor.png';
import analy from '../assets/hospital.png';
import radio from '../assets/radiology.png';
import vacc from '../assets/vaccine.png';



const pageList=[
    {name:'Consultation',title:'Consultations',icon:cons,key:'1'},
    {name:'Analysis',title:'Analyses',icon:analy,key:'2'},
    {name:'Radio',title:'Radiologie',icon:radio,key:'3'},
    {name:'Vaccins',title:'Vaccins',icon:vacc,key:'4'},
]
export default class test extends Component {
    render() { 
    
        return (
            <View style={styles.container}>
                 <View style={styles.gridContainer}>

                <FlatList 
                    numColumns={2}
                    data={pageList}
                    renderItem={({item})=>(
                            <TouchableOpacity style={styles.item} 
                             onPress={()=>alert(item.name)}>
                                <Image source={item.icon} style={styles.image} />
                                <Text style={styles.txtItem}> {item.title} </Text>
                            </TouchableOpacity>
                    )
                }
                />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
    item:{
        marginVertical:50,
        marginHorizontal:30,
        width:90,
        height:90,
        alignItems:'center',
        justifyContent:'center'
    },
    gridContainer:{
        marginTop:30,
        
    },
    txtItem:{
        color:'#A8D28F',
        fontWeight:'bold',
        position:'absolute',
        bottom:0
    },
    image:{
        width:80,
        height:80,
        position:'absolute',
        top:-8,
    }
})
