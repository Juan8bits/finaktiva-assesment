import React, { useEffect, useState } from 'react';
import { getEvents } from '../utils/api';
import { format } from 'date-fns';

export default function EventList() {
  const [events, setEvents] = useState([]);
  const [eventType, setEventType] = useState(""); // Estado para el filtro de tipo
  const [eventOrigin, setEventOrigin] = useState(""); // Estado para el filtro de origen
  const [filteredEvents, setFilteredEvents] = useState([]); // Estado para los eventos filtrados

  // Función para obtener los eventos con el filtro
  const fetchEvents = async (type = "", origin = "") => {
    try {
      const fetchedEvents = await getEvents(type, origin); // Llamada al API con los filtros
      setEvents(fetchedEvents);
      setFilteredEvents(fetchedEvents); // Inicialmente los eventos son los mismos
    } catch (error) {
      console.error('Error al obtener los eventos:', error);
    }
  };

  // Llamada inicial a la API
  useEffect(() => {
    fetchEvents();
  }, []);

  const handleTypeChange = (e) => {
    setEventType(e.target.value);
  };

  // Manejo del cambio de filtro de origen
  const handleOriginChange = (e) => {
    setEventOrigin(e.target.value);
  };

  // Función para aplicar los filtros
  const applyFilter = () => {
    const filtered = events.filter((event) => {
      const matchesType = eventType ? event.type === eventType : true;
      const matchesOrigin = eventOrigin ? (eventOrigin === "form" ? event.fromApp === true : event.fromApp === false) : true;
      return matchesType && matchesOrigin;
    });
    setFilteredEvents(filtered);
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Lista de Eventos</h2>

      {/* Filter by type */}
      <div className="mb-4">
        <label htmlFor="type" className="font-semibold text-lg mr-2">Filtrar por tipo:</label>
        <select
          id="type"
          value={eventType}
          onChange={handleTypeChange}
          className="px-3 py-2 border rounded bg-white"
        >
          <option value="">Seleccione un tipo (opcional)</option>
          <option value="info">Información</option>
          <option value="warning">Advertencia</option>
          <option value="error">Error</option>
        </select>
      </div>

      {/* Filter by origin */}
      <div className="mb-4">
        <label htmlFor="origin" className="font-semibold text-lg mr-2">Filtrar por origen:</label>
        <select
          id="origin"
          value={eventOrigin}
          onChange={handleOriginChange}
          className="px-3 py-2 border rounded bg-white"
        >
          <option value="">Seleccione un origen (opcional)</option>
          <option value="form">Formulario</option>
          <option value="api">Api</option>
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
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left font-semibold">Origen</th>
            </tr>
            </thead>
            <tbody>
            {filteredEvents.map((event) => (
              <tr key={event.id} className="border-t border-gray-200">
                <td className="py-2 px-4">{event.description}</td>
                <td className="py-2 px-4">
                  {event.date && format(new Date(event.date), "dd MMM yyyy")}
                </td>
                <td className="py-2 px-4">{event.type}</td>
                <td className="py-2 px-4">{event.fromApp ? "Formulario" : "Api"}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
