import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View,Image,ImageBackground, ScrollView } from 'react-native';
import { useState } from 'react';
const Img = require('../assets/adaptive-icon.png')
export default function SubApp() {
  const [flexDirection,setFlexDirection] = useState('flex-start');
  return (
    <PreviewLayout
    label="justifyContent"
    values={['flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',]}
    selectedValue={flexDirection}
    setSelectedValue={setFlexDirection}
    >
      <View style={[styles.box,{backgroundColor:'powderblue'}]}></View>
      <View style={[styles.box,{backgroundColor:'darkblue'}]}></View>
      <View style={[styles.box,{backgroundColor:'skyblue'}]}></View>
      <View style={[styles.box,{backgroundColor:'lightblue'}]}><Text>helloworld</Text></View>
      <View style={[styles.box,{backgroundColor:'red'}]}><Image source={{uri:'https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/437930886_1153199582703703_4771961188930393296_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHm3rBh7HZsctcMy95TqXAMtM7obpX8ep-0zuhulfx6n2yECiqFrzXd1ZytKaxqXdTZ4iXX4Lkt0zHMgaMddQ4R&_nc_ohc=BgTcRhOT2woAb7QIRIu&_nc_ht=scontent-hkg1-2.xx&oh=00_AfDqZQvv91zHHeRjcIsRRTWMx17yuWrs6X5YsBIYWH4yjw&oe=6622DA97'}} style={{width:300,height:300}}></Image ></View>
    </PreviewLayout>
  );
}


const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue
}) =>(
  <View style={{padding:10,flex:1}}>


    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map(value => (
          <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button,selectedValue === value && styles.selected]}
          >
        <Text style={[
            styles.buttonlabel,
            selectedValue === value && styles.selectedlabel
        ]}>
          {value}
        </Text>
      </TouchableOpacity>))}
    </View>
    
    <View style={[styles.container,{[label]:selectedValue}]}>
            
        {children}
    </View>
      

  </View>
  
);

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 8,
    backgroundColor:'aliceblue'
  },
  box:{
    width:50,
    height:50},
  row:{
    flexDirection:'row',
    flexWrap:'wrap'
  },
  label:{
    textAlign:'center',
    marginBottom:10,
    fontSize:24
  },
  button:{
    paddingHorizontal:8,
    paddingVertical:6,
    borderRadius:4,
    backgroundColor:"oldlace",
    alignItems:'flex-start',
    marginHorizontal:'1%',
    marginBottom:'6',
    minWidth: '48%',
    textAlign:'center',
  },
  selected:{
    backgroundColor:'coral',
    borderWidth:0
  },
  buttonlabel:{
    fontSize: 12,
    fontWeight:'500',
    color:'coral'
  },
  selectedlabel:{
    color:'white'
  },
  

});

