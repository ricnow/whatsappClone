import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import { User } from "../../types";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';
import ChatRooms from '../../data/ChatRooms';



export type ContactListItemProps = {
  user: User;
}

const ContactListItem = (props: ContactListItemProps) => {
  
    const { user } = props;
    const navigation = useNavigation();
     
    const onClick = () => {
       //Redirecionar para chat com a pessoa
       navigation.navigate('ChatRoom', {
        id: user.id, 
        name: user.name,
        image: user.imageUri,
    })
}
 
    
  
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.lefContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar}/>

          <View style={styles.midContainer}>
            <Text style={styles.username}>{user.name}</Text>
            <Text numberOfLines={2} style={styles.status}>{user.status}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
};

export default ContactListItem;