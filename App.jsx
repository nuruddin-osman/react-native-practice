import { View, Text, Button } from 'react-native';
import React from 'react';
import First from './src/components/First';
import FlatListScreen from './src/components/FlatListScreen';

const App = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>
        react native android emulator when run this project then emulator status
        bar hide
      </Text>
      <Button title="presss me" />
      <First />
      <FlatListScreen />
    </View>
  );
};

export default App;
