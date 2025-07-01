import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './style';

const ContactsItem = ({ name, email }) => {
  return (
    <View style={styles.itemWrapper}>
      <Text style={styles.itemsName}>{name}</Text>
      <Text style={styles.itemsEmail}>{email}</Text>
    </View>
  );
};

export default ContactsItem;
