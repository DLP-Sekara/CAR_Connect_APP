import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Dashboard = () => {
  return (
    <View>
      <Text style={styles.text}>Dashboard</Text>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  text: {
    color: 'green',
  },
});
