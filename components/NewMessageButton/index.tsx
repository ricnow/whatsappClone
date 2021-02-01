import React from 'react';
import {TouchableOpacity, View} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';

const NewMessageButton = () => {

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Contacts');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons
          name="android-messages"
          size={28}
          color="white"
          style={{
            transform: [{rotateY: '180deg'}]
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default NewMessageButton;