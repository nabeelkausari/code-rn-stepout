import React, { Component } from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';

class Explore extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Explore</Text>
      </View>
    )
  }
}

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
