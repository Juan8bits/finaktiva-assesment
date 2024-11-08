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

export async function getEvents() {
    const response = await fetch(`${API_URL}/logs`);

    if (!response.ok) {
        throw new Error('Error al obtener los eventos');
    }

    return await response.json();
}