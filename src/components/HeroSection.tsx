// src/components/HeroSection.tsx

import React from 'react';
// import Button from './Button';

const HeroSection = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* 1. Contenedor principal ahora es 'relative' para posicionar el video dentro */}
            <div className="relative bg-gray-900 rounded-2xl shadow-xl overflow-hidden h-96 flex items-center justify-center">

                {/* 2. El video como fondo absoluto */}
                <video
                    src="/video/helado.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline // Importante para que funcione en móviles
                    className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60"
                />

                {/* 3. Capa de superposición para mejorar la legibilidad del texto */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

                {/* 4. Contenido de texto, ahora con z-index para estar por encima de todo */}
                <div className="relative z-20 p-8 md:p-12 text-center">
                    <h2 className="font-serif text-7xl md:text-8xl font-bold text-white leading-tight">
                        30% Off
                    </h2>
                    <p className="mt-2 text-xl text-gray-200 font-sans">
                        Obtén un dulce descuento en tu primera compra
                    </p>
                    {/* <div className="mt-8">
                        <Button className="px-10 py-3 text-lg">
                            Sucribirme ahora
                        </Button>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;