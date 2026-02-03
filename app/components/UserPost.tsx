import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { UserProps } from '../(tabs)/profile/Profile';
import user_data from './../../data/user_data';

import Button from '../../components/button';
import { Card, CardPfp, CardUserName } from '../../components/card';

type UserPost = {
  session: number,
  profile: any,
  userName: string
}

export default function UserPost({session, profile, userName}: UserProps) {
  const [usrPost, setUsrPost] = useState<UserProps[]>([]); 

  useEffect(() => {
    setUsrPost(user_data[session]?.post || []);
  }, [])
  console.log('\x1b[32mPost Data Fetched from id \x1b[32m' + session)
  console.log(usrPost);

  return (
    usrPost.map((post) => (
      <Card key={post.postId}>
                          <View className='flex-row items-center mt-2 bg-gray-300 h-23 p-2 rounded-md'>
                          <CardPfp source={profile} />
                          <CardUserName>{userName}</CardUserName>
                         <Text className='ml-2 font-bold color-gray-700 text-2xl'>• {post.date}</Text>
                          </View>
                          <View className='flex-col items-center mt-2 bg-gray-300 h-23 p-2 rounded-md'>
                          <Text className='font-bold text-xl' >{post.title}</Text>
                          <Text>{post.desc}</Text>
                          </View>
                          <View className='justify-between flex flex-row'>
                          <View>
                              <Button title="👍 Likes" desc={post.likes}/>
                          </View>
                          <View>
                              <Button title="💬 Comments" desc={post.comments} />
                          </View>
                          <View>
                              <Button title="Share "/>
                          </View>
                          </View>
                      </Card>
    ))
  )
}