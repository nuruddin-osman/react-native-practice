import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import React from 'react';

const listItem = [
  { id: 1, title: 'Item-1' },
  { id: 2, title: 'Item-2' },
  { id: 3, title: 'Item-3' },
  { id: 4, title: 'Item-4' },
  { id: 5, title: 'Item-5' },
  { id: 6, title: 'Item-6' },
  { id: 7, title: 'Item-7' },
  { id: 8, title: 'Item-8' },
];

const FlatListScreen = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={style.itemWrapper}>
        <Text style={style.items}>{item.title}</Text>
      </View>
    );
  };
  return (
    <View>
      <Text style={style.flats}>FlatListScreen</Text>
      <FlatList
        data={listItem}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={style.flat}
      />
    </View>
  );
};

const style = StyleSheet.create({
  flat: {
    marginTop: 40,
    backgroundColor: 'purple',
  },
  flats: {
    backgroundColor: 'red',
    fontSize: 30,
  },
  itemWrapper: {
    marginHorizontal: 30,
  },
  items: {
    color: '#FFF',
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderColor: 'green',
    fontSize: 24,
  },
});

export default FlatListScreen;
