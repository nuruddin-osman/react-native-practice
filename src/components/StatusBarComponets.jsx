import { View, Text, StatusBar } from 'react-native';
import React from 'react';

const StatusBarComponets = () => {
  return (
    <View>
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
        <Text>StatusBarComponets</Text>
      </View>
    </View>
  );
};

export default StatusBarComponets;
