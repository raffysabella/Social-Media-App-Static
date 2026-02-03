import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { UserProps } from '../(tabs)/profile/index';
import usrData from './../../data/user_data';

export default function sign_in() {
    const [userName, setUserName] = useState();
    const [pass, setPass] = useState();
    const [userData, setUserData] = useState<UserProps[]>([])

    useEffect(() => {
        const fetchData = async () => {
            setUserData(usrData);
        };
        fetchData();
        console.log(JSON.stringify(usrData, null, 2));
    },[])

    const showToast = () => {
  // ToastAndroid.LONG is approx 3.5 seconds
  ToastAndroid.show("Signing in as " + userName, ToastAndroid.SHORT);
  ToastAndroid.show("Redirecting to profile...", ToastAndroid.LONG);
};

    const signIn = () => {
    const foundUser = usrData.find(user => user.userName === userName);

    if(foundUser && foundUser.pass === pass) {
            showToast();
            const session = usrData.find( u => u.userName === userName);
            setTimeout(() => {
                router.replace({
                    pathname: '/(tabs)/profile',
                    params: {
                        usrId: session.id,
                        usrFirstName: session.firstName,
                        usrMiddleName: session.middleName,
                        usrLastName: session.lastName,
                        usrName: session.userName,
                        usrProfile: session.profile,
                        usrFollowers: session.followers,
                        usrFollowing: session.following,
                    }
                })
            }, 5000);
    } else {
        alert('Invalid username or password!');
    }

    }

return (
    <View className='flex-1 justify-center items-center'>
        <View className='fixed mb-14 flex-2'>
            <Text className='text-yellow-500 text-6xl font-extrabold'>Social Media App</Text>
        </View>
        <View className='justify-center items-center bg-slate-400 h-96 w-[85%] rounded-md'>
      <Text className='color-white text-4xl mb-12'>Sign in to continue</Text>
      <TextInput className={style.textInput} 
                    placeholder='Username'
                    value={userName}
                    onChangeText={(text) => setUserName(text)}
                    ></TextInput>
      <TextInput className={style.textInput} 
                    secureTextEntry={true}
                    placeholder='Password'
                    value={pass}
                    onChangeText={(text) => setPass(text)}
                    ></TextInput>
      <TouchableOpacity onPress={signIn} className='bg-slate-500 h-14 justify-center items-center mt-7 w-48'>
        <Text className='color-green-100 w-full text-xl text-center'>Sign in</Text>
      </TouchableOpacity>
      </View>
      <View className='bg-green-100 h-14 w-[85%] justify-center items-center fixed border-red-200 border'>
        <Text>You can check the credentials in data/user_data for this demo</Text>
      </View>
    </View>
  )
}

const style = {
    textInput: 'bg-slate-300 pl-4 color-cyan-800 w-80 h-14 rounded-md m-2'
}