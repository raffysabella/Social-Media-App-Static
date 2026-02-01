import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router, useLocalSearchParams } from 'expo-router';

export default function _layout() {
    const {usrFirstName, usrLastName} = useLocalSearchParams();
    const [name, setName] = useState("");

    useEffect(() => {
        setName(usrFirstName + " " + usrLastName);
    }, [usrFirstName])

  return (
    <Tabs screenOptions={{
        headerShown: true,
        tabBarLabelStyle: {
            fontSize: 16
        }
    }}>
        <Tabs.Screen
            name="Feeds"
            
            options={{
                headerShown: false,
                tabBarBadge: 1,
                tabBarIcon: () => <FontAwesome size={30} name="feed" />
            }}
            />
        <Tabs.Screen
            name="Friends"
            options={{
                headerTitle: 'Friend list',
                tabBarBadge: 10,
                tabBarIcon: () => <FontAwesome size={30} name="group" />
            }}
            />
        <Tabs.Screen
            name="Profile"
            options={{
                headerTitle: name,
                headerShown: true,
                tabBarIcon: () => <FontAwesome size={30} name="user" />
            }}
            />

    </Tabs>
  )
}
