import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { styles } from '../screens/contacts/style';

const ButtonPress = () => {
  const handlePress = () => {
    console.log('Press me now');
  };
  const handlePressIn = () => {
    console.log('Press In');
  };
  const handlePressOut = () => {
    console.log('Press Out');
  };
  const handleLongPress = () => {
    console.log('Press Long');
  };

  return (
    <View>
      <Text style={styles.heading}>ButtonPress</Text>
      <View>
        <Pressable
          onPress={handlePress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onLongPress={handleLongPress}
          delayLongPress={5000}
          style={styles.touchableOpacityBtn}
        >
          <Text style={styles.touchableOpacityBtnText}>Press me</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ButtonPress;
