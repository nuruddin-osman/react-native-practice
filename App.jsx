import { View, Text, Button, ScrollView } from 'react-native';
import React from 'react';
import First from './src/components/First';
import FlatListScreen from './src/components/FlatListScreen';
import SectionListScreen from './src/components/SectionListScreen';
import Login from './src/components/Login';
import ContactsScreen from './src/screens/contacts/ContactsScreen';
import Grid from './src/components/Grid';
import UseEffectHooks from './src/components/UseEffectHooks';
import PracticeClass from './src/components/ClassComponents';
import ButtonStyle from './src/components/ButtonStyle';
import Loading from './src/components/Loading';
import ButtonPress from './src/components/ButtonPress';

const App = () => {
  return (
    <ScrollView>
      <View>
        {/* <Text style={{ fontSize: 30 }}>
          react native android emulator when run this project then emulator
          status bar hide
        </Text>
        <Button title="presss me" />
        <First />
        <FlatListScreen />
        <SectionListScreen /> */}
        {/* <Login /> */}
        {/* <ContactsScreen /> */}
        {/* <Grid /> */}
        {/* <UseEffectHooks /> */}
        {/* <PracticeClass /> */}
        {/* <ButtonStyle /> */}
        {/* <Loading /> */}
        <ButtonPress />
      </View>
    </ScrollView>
  );
};

export default App;
