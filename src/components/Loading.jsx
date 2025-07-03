import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../screens/contacts/style';

const Loading = () => {
  const [loading, setLoading] = useState(false);
  const handleLoding = () => {
    setLoading(!loading);
  };
  return (
    <View>
      <Text style={styles.heading}>Loading</Text>
      {/* <ActivityIndicator size={50} color="#8006f9" /> */}
      <View>
        <TouchableOpacity
          style={styles.touchableOpacityBtn}
          onPress={handleLoding}
        >
          <Text style={styles.touchableOpacityBtnText}>
            {loading ? 'Show Load' : 'Show Load'}
          </Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <>
          <View style={styles.lodingBox}>
            <ActivityIndicator size="large" color="#8006f9" />
            <Text>Loading...</Text>
          </View>
        </>
      ) : (
        ''
      )}
    </View>
  );
};

export default Loading;
