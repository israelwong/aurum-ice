// src/components/Footer.tsx

import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

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
                            <a href="#" className="hover:text-white">
                                <span className="sr-only">TikTok</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8.5V6.2c0-.1.1-.2.2-.2h2.1c.1 0 .2.1.2.2v.2c0 2.2 1.8 4 4 4 .1 0 .2.1.2.2v2.1c0 .1-.1.2-.2.2-1.2 0-2.3-.3-3.3-.9v5.6c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.1 0 .2.1.2.2v2.1c0 .1-.1.2-.2.2-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4v-7.4z" />
                                </svg>
                            </a>

                            <a
                                href="https://wa.me/5215512345678"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white"
                            >
                                <span className="sr-only">WhatsApp</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
                                    <g>
                                        <path
                                            d="M16 3C9.383 3 4 8.383 4 15c0 2.497.832 4.803 2.25 6.75L4 29l7.5-2.25C13.197 27.168 14.503 27.5 16 27.5c6.617 0 12-5.383 12-12S22.617 3 16 3zm0 22c-1.37 0-2.71-.273-3.97-.81l-.28-.12-4.46 1.34 1.34-4.46-.12-.28C6.273 17.71 6 16.37 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.09-7.41c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.31 0 1.36.99 2.68 1.13 2.87.14.18 1.95 2.98 4.73 4.06.66.28 1.17.45 1.57.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.31.23-.64.23-1.19.16-1.31-.07-.12-.25-.19-.53-.33z"
                                            fill="currentColor"
                                        />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;