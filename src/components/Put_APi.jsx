import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../screens/contacts/style';
import axios from 'axios';

const Put_APi = () => {
  const [formData, setFormData] = useState({ id: '', name: '', email: '' });
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  const handlePrass = async () => {
    try {
      const res = await axios.put(
        `http://10.0.2.2:3000/users/${formData.id}`,
        formData,
      );
      Alert.alert('success', 'Post successfull');
      console.log(res.data);
      setFormData({ id: '', name: '', email: '' });
    } catch (error) {
      console.log('Error', 'Post in failed');
    }
  };
  return (
    <View>
      <Text style={styles.heading}>Put_APi</Text>
      <View style={{ padding: 10 }}>
        <TextInput
          style={styles.inputs}
          value={formData.id}
          placeholder="Enter id"
          onChangeText={value => handleChange('id', value)}
        />
        <TextInput
          style={styles.inputs}
          value={formData.name}
          placeholder="Enter name"
          onChangeText={value => handleChange('name', value)}
        />
        <TextInput
          style={styles.inputs}
          value={formData.email}
          placeholder="Enter email"
          onChangeText={value => handleChange('email', value)}
        />
        <Button title="Update" onPress={handlePrass} />
      </View>
    </View>
  );
};

export default Put_APi;
