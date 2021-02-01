import { NavigationContainer, DefaultTheme, DarkTheme, useRoute } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import * as React from 'react';
import {ColorSchemeName, Image, View, Text, TouchableOpacity} from 'react-native';
import {
  Octicons,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  AntDesign,
} from '@expo/vector-icons';

import NotFoundScreen from '../screens/NotFoundScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import Colors from "../constants/Colors";
import ContactsScreen from "../screens/ContactsScreen";
import styles from '../components/ChatMessage/styles';
import { useNavigation } from '@react-navigation/native';


// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();
  function RootNavigator() {
  return (

    
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Colors.light.tint,
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: Colors.light.background,
      headerTitleAlign: 'left',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }}>
      <Stack.Screen
        name="Root"
        component={MainTabNavigator}
        options={{
          title: "WhatsApp",
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              width: 60,
              justifyContent: 'space-between',
              marginRight: 10,
            }}>
              <Octicons name="search" size={22} color={'white'} />
              <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'} />
            </View>
            
            
            
          )
        }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={({ route })  => ({
          title: null,
          
          headerLeft: () => (
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
				<HeaderBackButton tintColor='white' />
				<Image source={{uri: route.params.image}}
					style={{
						width: 35,
						height:35,
						borderRadius: 25,}} />
				<Text style={{
					color: 'white',
					fontSize: 18,
					fontWeight: 'bold',
					marginLeft: 5,
					textAlign: 'center'}}>
						{route.params.name}
				</Text>
            </View> ),
          
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              width: 100,
              justifyContent: 'space-between',
              marginRight: 10,
            }}>
             
              <FontAwesome5 name="video" size={22} color={'white'} />
              <MaterialIcons name="call" size={22} color={'white'} />
              <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'} />
            </View>
          )
        })}
      />
      <Stack.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{
          title: 'Contatos',
        }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}