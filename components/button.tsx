import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import './../global.css';

type ButtonProps = {
    title: any,
    desc?: any,
    onCount?: () => void
}



export default function Button({title, desc, onCount}: ButtonProps) {
  return (
 
      <TouchableOpacity onPress={onCount} >
           <View className='flex-row justify-center align-middle bg-zinc-400 p-2 rounded-md m-1'>
        
        <Text >{title}</Text>
        <Text className='mr-2'> {desc}</Text>
        </View>
      </TouchableOpacity>
    
  )
}