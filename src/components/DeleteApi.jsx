import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../screens/contacts/style';
import axios from 'axios';

const DeleteApi = () => {
  const [userId, setUserId] = useState('');
  const handleChange = value => {
    setUserId(value);
  };

  const handlePress = async () => {
    try {
      const res = await axios.delete(`http://10.0.2.2:3000/users/${userId}`);
      Alert.alert('success', 'The items delete done');
      console.log(res.data);
    } catch (error) {
      Alert.alert('Error', 'The items delete failed');
    }
  };
  return (
    <View>
      <Text style={styles.heading}>DeleteApi</Text>
      <View>
        <TextInput
          value={userId}
          onChangeText={value => handleChange(value)}
          placeholder="Enter id"
          style={styles.inputs}
        />
        <Button title="Delete" onPress={handlePress} />
      </View>
    </View>
  );
};

export default DeleteApi;
