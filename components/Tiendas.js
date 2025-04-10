import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Tiendas({ tiendas, agregarTienda }) {
  const [nombreTienda, setNombreTienda] = useState('');
  const [cajaTienda, setCajaTienda] = useState('');
  const [productosTienda, setProductosTienda] = useState('');

  const agregarNuevaTienda = () => {
    if (nombreTienda && cajaTienda) {
      const nuevaTienda = {
        nombre: nombreTienda,
        fondoCaja: parseFloat(cajaTienda),
        inventario: productosTienda ? productosTienda.split(',') : []
      };
      agregarTienda(nuevaTienda);
      setNombreTienda('');
      setCajaTienda('');
      setProductosTienda('');
    } else {
      alert('Por favor ingrese todos los campos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestión de Tiendas</Text>
      <TextInput
        placeholder="Nombre de la tienda"
        value={nombreTienda}
        onChangeText={setNombreTienda}
        style={styles.input}
      />
      <TextInput
        placeholder="Fondo de Caja"
        value={cajaTienda}
        onChangeText={setCajaTienda}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Productos en inventario (separados por coma)"
        value={productosTienda}
        onChangeText={setProductosTienda}
        style={styles.input}
      />
      <Button title="Agregar Tienda" onPress={agregarNuevaTienda} />
      {tiendas.map((tienda, index) => (
        <View key={index} style={styles.tiendaContainer}>
          <Text style={styles.tiendaText}>Tienda: {tienda.nombre}</Text>
          <Text style={styles.tiendaText}>Fondo Caja: ${tienda.fondoCaja}</Text>
          <Text style={styles.tiendaText}>Productos: {tienda.inventario.join(', ')}</Text>
        </View>
      ))}
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
  tiendaContainer: {
    marginTop: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  tiendaText: {
    fontSize: 16,
  },
});