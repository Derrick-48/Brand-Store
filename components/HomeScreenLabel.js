import React from 'react';
import { View,Text, TouchableOpacity } from 'react-native';


{/** receiving props from Home screen */}
const HomeScreenLabel = ({title,isActive,onPress}) => {
    const color = isActive? 'orange':'white'; //if label is active? then orange else white
    const textColor = isActive? 'white': 'black'; //if label is active? then white text color else black
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={{backgroundColor: color }} className="w-24 h-12 rounded-l-full rounded-r-full items-center justify-center">
            <Text style={{color:textColor}} className="text-2xl">{title}</Text>
            </View>
        </TouchableOpacity>

    )
}


export default HomeScreenLabel;