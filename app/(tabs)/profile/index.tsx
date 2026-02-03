import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import UserAlbums from "../../components/UserAlbums";
import UserPost from "../../components/UserPost";


export type UserProps = {
  id: number,
  userName: string,
  pass: string,
  profile: any,
  firstName: string,
  middleName: string,
  lastName: string,
  following: number,
  followers: number,
  photos: any,
  photoId: number,
  photo: any,
  p_likes: number,
  post: any,
  postId: number,
  title: string,
  desc: string,
  likes: number,
  comments: number,
  date: string
}


export default function Profile() {
  const [usrData, setUserData] = useState<UserProps[]>([]);
  const { 
    usrId,
    usrFirstName,
    usrMiddleName, 
    usrLastName, 
    usrName,
    usrProfile,
    usrFollowing,
    usrFollowers,
   } = useLocalSearchParams();
   const [show, setShow] = useState("Post");

   useEffect(() => {
  if (!usrId || usrId === "") {
    router.navigate('/(auth)/sign_in');
    ToastAndroid.show("Session Expired", ToastAndroid.SHORT);
  }
}, [usrId]); 

  const ShowRender = () => {
    if (show === "Post") {
      return (
          <UserPost session={usrId} profile={usrProfile} userName={usrName} />
      )
    } else if (show === "Albums") {
      return (
        <View className="w-[95%] flex-row flex-wrap justify- p-4">
          <UserAlbums session={usrId} />
        </View>
          
      )
    }
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setUserData(userData);
  //   };
  //   fetchData();
  // }, []);

  return (
    <ScrollView>
    <View className='flex-grow justify-start items-center bg-slate-200'>
      <View className='bg-slate-500 w-[95%] h-48 justify-center items-center - mb-14 rounded-e-xl'>
        <Image style={styles.img} source={usrProfile} />
        <FontAwesome className="absolute right-3 bottom-1" size={34} name='edit' color='white' />
      </View>

      <View className='w-[95%]'>
        <Text className='text-[43px] font-extrabold'>{usrFirstName} {usrMiddleName} {usrLastName}</Text>
        <Text className='text-[23px] color-gray-500 '>@{usrName}</Text>
      </View>
        

        <View className='w-[95%] items-center'>
          <Text className='text-xl font-normal'>
            <Text className='text-2xl font-bold'>{usrFollowers} </Text> 
            Followers | 
            <Text className='text-2xl font-bold'> {usrFollowing} </Text> 
            Following</Text>
        </View>

        <View className='bg-slate-300 w-[95%] p-4 mt-2 items-center'>
          <Text>Giving me an option was your biggest mistake</Text>
        </View>

        <View className="w-[95%] justify-around flex-row mt-3 sticky">

          <TouchableOpacity className="items-center" onPress={() => setShow('Post')}>
            <FontAwesome size={25} name='feed' />
            <Text>Post</Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center" onPress={() => setShow('Albums')}>
            <FontAwesome size={25} name='photo' />
            <Text>Albums</Text>
          </TouchableOpacity>
          


        </View>

          <ShowRender />
          
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    img: {
        height: 160,
        width: 160,
        borderRadius: 100,
        marginBottom: 12,
        position: 'absolute',
        top: 52
    }
})