import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

const UseEffectHooks = () => {
  const [count, setCount] = useState(0);
  const [sources, setSources] = useState(0);
  useEffect(() => {
    console.log('Amake click koreteche');
  }, [sources]);
  return (
    <View>
      <Text style={styles.heading}>UseEffectHooks</Text>
      <View>
        <Text style={styles.text}>This is an Items Number ={count}</Text>
        <Text style={styles.text}>{sources}</Text>
      </View>
      <View>
        <Button onPress={() => setCount(count + 1)} title="Count me" />
        <Button onPress={() => setSources(sources + 10)} title="Count me" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'orange',
    textAlign: 'center',
    marginVertical: 50,
  },
  text: {
    fontSize: 20,
    color: '#2d2d2d',
    textAlign: 'center',
  },
});
export default UseEffectHooks;
