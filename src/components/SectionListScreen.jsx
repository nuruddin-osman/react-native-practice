import { View, Text, SectionList, StyleSheet } from 'react-native';
import React from 'react';

const itemsList = [
  {
    id: 1,
    title: 'Fruiets',
    data: [
      { id: 1, name: 'apple' },
      { id: 2, name: 'mango' },
      { id: 3, name: 'Fineapple' },
      { id: 4, name: 'orange' },
    ],
  },
  {
    id: 2,
    title: 'Vegitables',
    data: [
      { id: 1, name: 'Tomato' },
      { id: 2, name: 'Potato' },
      { id: 3, name: 'Drugon tee' },
      { id: 4, name: 'Helencha' },
    ],
  },
  {
    id: 3,
    title: 'Animales',
    data: [
      { id: 1, name: 'Elepent' },
      { id: 2, name: 'Dog' },
      { id: 3, name: 'cow' },
      { id: 4, name: 'got' },
    ],
  },
];

const SectionListScreen = () => {
  const renderSectionHeader = ({ section }) => {
    return (
      <View>
        <Text style={style.styleTitle}>{section.title}</Text>
      </View>
    );
  };
  const renderItem = ({ item }) => {
    return (
      <View>
        <Text style={style.listItem}>{item.name}</Text>
      </View>
    );
  };
  return (
    <View>
      <Text style={style.headers}>SectionListScreen</Text>
      <SectionList
        sections={itemsList}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={style.container}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  headers: {
    backgroundColor: 'red',
    fontSize: 30,
  },
  styleTitle: {
    fontSize: 40,
    color: 'red',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'red',
  },
  listItem: {
    fontSize: 30,
    color: 'gray',
    padding: 10,
  },
});

export default SectionListScreen;
