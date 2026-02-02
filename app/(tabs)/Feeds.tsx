import React, { useEffect, useState } from 'react';
import { ScrollView, Text, ToastAndroid, View } from 'react-native';
import Button from './../../components/button';
import feedData from './../../data/feed_data';


import { Card, CardPfp, CardUserName } from "./../../components/card";

export type FeedProps = {
    id: number,
    userName: string,
    userProfile: any,
    date: string,
    headerCApt: string,
    captions: string,
    likes: number,
    comments: number

}

export default function Feeds() {
    const [feeds, setFeeds] = useState<FeedProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            setFeeds(feedData);
            ToastAndroid.show("Showing dummy feeds", ToastAndroid.SHORT);
        };
        fetchData();
    }, []);

  return (
    <View className="flex-1 mt-7 justify-center items-center">
        <View className='bg-slate-200 w-[95%] h-20 justify-center items-center' >

            <Text className='color-yellow-500'>Social Media App - Static</Text>
        </View>
        <ScrollView>
            {feeds.map((feed) => (
                <Card key={feed.id}>
                    <View className='flex-row items-center mt-2 bg-gray-300 h-23 p-2 rounded-md'>
                    <CardPfp source={feed.userProfile} />
                    <CardUserName>{feed.userName}</CardUserName>
                   <Text className='ml-2 font-bold color-gray-700 text-2xl'>• {feed.date}</Text>
                    </View>
                    <View className='flex-col items-center mt-2 bg-gray-300 h-23 p-2 rounded-md'>
                    <Text className='font-bold text-xl' >{feed.headerCapt}</Text>
                    <Text>{feed.captions}</Text>
                    </View>

                    <View className='justify-between flex flex-row'>
                    <View>
                        <Button title="👍 Likes" desc={feed.likes}/>
                    </View>
                    <View>
                        <Button title="💬 Comments" desc={feed.comments} />
                    </View>
                    <View>
                        <Button title="Share "/>
                    </View>
                    </View>
                </Card>
            ))} 
        </ScrollView>
    </View>
  )
} 