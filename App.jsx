import { View, Text, Button, ScrollView, StatusBar } from 'react-native';
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
import StatusBarComponets from './src/components/StatusBarComponets';
import UseRefHooks from './src/components/UseRefHooks';
import ModalView from './src/components/ModalView';
import UserAlert from './src/components/UserAlert';
import PostAPi from './src/components/PostAPi';
import Put_APi from './src/components/Put_APi';
import PetchAPis from './src/components/PetchAPis';
import DeleteApi from './src/components/DeleteApi';
import GetAPi from './src/components/GetAPi';
import PlatformPractice from './src/components/PlatformPractice';

const App = () => {
  return (
    <ScrollView>
      <View
        style={{
          paddingTop: StatusBar.currentHeight,
          flex: 1,
          backgroundColor: '#8000ff',
        }}
      >
        <StatusBar
          animated={true}
          barStyle="light-content"
          hidden={false}
          translucent={true}
          showHideTransition="fade"
        />
      </View>
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
        {/* <ButtonPress /> */}
        {/* <StatusBarComponets /> */}
        {/* {<UseRefHooks />} */}
        {/* {<ModalView />} */}
        {/* {<UserAlert />} */}
        {/* {<PostAPi />} */}
        {/* {<Put_APi />} */}
        {/* {<PetchAPis />} */}
        {/* {<DeleteApi />} */}
        {/* {<GetAPi />} */}
        {<PlatformPractice />}
      </View>
    </ScrollView>
  );
};

export default App;
