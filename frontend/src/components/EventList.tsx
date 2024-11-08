import React, { useEffect, useState } from 'react';
import { getEvents } from '../utils/api';

export default function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await getEvents();
        setEvents(fetchedEvents);
      } catch (error) {
        console.error('Error al obtener los eventos:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Lista de Eventos</h2>
      {events.length === 0 ? (
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
            {events.map((event) => (
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