// src/app/contacto/page.tsx
'use client';

import { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import Button from '@/components/Button';

export default function ContactoPage() {
    // Estado para manejar los campos del formulario
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Estado para mostrar el mensaje de éxito
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevenimos que la página se recargue

        // Aquí es donde enviarías los datos a un backend real.
        // Por ahora, solo los mostraremos en la consola.
        console.log({
            name,
            email,
            message,
        });

        setSubmitted(true); // Mostramos el mensaje de éxito

        // Opcional: Limpiar el formulario después de un tiempo
        setTimeout(() => {
            setName('');
            setEmail('');
            setMessage('');
            // setSubmitted(false); // Podrías ocultar el mensaje si quisieras
        }, 5000);
    };

    return (
        <div className="bg-gray-950 text-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight">
                        Ponte en Contacto
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
                        ¿Tienes alguna pregunta o comentario? Nos encantaría escucharte.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                    {/* Columna Izquierda: Información de Contacto */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold text-white flex items-center">
                                <Mail className="h-7 w-7 text-indigo-400 mr-3" />
                                Email
                            </h2>
                            <p className="mt-2 text-gray-300">
                                Escríbenos directamente a nuestro correo.
                            </p>
                            <a href="mailto:aurumice@contacto.mx" className="text-lg text-indigo-400 hover:text-indigo-300 transition-colors">
                                aurumice@contacto.mx
                            </a>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-white flex items-center">
                                <Phone className="h-7 w-7 text-indigo-400 mr-3" />
                                Mensaje Directo
                            </h2>
                            <p className="mt-2 text-gray-300">
                                Contáctanos vía mensaje para una respuesta más rápida.
                            </p>
                            <a href="https://wa.me/525573658820" target="_blank" rel="noopener noreferrer" className="text-lg text-indigo-400 hover:text-indigo-300 transition-colors">
                                55 7365 8820
                            </a>
                        </div>
                    </div>

                    {/* Columna Derecha: Formulario de Contacto */}
                    <div>
                        {submitted ? (
                            <div className="bg-green-900/50 border border-green-500 text-green-200 px-4 py-3 rounded-lg text-center">
                                <h3 className="font-bold text-lg">¡Mensaje Enviado!</h3>
                                <p className="text-sm">Gracias por contactarnos. Te responderemos pronto.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nombre</label>
                                    <input type="text" name="name" id="name" required value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                                    <input type="email" name="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">Mensaje</label>
                                    <textarea name="message" id="message" rows={4} required value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                                </div>
                                <div>
                                    <Button type="submit" className="w-full">
                                        Enviar Mensaje
                                    </Button>
                                </div>
                            </form>
                        )}
                    </div>

                </div>
            </main>
        </div>
    );
}