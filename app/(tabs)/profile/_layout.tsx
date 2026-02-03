import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { router, useLocalSearchParams } from 'expo-router';

import { ToastAndroid, View, Text } from 'react-native';

function CustomDrawerContent(props: any){
    const { 
    usrId,
    usrFirstName
   } = useLocalSearchParams();
  return (
    <>
    <DrawerContentScrollView {...props}>
      {/* This renders the standard screens (like "My Details") */}
      <DrawerItemList {...props} /> 

      <DrawerItem
        label="Loading Screen"
        onPress={() => router.navigate({
                pathname: '/',
                params: {
                  usrId: usrId,
                  usrFirstName: usrFirstName
                }
             })} />

      <DrawerItem
        label="Log out"
        onPress={ () => {
        router.dismissAll(); 
        router.replace('/(auth)/sign_in');
        ToastAndroid.show("Session Expired | Signing out..", ToastAndroid.SHORT)
      }} />
    </DrawerContentScrollView>
    <View className='justify-center items-center mb-2'>
      <Text> Social Media App - Static | by Raffy Sabella</Text>
      <Text className='font-semibold'>v1.0.0.1</Text>
    </View>
    </>
  )
}

// 3. Use it in your Layout
export default function ProfileDrawerLayout() {
      const { usrFirstName } = useLocalSearchParams();
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />} // <--- Plug it in here
      screenOptions={{
        headerShown: true,
        headerTitle: `${usrFirstName}'s Profile Zone`,
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'My Details',
          title: 'Profile',
          drawerItemStyle: {display: 'none'}
        }}
      />
      <Drawer.Screen
        name="details"
        options={{
          drawerLabel: 'Project Details',
          title: 'Implementation Manual',
        }}
      />
    </Drawer>
    
    
  );
}