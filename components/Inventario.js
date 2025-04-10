import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function Inventario({ inventario, agregarProducto, eliminarProducto }) {
  const [nombreProducto, setNombreProducto] = useState('');
  const [cantidadProducto, setCantidadProducto] = useState('');

  const manejarAgregarProducto = () => {
    if (nombreProducto && cantidadProducto) {
      const nuevoProducto = {
        id: Math.random().toString(),
        nombre: nombreProducto,
        cantidad: parseInt(cantidadProducto),
      };
      agregarProducto(nuevoProducto);
      setNombreProducto('');
      setCantidadProducto('');
    } else {
      alert('Por favor ingrese el nombre y la cantidad del producto');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestión de Inventario</Text>
      <TextInput
        placeholder="Nombre del producto"
        value={nombreProducto}
        onChangeText={setNombreProducto}
        style={styles.input}
      />
      <TextInput
        placeholder="Cantidad"
        value={cantidadProducto}
        onChangeText={setCantidadProducto}
        style={styles.input}
        keyboardType="numeric"
      />
      <Button title="Agregar Producto" onPress={manejarAgregarProducto} />
      <FlatList
        data={inventario}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productoContainer}>
            <Text style={styles.productoText}>
              {item.nombre} - Cantidad: {item.cantidad}
            </Text>
            <Button title="Eliminar" onPress={() => eliminarProducto(item.id)} />
          </View>
        )}
      />
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
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  productoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  productoText: {
    fontSize: 16,
  },
});