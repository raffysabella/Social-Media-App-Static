import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

import { UserProps } from '../(tabs)/Profile';
import user_data from '../../data/user_data';



export default function UserAlbums() {
  const [albumData, setAlbumData] = useState<UserProps []>([]);

  useEffect(() => {
    // const targetUser = user_data.find((user) => user.userName === 'wyatt_kft');
    // if (targetUser) {
    //   setAlbumData(targetUser.photos);
    // }
    setAlbumData(user_data[0]?.photos || []);
  }, [])

  console.log(albumData);

  return (
       albumData.map((album) => (
        <View key={album.photoId}>
            <Text className='absolute z-10 color-slate-100 right-2 bottom-2 text-shadow-md'>{album.p_likes} Likes</Text>
          <Image source={album.photo} className='h-40 w-32 m-1' />
        </View>
       ))
  )
}