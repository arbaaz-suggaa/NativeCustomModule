import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Device from 'expo-device';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState('');
  const [locationenabled,setLocationEnabled]=useState(false);

  const getPermission=async()=>{
    console.log('Hi')
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
       
      setErrorMsg('Permission to access location was denied');
      return;
    }
    setLocationEnabled(true);

    let location = await Location.getCurrentPositionAsync({});
    console.log(location,'location');

    setLocation(location?.coords)
  }
  useEffect(() => {
  
    getPermission();
    
  }, []);

  let text = 'Waiting';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
      {
         locationenabled?
         <Text> 
         Location Access  Given
       </Text>:
       <View>

        <Text> 
        Location Access is Not Given
      </Text>
    
      </View>
      }
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});
