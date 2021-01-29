import React from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ChatRoomScreen = () => {
    const route = useRoute();
    console.log(route.params);
    
    return (
        <Text>Conversas</Text>
    )
}

export default ChatRoomScreen;