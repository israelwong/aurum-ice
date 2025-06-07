// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter, Great_Vibes } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "react-hot-toast"; // 1. Importamos Toaster

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-great-vibes',
});

export const metadata: Metadata = {
  title: "Aurum Ice",
  description: "Helados artesanales con propósito.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full">
      <body className={`${inter.variable} ${greatVibes.variable} bg-gray-950 flex flex-col min-h-full`}>
        {/* 2. Añadimos el componente Toaster aquí */}
        <Toaster
          // 1. Cambiamos la posición a la parte inferior central
          position="bottom-center"
          toastOptions={{
            // Opciones para el toast de éxito que estamos usando
            success: {
              style: {
                background: '#16a34a', // Un verde menos vibrante
                color: '#ffffff',
              },
              iconTheme: {
                primary: '#ffffff',
                secondary: '#22c55e',
              },
            },
            // Estilos generales para todos los toasts
            style: {
              border: '1px solid #4b5563', // Un borde sutil
              padding: '16px', // 2. Hacemos el toast más grande
              color: '#ffffff',
              background: '#1f2937', // Un color de fondo que combine con el tema
              fontSize: '1.1rem', // 3. Hacemos la fuente un poco más grande
            },
          }}
        />
        <CartProvider>
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}