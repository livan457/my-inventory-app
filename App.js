import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Tiendas from './components/Tiendas';
import Caja from './components/Caja';
import Inventario from './components/Inventario';
import ErrorHandling from './components/ErrorHandling';

export default function App() {
  const [tiendas, setTiendas] = useState([]);
  const [fondoDeCaja, setFondoDeCaja] = useState(0);
  const [inventario, setInventario] = useState([]);
  const [mensajeError, setMensajeError] = useState('');

  const agregarTienda = (nuevaTienda) => {
    try {
      setTiendas([...tiendas, nuevaTienda]);
    } catch (error) {
      setMensajeError('Error al agregar tienda: ' + error.message);
    }
  };

  const agregarProducto = (producto) => {
    try {
      setInventario([...inventario, producto]);
    } catch (error) {
      setMensajeError('Error al agregar producto: ' + error.message);
    }
  };

  const eliminarProducto = (idProducto) => {
    try {
      setInventario(inventario.filter(prod => prod.id !== idProducto));
    } catch (error) {
      setMensajeError('Error al eliminar producto: ' + error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Gestión de Negocios</Text>

      {mensajeError ? (
        <ErrorHandling mensaje={mensajeError} />
      ) : null}

      <Caja fondoDeCaja={fondoDeCaja} setFondoDeCaja={setFondoDeCaja} />

      <Tiendas tiendas={tiendas} agregarTienda={agregarTienda} />

      <Inventario 
        inventario={inventario} 
        agregarProducto={agregarProducto} 
        eliminarProducto={eliminarProducto} 
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 60,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});