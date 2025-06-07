// src/app/nosotros/page.tsx

import Image from 'next/image';
import { Target, Eye, ShieldCheck, Recycle } from 'lucide-react'; // Íconos para dar un toque visual

export default function NosotrosPage() {
    return (
        <div className="bg-gray-950 text-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Sección del Título (sin cambios) */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight">
                        Sabor con Propósito
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
                        En AURUM ICE creamos helados exclusivos, de alta calidad, hechos con ingredientes seleccionados y procesos responsables con el planeta.
                    </p>
                </div>

                {/* Imagen Principal (sin cambios) */}
                <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl mb-16">
                    <Image
                        src="/images/3.jpeg" // Puedes cambiar esta imagen por la que prefieras
                        alt="Ingredientes naturales de Aurum Ice"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                {/* Sección Narrativa (sin cambios) */}
                <div className="max-w-3xl mx-auto text-center text-gray-300 space-y-6 mb-16">
                    <p>
                        Somos una empresa mexicana que elabora helados artesanales con ingredientes naturales y deliciosos, combinando sabor, sostenibilidad e innovación.
                    </p>
                    <p>
                        Cada detalle está pensado para disfrutar con propósito y demostrar que es posible emprender cuidando a las personas, al planeta y al paladar.
                    </p>
                </div>

                {/* Sección de Misión y Visión (sin cambios) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                    <div className="bg-gray-800 p-8 rounded-xl">
                        <div className="flex items-center mb-4">
                            <Target className="h-8 w-8 text-indigo-400 mr-4" />
                            <h2 className="text-3xl font-serif text-white">Nuestra Misión</h2>
                        </div>
                        <p className="text-gray-400">
                            En AURUM ICE buscamos deleitar a nuestros clientes con helados artesanales de alta calidad, hechos con ingredientes naturales y prácticas sustentables, promoviendo el consumo responsable y el respeto al medio ambiente.
                        </p>
                    </div>
                    <div className="bg-gray-800 p-8 rounded-xl">
                        <div className="flex items-center mb-4">
                            <Eye className="h-8 w-8 text-indigo-400 mr-4" />
                            <h2 className="text-3xl font-serif text-white">Nuestra Visión</h2>
                        </div>
                        <p className="text-gray-400">
                            Ser la marca mexicana líder en helados artesanales, reconocida por su compromiso ambiental, sabor excepcional e innovación en productos saludables, fomentando una cultura de consumo consciente.
                        </p>
                    </div>
                </div>

                {/* --- NUEVAS SECCIONES --- */}

                {/* Nueva Sección: Políticas de Calidad */}
                <div className="bg-gray-800 p-8 md:p-12 rounded-2xl mb-16">
                    <div className="flex items-center mb-6">
                        <ShieldCheck className="h-10 w-10 text-indigo-400 mr-4 flex-shrink-0" />
                        <h2 className="text-4xl font-serif text-white">Políticas de Calidad</h2>
                    </div>
                    <p className="text-gray-400">
                        En AURUM ICE, la calidad es nuestro principal compromiso. Seleccionamos cuidadosamente ingredientes orgánicos, naturales y libres de conservadores artificiales para garantizar productos frescos y saludables.  Cuidamos cada detalle a lo largo del proceso, aplicando altos estándares de higiene, frescura y trazabilidad en cada envase.  Cumplimos con las normas nacionales de inocuidad alimentaria, lo que respalda la seguridad y confianza en nuestros productos.
                    </p>
                </div>

                {/* Nueva Sección: Compromiso Ambiental */}
                <div className="bg-gray-800 p-8 md:p-12 rounded-2xl">
                    <div className="flex items-center mb-6">
                        <Recycle className="h-10 w-10 text-green-400 mr-4 flex-shrink-0" />
                        <h2 className="text-4xl font-serif text-white">Compromiso Ambiental</h2>
                    </div>
                    <p className="text-gray-400 mb-6">
                        Estamos comprometidos con el cuidado del planeta, por eso, hemos diseñado cada paso de nuestro proceso con responsabilidad ecológica cumpliendo las normativas ambientales mexicanas.
                    </p>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="bg-green-900 text-green-300 text-sm font-bold rounded-full h-6 w-6 flex items-center justify-center mr-4 mt-1 flex-shrink-0">✔</span>
                            <span><strong className="text-white">Empaques Sostenibles:</strong> Usamos empaques biodegradables y reciclables (NOM-162-SEMARNAT-2012). </span>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-green-900 text-green-300 text-sm font-bold rounded-full h-6 w-6 flex items-center justify-center mr-4 mt-1 flex-shrink-0">✔</span>
                            <span><strong className="text-white">Energía Limpia:</strong> Implementamos energía solar y equipos de bajo consumo para reducir nuestra huella de carbono. </span>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-green-900 text-green-300 text-sm font-bold rounded-full h-6 w-6 flex items-center justify-center mr-4 mt-1 flex-shrink-0">✔</span>
                            <span><strong className="text-white">Transporte Ecológico:</strong> Priorizamos el uso de vehículos eléctricos o de bajas emisiones para nuestras entregas. </span>
                        </li>
                    </ul>
                </div>

            </main>
        </div>
    );
}