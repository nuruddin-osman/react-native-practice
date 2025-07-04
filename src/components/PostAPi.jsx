import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../screens/contacts/style';
import axios from 'axios';

const PostAPi = () => {
  const [formData, setFormData] = useState({ id: '', name: '', email: '' });
  //   const newData = { ...data, content: content, imageId: imageId };
  // const res = await fetch(apiUrl + "article", {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json",
  //     Accept: "application/json",
  //     Authorization: `Bearer ${token()}`,
  //   },
  //   body: JSON.stringify(newData),
  // });
  // const result = await res.json();
  // if (result.status == true) {
  //   toast.success(result.message);
  // } else {
  //   toast.error("Credential error");
  // }

  const handlePress = async (field, value) => {
    setFormData({ ...formData, [field]: value });
    try {
      const res = await axios
        .post('http://10.0.2.2:3000/users', formData)
        .then(response => {
          console.log('success');
        });
    } catch (error) {
      console.log(error.message);
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
          onChangeText={value => handlePress('id', value)}
        />
        <TextInput
          style={styles.inputs}
          value={formData.name}
          placeholder="name"
          onChangeText={value => handlePress('name', value)}
        />
        <TextInput
          style={styles.inputs}
          value={formData.email}
          placeholder="email"
          onChangeText={value => handlePress('email', value)}
        />
        <Button title="Post" onPress={handlePress} />
      </View>
    </View>
  );
};

export default PostAPi;
