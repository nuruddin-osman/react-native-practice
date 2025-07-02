import React, { Component, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import ClassComponentsPropsDrilling from './ClassComponentsProps';

class PracticeClass extends Component {
  constructor() {
    super();
    this.state = {
      myName: 'Sumon',
    };
  }

  updateName = () => {
    this.setState({ myName: 'Taspiya' });
  };
  render() {
    return (
      <View>
        <Text style={styles.heading}>hei</Text>
        <View>
          <Text style={styles.text}>{this.state.myName}</Text>
          <Button onPress={this.updateName} title="Press me" />
        </View>
        <ClassComponentsPropsDrilling counter={this.state.myName} />
      </View>
    );
  }
}

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
    fontWeight: 'bold',
  },
});

export default PracticeClass;
