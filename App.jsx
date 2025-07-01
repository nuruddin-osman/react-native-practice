import { View, Text, Button, ScrollView } from 'react-native';
import React from 'react';
import First from './src/components/First';
import FlatListScreen from './src/components/FlatListScreen';
import SectionListScreen from './src/components/SectionListScreen';

const App = () => {
  return (
    <ScrollView>
      <View>
        <Text style={{ fontSize: 30 }}>
          react native android emulator when run this project then emulator
          status bar hide
        </Text>
        <Button title="presss me" />
        <First />
        <FlatListScreen />
        <SectionListScreen />
      </View>
    </ScrollView>
  );
};

export default App;
