import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handlePress = () => {
    console.log('====================================');
    console.log('email:', email, 'password:', password);
    console.log('====================================');

    setEmail('');
    setPassword('');
  };
  return (
    <View style={style.container}>
      <Text style={style.heading}>Login Form</Text>

      <View>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="enter email"
          style={style.inputs}
          placeholderTextColor="#2d2d2d"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="enter password"
          style={style.inputs}
          placeholderTextColor="#2d2d2d"
          secureTextEntry
        />
      </View>
      <TouchableOpacity onPress={handlePress} style={style.buttonWrapper}>
        <Text style={style.loginBtn}>Sign in</Text>
      </TouchableOpacity>
      <View style={style.textShowHead}>
        <Text style={style.textShow}>{email}</Text>
        <Text style={style.textShow}>{password}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingVertical: 60,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: 50,
    color: 'orange',
    textAlign: 'center',
  },
  buttonWrapper: {
    backgroundColor: '#000',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    cursor: 'pointer',
  },
  loginBtn: {
    fontSize: 50,
    color: 'orange',
    textAlign: 'center',
  },
  inputs: {
    color: '#2d2d2d',
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,
    marginBottom: 10,
  },
  textShowHead: {
    backgroundColor: 'gray',
    padding: 20,
  },
  textShow: {
    fontSize: 20,
    color: 'green',
    padding: 20,
  },
});

export default Login;
