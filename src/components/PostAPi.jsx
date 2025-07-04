import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../screens/contacts/style';
import axios from 'axios';

const PostAPi = () => {
  const [formData, setFormData] = useState({ id: '', name: '', email: '' });

  const handleInput = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  const handlePress = async () => {
    if (
      !formData.id.trim() ||
      !formData.name.trim() ||
      !formData.email.trim()
    ) {
      alert('সবগুলো ফিল্ড পূরণ করুন');
      return;
    }
    try {
      const res = await axios.post('http://10.0.2.2:3000/users', formData);
      console.log(res.data);
      Alert.alert('done');
      setFormData({ id: '', name: '', email: '' });
    } catch (error) {
      console.log('error:');
    }
  };
  return (
    <View>
      <Text style={styles.heading}>PostAPi</Text>
      <View>
        <TextInput
          style={styles.inputs}
          value={formData.id}
          placeholder="ID"
          onChangeText={value => handleInput('id', value)}
        />
        <TextInput
          style={styles.inputs}
          value={formData.name}
          placeholder="name"
          onChangeText={value => handleInput('name', value)}
        />
        <TextInput
          style={styles.inputs}
          value={formData.email}
          placeholder="email"
          onChangeText={value => handleInput('email', value)}
        />
        <Button title="Post" onPress={handlePress} />
      </View>
    </View>
  );
};

export default PostAPi;
