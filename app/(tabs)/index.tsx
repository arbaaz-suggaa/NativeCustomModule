import { Image, StyleSheet, Platform, Button ,AppState, Dimensions} from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';
import MyLocationApi from '@/modules/location-module/src/ExpoLocation';
import { Accuracy } from '@/modules/location-module/src/Location';

const  HomeScreen=()=> {
 // const [theme,setTheme]=useState<string>(Location.getTheme());
  // Toggle between dark and light theme
  const [location, setLocation] = useState({
    latitude:'',
    longitude:''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [locationenabled,setLocationEnabled]=useState(false);
  const [appState, setAppState] = useState(AppState.currentState);
  const [address,setaddress]=useState('');

  useEffect(() => {
    const subscription = AppState.addEventListener("change", nextAppState => {
      if (appState !== nextAppState) {
        console.log("AppState changed to", nextAppState);
        setAppState(nextAppState);
      }
    });
     
    return () => {
      subscription.remove();
    };
  }, [appState]);

  useEffect(()=>{
    console.log(MyLocationApi,'0----------')
    getPermission();
  },[])

  const getPermission=async()=>{
 
    let { status } = await MyLocationApi.getCustomPermissionLocation();
    if (status !== 'granted') {
       
      setErrorMsg('Permission to access location was denied');
      return;
    }
    setLocationEnabled(true);
    let provider= await MyLocationApi.hasStartedGeofencingAsync()
    let location = await MyLocationApi.getCurrentPositionAsync({});
    console.log(provider,'location');

    setLocation(location?.coords)
  }
  return (
    <ParallaxScrollView
        
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/map.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
    
      

     <ThemedView style={{flex:0.5}}>
     <ThemedText style={{alignSelf:'center',margin:10}}>Tap here to get your location:</ThemedText>
      <Button title={`TAP`} onPress={() =>
      MyLocationApi?.getCurrentPositionAsync({Accuracy}).then((res:any)=>{
        console.log(res?.coords?.latitude,'current12'),
        setLocation({latitude:res?.coords?.latitude,longitude:res?.coords?.longitude})}) } />
     </ThemedView>
 
    <ThemedView style={{backgroundColor:'white',padding:20}}>
         <ThemedView style={{backgroundColor:'lightblue',alignSelf:'center'}}>
          <ThemedText>{location?.latitude} , {location?.longitude}</ThemedText>
         </ThemedView>

        
    </ThemedView>
    <Button title='TAP TO GET FULL ADDRESS' onPress={()=>{
         MyLocationApi.reverseGeocodeAsync(location??{}).then((res:any)=>{
             console.log(res,'adress');
             setaddress(res[0]?.formattedAddress??'')
         }).catch((e:any)=>{console.log(e)})
    }} />
      </ThemedView>
      <ThemedView style={{backgroundColor:'white',padding:20}}>
         <ThemedView style={{backgroundColor:'lightblue',alignSelf:'center'}}>
          <ThemedText>{address}</ThemedText>
         </ThemedView>
         </ThemedView>
      
       
    
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor:'gray',
    flex:1
    
    
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height:Dimensions.get('screen').height-1,
    width:Dimensions.get('screen').width-1,
  
    
  },
});
export default HomeScreen;