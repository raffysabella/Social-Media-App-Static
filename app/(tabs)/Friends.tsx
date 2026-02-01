import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import feedData from './../../data/feed_data';

import { Card, CardPfp, CardUserName } from "./../../components/card";

export type FeedProps = {
    id: number,
    userName: string,
    userProfile: any,
    date: string,
    headerCapt: string,
    captions: string,
    likes: number,
    comments: number

}

export default function Friends() {
    const [feeds, setFeeds] = useState<FeedProps[]>([])

    useEffect(() => {
        const fetchData = async () => {
            setFeeds(feedData);
        };
        fetchData();
    }, []);

  return (
    <View className="flex-1">
        <ScrollView>
            {feeds.map((feed) => (
                <Card key={feed.id}>
                    <View className='flex-row items-center mt-2 bg-gray-300 h-23 p-2 rounded-md'>
                    <CardPfp source={feed.userProfile} />
                    <CardUserName>{feed.userName}</CardUserName>
                    </View>
                </Card>
            ))} 
        </ScrollView>
    </View>
  )
} 