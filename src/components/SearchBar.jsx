import { View, Text, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../screens/contacts/style';
import { data } from '../screens/contacts/contactsUaer';

const SearchBar = () => {
  const [searchUser, setSearchUser] = useState('');
  const filterUser = data.filter(item =>
    item.name.toLowerCase().includes(searchUser.toLowerCase()),
  );

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>SearchBar</Text>
      <View>
        <TextInput
          placeholder="Search here..."
          value={searchUser}
          onChangeText={setSearchUser}
          style={styles.inputs}
        />
        <FlatList data={filterUser} renderItem={renderItem} />
      </View>
    </View>
  );
};

export default SearchBar;
