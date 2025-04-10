import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Caja({ fondoDeCaja, setFondoDeCaja }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fondo de Caja: ${fondoDeCaja}</Text>
      <Button title="Agregar $100 a Caja" onPress={() => setFondoDeCaja(fondoDeCaja + 100)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});