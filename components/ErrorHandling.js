import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ErrorHandling({ mensaje }) {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{mensaje}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: 'red',
    padding: 10,
  },
  errorText: {
    color: 'white',
    fontWeight: 'bold',
  },
});