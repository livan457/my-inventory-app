import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tiendas from './components/Tiendas';

export default function App() {
  const [tiendas, setTiendas] = useState([]);

  // Función para agregar una nueva tienda
  const agregarTienda = (nuevaTienda) => {
    setTiendas([...tiendas, nuevaTienda]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestión de Negocios</Text>

      {/* Mostrar y agregar tiendas */}
      <Tiendas tiendas={tiendas} agregarTienda={agregarTienda} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});