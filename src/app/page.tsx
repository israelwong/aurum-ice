// src/app/page.tsx
'use client';

import { useState } from 'react'; // 1. Importamos useState
import { useCart, CartItem } from '@/context/CartContext';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import toast from 'react-hot-toast';

export default function Home() {
  const { dispatch } = useCart();
  // 2. Estado para guardar el ID del producto recién agregado
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const products = [
    { id: 'p1', name: 'Cremor Coffee', price: 120, imageUrl: '/images/cremor_coffe.jpg' },
    { id: 'p2', name: 'Vainille Royale', price: 130, imageUrl: '/images/vainille_royale.jpg' },
    { id: 'p3', name: 'Douce Pistache', price: 140, imageUrl: '/images/douce_pistache.jpg' },
    { id: 'p4', name: 'Imperial Berry', price: 135, imageUrl: '/images/imperial_berry.jpg' },
  ];

  // 3. Actualizamos la función
  const handleAddToCart = (product: Omit<CartItem, 'quantity'>) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...product, quantity: 1 }
    });
    toast.success(`"${product.name}" agregado al carrito!`);

    // Guardamos el ID y lo borramos después de 2 segundos
    setAddedProductId(product.id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 2000);
  };

  return (
    <main className="pb-16">

      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-200 font-serif my-6">
          Nuestros Sabores
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              onAddToCart={() => handleAddToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.imageUrl
              })}
              // 4. Pasamos el estado al componente
              isAdded={addedProductId === product.id}
            />
          ))}
        </div>
      </div>
    </main>
  );
}