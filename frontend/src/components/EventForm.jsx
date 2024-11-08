import React, { useState } from "react";
import { z } from "zod";
import { createEvent } from "../utils/api";

// Definir el esquema con un enum para el tipo de evento
const eventSchema = z.object({
    description: z.string().min(1, "El nombre del evento es requerido"),
    date: z.string().min(1, "La fecha del evento es requerida"),
    type: z.enum(['info', 'warning', 'error'], "El tipo de evento es requerido"),
});

export default function EventForm() {
    const [formData, setFormData] = useState({
        description: "",
        date: "",
        type: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const validatedData = eventSchema.parse(formData);

            // Agregar la propiedad fromApp: true al objeto validado
            const dataToSubmit = { ...validatedData, fromApp: true };

            await createEvent(dataToSubmit);
            alert("Evento creado exitosamente");
            setFormData({
                description: "",
                date: "",
                type: "",
            });
            setErrors({});
        } catch (error) {
            if (error instanceof z.ZodError) {
                setErrors(error.flatten().fieldErrors);
            } else {
                console.error("Error al crear el evento:", error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="description" className="font-semibold text-lg block mb-1">
                    Descripción del evento:
                </label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                />
                {errors.description && <p className="text-red-500">{errors.description}</p>}
            </div>
            <div>
                <label htmlFor="date" className="font-semibold text-lg block mb-1">
                    Fecha del evento:
                </label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                />
                {errors.date && <p className="text-red-500">{errors.date}</p>}
            </div>
            <div>
                <label htmlFor="type" className="font-semibold text-lg block mb-1">
                    Tipo de evento:
                </label>
                <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded bg-white"
                >
                    <option value="">Seleccione el tipo de evento</option>
                    <option value="info">Información</option>
                    <option value="warning">Advertencia</option>
                    <option value="error">Error</option>
                </select>
                {errors.type && <p className="text-red-500">{errors.type}</p>}
            </div>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Crear Evento
            </button>
        </form>
    );
}
