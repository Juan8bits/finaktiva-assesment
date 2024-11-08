const API_URL = 'http://localhost:4000/api/v1.0'; // API  Url

export async function createEvent(eventData) {
    const response = await fetch(`${API_URL}/logs/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
    });

    if (!response.ok) {
        throw new Error('Error al crear el evento');
    }

    return await response.json();
}

export const getEvents = async (eventType = null, origin) => {
    const url = eventType ? `${API_URL}/logs?type=${eventType}` : `${API_URL}/logs`; // Agrega el filtro si existe
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("No se pudieron obtener los eventos");
    }
    return await response.json();
};
