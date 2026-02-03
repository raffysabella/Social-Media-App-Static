import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from 'react';
import { Text, View, ToastAndroid } from 'react-native';

export default function Index() {
  const [progress, setProgress] = useState(0);
  const duration = 5000;
  const { usrId, usrFirstName } = useLocalSearchParams();
  const [status, setStatus] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, duration / 100);
    const timeout = setTimeout(() => 
    { 
      !usrId ?
      router.navigate('/(auth)/sign_in') :
      router.back();
      ToastAndroid.show(( !usrId ? "No" : usrFirstName) + " session is currently active", ToastAndroid.SHORT);
    }, 
    
    duration);
    return () => { clearInterval(interval); clearTimeout(timeout); };
  }, []);

  useEffect(() => {
     if(progress >= 100){
      setStatus("Done");
    } else if (progress >= 35) {
      setStatus("Checking active session")
    }
    else {
      setStatus("Loading");
    }
  }, [progress])



  return (
    <View className="flex-1 justify-center items-center bg-white px-10">
      <Text className="text-[51px] font-extrabold text-yellow-500">Social Media App</Text>
      <Text className="text-gray-500 mb-8 text-[23px]">"Where everything is hard-coded"</Text>
      <Text className="text-gray-500 mb-8 text-[13px] ">File based route, Fetching data, Toaster android and params is applied on this static app project.</Text>
     <View className="relative mt-20 w-96 h-10 bg-gray-200 rounded-full overflow-hidden justify-center">
  <View 
    className="absolute left-0 top-0 h-full bg-yellow-500" 
    style={{ width: `${progress}%` }} 
  /> 
  <View className="absolute items-center w-full justify-center w-ful h-full">
    <Text className="text-xl font-bold text-gray-600">
      {status}...{progress}%
    </Text>
  </View>

</View>
    </View>
  );
}