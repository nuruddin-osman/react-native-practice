import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { styles } from '../screens/contacts/style';

const UserAlert = () => {
  const handelPress = () => {
    Alert.alert(
      'Succes',
      'Are you sure the alert is correct',
      [
        {
          text: 'save',
          onPress: () => console.log('first'),
        },
        {
          text: 'cancel',
          onPress: () => console.log('Second'),
        },
      ],
      { cancelable: false },
    );
  };
  return (
    <View>
      <Text style={styles.heading}>UserAlert</Text>
      <View>
        <TouchableOpacity
          style={styles.touchableOpacityBtn}
          onPress={handelPress}
        >
          <Text style={styles.touchableOpacityBtnText}>show alert</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserAlert;
