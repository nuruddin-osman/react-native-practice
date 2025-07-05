import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../screens/contacts/style';
import axios from 'axios';

const PetchAPis = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
  });
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  const handlePress = async () => {
    try {
      const res = await axios.patch(
        `http://10.0.2.2:3000/users/${formData.id}`,
        {
          ...(formData.name && { name: formData.name }),
          ...(formData.email && { email: formData.email }),
        },
      );
      console.log(res.data);
      Alert.alert('Success', 'Data updete success');
    } catch (error) {
      Alert.alert('Error', 'Update failed');
    }
  };
  return (
    <View>
      <Text style={styles.heading}>PetchAPis</Text>
      <View>
        <TextInput
          value={formData.id}
          onChangeText={value => handleChange('id', value)}
          placeholder="Enter id"
          style={styles.inputs}
        />
        <TextInput
          value={formData.name}
          onChangeText={value => handleChange('name', value)}
          placeholder="Enter name"
          style={styles.inputs}
        />
        <TextInput
          value={formData.email}
          onChangeText={value => handleChange('email', value)}
          placeholder="Enter email"
          style={styles.inputs}
        />
        <Button title="Update" onPress={handlePress} />
      </View>
    </View>
  );
};

export default PetchAPis;
