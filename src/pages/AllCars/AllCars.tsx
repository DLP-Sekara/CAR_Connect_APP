import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function AllCars() {
  return (
    <View>
      <Text style={styles.testText}>AllCars</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  testView: {
    flex: 1,
    backgroundColor: 'green',
  },
  testText: {
    color: 'green',
  },
});
