import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import React from 'react';
import { styles } from '../screens/contacts/style';

const ButtonStyle = () => {
  return (
    <View>
      <Text style={styles.heading}>ButtonStyle</Text>
      <View>
        <TouchableOpacity
          style={styles.touchableOpacityBtn}
          activeOpacity={0.7}
        >
          <Text style={styles.touchableOpacityBtnText}>Opacity Button</Text>
        </TouchableOpacity>
        <TouchableHighlight
          style={styles.touchableHeighlightBtn}
          underlayColor="#8006f9"
          onPress={() => console.log('hello')}
        >
          <Text style={styles.touchableOpacityBtnText}>Highlight Button</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default ButtonStyle;
