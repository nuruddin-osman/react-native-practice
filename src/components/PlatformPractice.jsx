import { View, Text, Platform } from 'react-native';
import React from 'react';
import { styles } from '../screens/contacts/style';

const PlatformPractice = () => {
  return (
    <View>
      <Text style={styles.heading}>PlatformPractice</Text>
      <View style={styles.container}>
        <Text>{Platform.OS === 'ios' ? 'IOS' : 'android'}</Text>
      </View>
      <View style={styles.container}>
        <Text>
          {Platform.select({
            ios: 'this is an IOS',
            android: 'this is an Android',
            macos: 'this is an macos',
          })}
        </Text>
      </View>
    </View>
  );
};

export default PlatformPractice;
