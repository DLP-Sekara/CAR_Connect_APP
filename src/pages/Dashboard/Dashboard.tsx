import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Dashboard = () => {
  function checkData(): void {
    console.log('first');
  }

  return (
    <View style={styles.background}>
      <View style={styles.textContainer}>
        <Text style={styles.textOne}>CAR</Text>
        <Text style={styles.textTwo}>Connect</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.descText}>
          Best Car Buying And Selling Platform
        </Text>
      </View>
      <View style={styles.imgArea}>
        <Image
          style={styles.img}
          source={require('../../assets/Images/cars/v12.png')}
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={checkData}>
        <Text style={{color: 'black', fontSize: 20}}>Explore Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: '30%',
  },
  textOne: {
    color: '#EEBC4F',
    fontSize: 36,
  },
  textTwo: {
    color: '#8A7D7D',
    fontSize: 36,
  },
  descText: {
    flexDirection: 'row',
    top: 30,
    color: '#8A7D7D',
    fontSize: 18,
  },
  imgArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  img: {
    marginLeft: 50,
    height: 250,
    width: 450,
  },
  btn: {
    width: '60%',
    backgroundColor: '#DFAD41',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginLeft: '20%',
    bottom: '10%',
  },
});
