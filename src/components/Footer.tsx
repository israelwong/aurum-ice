// src/components/Footer.tsx

import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-zinc-400 mt-auto">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    {/* Columna 1: Logo y Copyright */}
                    <div>
                        <h3 className="font-serif text-2xl font-bold text-white">AURUM ICE</h3>
                        <p className="mt-2 text-sm">
                            Sabor artesanal con propósito.
                        </p>
                        {/* AQUÍ HACEMOS EL CAMBIO */}
                        <div className="mt-4 text-xs space-y-1">
                            <p>
                                © {new Date().getFullYear()} Aurum Ice. Todos los derechos reservados.
                            </p>
                            <Link href="/privacidad" className="hover:text-white underline">
                                Políticas de Privacidad
                            </Link>
                        </div>
                    </div>

                    {/* Columna 2: Contacto (sin cambios) */}
                    <div>
                        <h3 className="text-lg font-semibold text-white uppercase tracking-wider">Contacto</h3>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-center justify-center md:justify-start">
                                <MapPin className="h-5 w-5 mr-2" />
                                <span>Av. de los Sabores 123, Col. Dulce, CDMX</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start">
                                <Mail className="h-5 w-5 mr-2" />
                                <a href="mailto:contacto@aurumice.com" className="hover:text-white">
                                    contacto@aurumice.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 3: Redes Sociales (sin cambios) */}
                    <div>
                        <h3 className="text-lg font-semibold text-white uppercase tracking-wider">Síguenos</h3>
                        <div className="flex justify-center md:justify-start space-x-5 mt-4">
                            <a href="#" className="hover:text-white"><span className="sr-only">Facebook</span><Facebook /></a>
                            <a href="#" className="hover:text-white"><span className="sr-only">Instagram</span><Instagram /></a>
                            <a href="#" className="hover:text-white"><span className="sr-only">LinkedIn</span><Linkedin /></a>
                            <a href="#" className="hover:text-white"><span className="sr-only">TikTok</span><MessageCircle /></a>
                            <a href="#" className="hover:text-white"><span className="sr-only">WhatsApp</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;