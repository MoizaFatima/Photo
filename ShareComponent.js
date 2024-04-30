import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import RNShare from 'react-native-share'; // Rename 'Share' to 'RNShare'

const ShareComponent = ({ message, url }) => {
 
    
    const options = {
      message: message,
      url: url
    };
    RNShare.open(options)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  

  return null;};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  custom: {
    width: '90%',
    height: 50,
    borderBottomWidth: 0.5,
    alignSelf: 'center',
    marginTop: 20,
    paddingLeft: 20,
    borderRadius: 20,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 40,
    textAlign: 'center',
  }
});

export default ShareComponent;
