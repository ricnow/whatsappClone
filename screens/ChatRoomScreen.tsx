import React from 'react';
import { Text, FlatList, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';
import chatRoomData from '../data/Chats';
import ChatMessage from '../components/ChatMessage';
import fundo from '../assets/images/background.png';


const ChatRoomScreen = () => {
    const route = useRoute();
   // console.log(route.params);
  
    
    return (
        <ImageBackground style={{width:'100%'}} source={fundo}>
        <FlatList
            data={chatRoomData.messages}
            renderItem={({ item }) => <ChatMessage message={item} />}
            inverted
        />
        </ImageBackground>
    );
}

export default ChatRoomScreen;