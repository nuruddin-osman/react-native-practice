import React, { Component } from 'react';
import { Text, View } from 'react-native';

class ClassComponentsPropsDrilling extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.counter}</Text>
      </View>
    );
  }
}

export default ClassComponentsPropsDrilling;
