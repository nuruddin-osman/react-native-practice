import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { data } from './contactsUaer';
import { styles } from './style';
import ContactsItem from './ContactsItem';

const ContactsScreen = () => {
  const renderItem = ({ item }) => (
    <ContactsItem name={item.name} email={item.email} />
  );
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        ListHeaderComponent={<Text style={styles.heading}>Users</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ContactsScreen;
