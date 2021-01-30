import React, { useState } from 'react';
import styles from './styles';
import { 
  MaterialCommunityIcons, 
  FontAwesome5,
  Entypo,
  Fontisto,
  MaterialIcons,
} from '@expo/vector-icons';
import {
  View,
  Text,
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const InputBox = () => {
  const [message, setMessage] = useState( );
  
  const onMicrophonePress = () => {
    console.log('Microfone');
    
  }

  const onSendPress = () => {
    console.log(`Enviando: ${message}`);
    //Enviando a mensagem para o Backend
    setMessage();
  }
  
  const onPress = () => {
    if (!message) {
      onMicrophonePress();
    } else {
      onSendPress();
    }
  }
  return (
    <View style={styles.container}>
        <View style={styles.mainContainer}>
          <FontAwesome5 name='laugh' size={24} color='grey' />
          <TextInput
          placeholder={'Digite uma Mensagem'}
           style={styles.textInput}
           multiline
           
           value={message}
           onChangeText={setMessage}
           />
          <Entypo name='attachment' size={24} color='grey' style={styles.icon} />
          {!message && <Fontisto name='camera' size={24} color='grey' style={styles.icon} />
          
        }
        </View>
        <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          {!message
          
        ? <MaterialCommunityIcons name='microphone' size={30} color='white' />
        : <MaterialIcons name='send' size={30} color='white' />

      }
        </View>
        </TouchableOpacity>
    </View>
  )
}

export default InputBox;