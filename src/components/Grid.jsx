import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { data } from '../screens/contacts/contactsUaer';

const Grid = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Grid</Text>
      <ScrollView contentContainerStyle={styles.container}>
        {data.map(item => (
          <View key={item.id} style={styles.wrapper}>
            <Text style={styles.names}>{item.name}</Text>
            <Text style={styles.emails}>{item.email}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'orange',
    textAlign: 'center',
    marginVertical: 50,
  },
  mainContainer: {
    flex: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    paddingHorizontal: 10,
  },
  wrapper: {
    backgroundColor: 'orange',
    padding: 20,
    borderRadius: 10,
    width: '48.7%',
  },
  names: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  emails: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Grid;
