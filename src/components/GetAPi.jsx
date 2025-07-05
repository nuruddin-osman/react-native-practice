import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from '../screens/contacts/style';
import axios from 'axios';

const GetAPi = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('http://10.0.2.2:3000/users').then(response => {
      setUsers(response.data);
    });
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.heading}>GetAPi</Text>
      <View style={styles.container}>
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item, index) => {
            item.id ? item.id.toString() : index.toString();
          }}
        />
      </View>
    </View>
  );
};

export default GetAPi;
