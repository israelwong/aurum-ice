// src/app/nosotros/page.tsx

"use client"; // 1. Convertimos a Componente de Cliente para poder usar estado y eventos.

import { useState } from "react"; // 2. Importamos useState
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox"; // 3. Importamos el componente Lightbox
import "yet-another-react-lightbox/styles.css"; // 4. Importamos los estilos del Lightbox

// Importamos los íconos (sin cambios)
import { Target, Eye, ShieldCheck, Recycle, Gem, Handshake, Search, Sparkles } from 'lucide-react';

export default function NosotrosPage() {
    // 5. Creamos un estado para controlar si el lightbox está abierto o cerrado
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-zinc-950 text-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* ... (Secciones de Título, Valores, Imagen Principal, Misión/Visión sin cambios) ... */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight">Sabor con Propósito</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-300">En AURUM ICE creamos helados exclusivos, de alta calidad, hechos con ingredientes seleccionados y procesos responsables con el planeta.</p>
                </div>

                <div className="mb-16">
                    <h2 className="text-4xl font-serif text-center text-white mb-10">Nuestros Valores</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="flex flex-col items-center"><Gem className="h-12 w-12 text-indigo-400 mb-2" /><h3 className="text-xl font-semibold">Calidad</h3></div>
                        <div className="flex flex-col items-center"><Handshake className="h-12 w-12 text-indigo-400 mb-2" /><h3 className="text-xl font-semibold">Responsabilidad</h3></div>
                        <div className="flex flex-col items-center"><Search className="h-12 w-12 text-indigo-400 mb-2" /><h3 className="text-xl font-semibold">Transparencia</h3></div>
                        <div className="flex flex-col items-center"><Sparkles className="h-12 w-12 text-indigo-400 mb-2" /><h3 className="text-xl font-semibold">Autenticidad</h3></div>
                    </div>
                </div>

                <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl mb-16">
                    <Image src="/images/3.jpeg" alt="Ingredientes naturales de Aurum Ice" fill style={{ objectFit: 'cover' }} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                    <div className="bg-zinc-800 p-8 rounded-xl">
                        <div className="flex items-center mb-4"><Target className="h-8 w-8 text-indigo-400 mr-4" /><h2 className="text-3xl font-serif text-white">Nuestra Misión</h2></div>
                        <p className="text-zinc-400">Buscamos deleitar a nuestros clientes con helados artesanales de alta calidad, hechos con ingredientes naturales y prácticas sustentables, promoviendo el consumo responsable y el respeto al medio ambiente.</p>
                    </div>
                    <div className="bg-zinc-800 p-8 rounded-xl">
                        <div className="flex items-center mb-4"><Eye className="h-8 w-8 text-indigo-400 mr-4" /><h2 className="text-3xl font-serif text-white">Nuestra Visión</h2></div>
                        <p className="text-zinc-400">Ser la marca mexicana líder en helados artesanales, reconocida por su compromiso ambiental, sabor excepcional e innovación en productos saludables, fomentando una cultura de consumo consciente.</p>
                    </div>
                </div>

                {/* --- SECCIÓN DE ORGANIGRAMA ACTUALIZADA --- */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-white mb-8">Nuestra Estructura</h2>
                    {/* 6. Hacemos que la imagen sea clickeable para abrir el lightbox */}
                    <div
                        className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden border-2 border-zinc-700 cursor-pointer hover:border-indigo-400 transition-all"
                        onClick={() => setOpen(true)}
                    >
                        <Image
                            src="/images/organigrama.jpg"
                            alt="Organigrama de Aurum Ice"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </div>

                {/* ... (Secciones de Políticas y Compromiso sin cambios) ... */}
                <div className="bg-zinc-800 p-8 md:p-12 rounded-2xl mb-16">
                    <div className="flex items-center mb-6"><ShieldCheck className="h-10 w-10 text-indigo-400 mr-4 flex-shrink-0" /><h2 className="text-4xl font-serif text-white">Políticas de Calidad</h2></div>
                    <p className="text-zinc-400">En AURUM ICE, la calidad es nuestro principal compromiso. Seleccionamos cuidadosamente ingredientes orgánicos, naturales y libres de conservadores artificiales para garantizar productos frescos y saludables. Cuidamos cada detalle a lo largo del proceso, aplicando altos estándares de higiene, frescura y trazabilidad en cada envase. Cumplimos con las normas nacionales de inocuidad alimentaria, lo que respalda la seguridad y confianza en nuestros productos.</p>
                </div>

                <div className="bg-zinc-800 p-8 md:p-12 rounded-2xl">
                    <div className="flex items-center mb-6"><Recycle className="h-10 w-10 text-green-400 mr-4 flex-shrink-0" /><h2 className="text-4xl font-serif text-white">Compromiso Ambiental</h2></div>
                    <p className="text-zinc-400 mb-6">Estamos comprometidos con el cuidado del planeta, por eso, hemos diseñado cada paso de nuestro proceso con responsabilidad ecológica cumpliendo las normativas ambientales mexicanas.</p>
                    <ul className="space-y-4 text-zinc-300">
                        <li className="flex items-start"><span className="bg-green-900 text-green-300 text-sm font-bold rounded-full h-6 w-6 flex items-center justify-center mr-4 mt-1 flex-shrink-0">✔</span><span><strong className="text-white">Empaques Sostenibles:</strong> Usamos empaques biodegradables y reciclables (NOM-162-SEMARNAT-2012).</span></li>
                        <li className="flex items-start"><span className="bg-green-900 text-green-300 text-sm font-bold rounded-full h-6 w-6 flex items-center justify-center mr-4 mt-1 flex-shrink-0">✔</span><span><strong className="text-white">Energía Limpia:</strong> Implementamos energía solar y equipos de bajo consumo para reducir nuestra huella de carbono.</span></li>
                        <li className="flex items-start"><span className="bg-green-900 text-green-300 text-sm font-bold rounded-full h-6 w-6 flex items-center justify-center mr-4 mt-1 flex-shrink-0">✔</span><span><strong className="text-white">Transporte Ecológico:</strong> Priorizamos el uso de vehículos eléctricos o de bajas emisiones para nuestras entregas.</span></li>
                    </ul>
                </div>

            </main>

            {/* 7. Agregamos el componente Lightbox. No se muestra visualmente hasta que 'open' es true. */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: '/images/organigrama.jpg' },
                ]}
            // 👇 Añadimos esta línea para desactivar la animación de swipe
            // animation={{ swipe: 0 }}
            />
        </div>
    );
}