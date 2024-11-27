import React,{useState} from 'react';
import { View, Image, Text,TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreenLabel from '../components/HomeScreenLabel';

const Home = () => {
  const label = ['All','Men','Women','Kids','Others']; //creating Array for screen label to help ease work 
  const[active,setActive]=useState('All');  //setting State for active and inactive labels
  return (
    <SafeAreaView className="bg-white h-screen">
     <>
              
      <View className="flex-row justify-between mx-5 my-6">
        <View>
          <TouchableOpacity>
            <Image
            source={require('../assets/Menu.png')}/>
        </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
           <Image
           source={require('../assets/Profile.png')}/>
        </TouchableOpacity>
        </View>

      </View>
     <View className="mx-5 mb-4">
      <Text className="font-bold text-5xl">Explore</Text>
     <Text className="text-2xl text-slate-500">Best trendy collection!</Text>
     </View>
     <ScrollView horizontal>
      <View className="mx-5 gap-5 flex-row justify-between">
        {label.map((label)=>(
          <HomeScreenLabel    //mapping through all labels to give them these props
          key={label}
          title={label}  
          isActive = {active===label} //if active === label then set isActive true else false
          onPress = {()=>setActive(label)} // if a label is pressed set that label active
          />
        ))}
    
      </View>
    </ScrollView>
     
     </>
    </SafeAreaView>
  )
}

export default Home