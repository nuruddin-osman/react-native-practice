import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';
import { styles } from '../screens/contacts/style';

const UseRefHooks = () => {
  const myRef = useRef();
  const handlePress = () => {
    myRef.current.setNativeProps({
      text: 'Taspiya',
    });
    myRef.current.focus();
  };
  return (
    <View>
      <Text style={styles.heading}>UseRefHooks</Text>
      <View>
        <TextInput ref={myRef} style={styles.inputs} placeholder="entrt here" />
        <TouchableOpacity
          style={styles.touchableOpacityBtn}
          onPress={handlePress}
        >
          <Text style={styles.touchableOpacityBtnText}>Click me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UseRefHooks;
