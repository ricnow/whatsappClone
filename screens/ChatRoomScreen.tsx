import React from 'react';
import { Text, FlatList, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';
import chatRoomData from '../data/Chats';
import ChatMessage from '../components/ChatMessage';
import fundo from '../assets/images/background.png';
import InputBox from '../components/InputBox';


const ChatRoomScreen = () => {
    const route = useRoute();
   // console.log(route.params);
  
    
    return (
        <ImageBackground style={{width:'100%', height: '100%'}} source={fundo}>
            
        <FlatList
            data={chatRoomData.messages}
            renderItem={({ item }) => <ChatMessage message={item} />}
            inverted
        />
        <InputBox />
        </ImageBackground>
          
    );
}

export default ChatRoomScreen;