import React, { useEffect, useState } from 'react';
import { getEvents } from '../utils/api';

export default function EventList() {
  const [events, setEvents] = useState([]);
  const [eventType, setEventType] = useState(""); // Estado para el filtro
  const [filteredEvents, setFilteredEvents] = useState([]); // Estado para los eventos filtrados

  // Función para obtener los eventos con el filtro
  const fetchEvents = async (type = "") => {
    try {
      const fetchedEvents = await getEvents(type); // Llamada al API con el filtro
      setEvents(fetchedEvents);
      setFilteredEvents(fetchedEvents); // Inicialmente los eventos son los mismos
    } catch (error) {
      console.error('Error al obtener los eventos:', error);
    }
  };

  // Llamada inicial a la API
  useEffect(() => {
    fetchEvents(); // Llamada para obtener todos los eventos sin ningún filtro
  }, []);

  // Manejo del cambio de filtro
  const handleFilterChange = (e) => {
    setEventType(e.target.value);
  };

  // Función para aplicar el filtro
  const applyFilter = () => {
    if (eventType) {
      // Si se seleccionó un tipo, filtrar los eventos
      const filtered = events.filter((event) => event.type === eventType);
      setFilteredEvents(filtered);
    } else {
      // Si no se seleccionó un tipo, mostrar todos los eventos
      setFilteredEvents(events);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Lista de Eventos</h2>

      {/* Filtro */}
      <div className="mb-4">
        <label htmlFor="type" className="font-semibold text-lg mr-2">Filtrar por tipo:</label>
        <select
          id="type"
          value={eventType}
          onChange={handleFilterChange}
          className="px-3 py-2 border rounded bg-white"
        >
          <option value="">Seleccione un tipo (opcional)</option>
          <option value="info">Información</option>
          <option value="warning">Advertencia</option>
          <option value="error">Error</option>
        </select>
        <button
          onClick={applyFilter}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Aplicar Filtro
        </button>
      </div>

      {filteredEvents.length === 0 ? (
        <p>No hay eventos registrados.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left font-semibold">Descripción</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left font-semibold">Fecha</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left font-semibold">Tipo</th>
            </tr>
            </thead>
            <tbody>
            {filteredEvents.map((event) => (
              <tr key={event.id} className="border-t border-gray-200">
                <td className="py-2 px-4">{event.description}</td>
                <td className="py-2 px-4">{event.date}</td>
                <td className="py-2 px-4">{event.type}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}