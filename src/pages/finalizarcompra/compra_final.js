// src/components/RegistrarVenta.js
import React, { useState } from 'react';
import { realizarVenta } from '../services/ventaService';

const RegistrarVenta = () => {
  const [productoId, setProductoId] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleVenta = async (e) => {
    e.preventDefault();
    try {
      const venta = { productoId, cantidad: parseInt(cantidad) };
      const respuesta = await realizarVenta(venta);
      setMensaje(respuesta.message);
    } catch (error) {
      setMensaje(error.error || 'Error al realizar la venta');
    }
  };

  return (
    <div>
      <h2>Registrar Venta</h2>
      <form onSubmit={handleVenta}>
        <div>
          <label>Producto ID:</label>
          <input
            type="text"
            value={productoId}
            onChange={(e) => setProductoId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Cantidad:</label>
          <input
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            required
          />
        </div>
        <button type="submit">Realizar Venta</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default RegistrarVenta;
