// src/components/Navbar.tsx
'use client'; // Necesario para usar hooks como useCart

import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext'; // 1. Importamos nuestro hook useCart

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    // 2. Obtenemos el estado del carrito usando nuestro hook
    const { state } = useCart();

    // 3. Calculamos el número total de items en el carrito
    const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav className="bg-zinc-900 text-zinc-200 sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    <div className="flex-shrink-0">
                        <Link href="/" className="font-serif text-2xl font-bold hover:text-white transition-colors">
                            AURUM ICE
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/" className="font-sans uppercase text-sm px-3 py-2 rounded-md hover:bg-gray-800 transition-colors">
                                Inicio
                            </Link>
                            <Link href="/nosotros" className="font-sans uppercase text-sm px-3 py-2 rounded-md hover:bg-gray-800 transition-colors">
                                Nosotros
                            </Link>
                            <Link href="/contacto" className="font-sans uppercase text-sm px-3 py-2 rounded-md hover:bg-gray-800 transition-colors">
                                Contacto
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center">
                        {/* 4. Enlace del carrito ahora con posición 'relative' para posicionar el contador */}
                        <Link href="/carrito" className="relative p-2 rounded-full hover:bg-gray-800 transition-colors">
                            <span className="sr-only">Ver carrito</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>

                            {/* 5. El contador (badge) que solo aparece si hay items en el carrito */}
                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform bg-red-600 rounded-full">
                                    {totalItems}
                                </span>
                            )}
                        </Link>

                        <div className="ml-2 md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">Abrir menú principal</span>
                                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/menu" className="block font-sans uppercase text-sm px-3 py-2 rounded-md hover:bg-gray-800 transition-colors">Inicio</Link>
                        <Link href="/nosotros" className="block font-sans uppercase text-sm px-3 py-2 rounded-md hover:bg-gray-800 transition-colors">Nosotros</Link>
                        <Link href="/contacto" className="block font-sans uppercase text-sm px-3 py-2 rounded-md hover:bg-gray-800 transition-colors">Contacto</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;