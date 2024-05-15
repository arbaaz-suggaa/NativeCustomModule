import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Text, View ,Image} from "react-native";

const Profile=()=>{
   

    return(
        <ParallaxScrollView
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={
          <Image
            source={require('@/assets/images/partial-react-logo.png')}
            style={{height:100,width:100}}
          />
        }>
        <ThemedView style={{flex:1}}>
          <HelloWave />
          <ThemedText> Profile </ThemedText>
        </ThemedView>
      
        
         
      
      </ParallaxScrollView>
    )

}


export default Profile;