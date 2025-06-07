// src/components/ProductCard.tsx
import React from 'react';
import Image from 'next/image';
import Button from './Button';
import { Check } from 'lucide-react'; // Importamos un ícono de check

type ProductCardProps = {
    name: string;
    imageUrl: string;
    onAddToCart: () => void;
    isAdded: boolean; // 1. Añadimos la nueva prop 'isAdded'
};

const ProductCard = ({ name, imageUrl, onAddToCart, isAdded }: ProductCardProps) => {
    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-lg flex flex-col group">
            <div className="relative w-full aspect-[2/3]">
                <Image src={imageUrl} alt={`Helado de ${name}`} fill style={{ objectFit: 'cover' }} className="transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="p-4 flex flex-col items-center flex-grow">
                {/* <h3 className="text-sm font-light text-zinc-500 font-sans mb-4">{name}</h3> */}
                <div className="mt-auto w-full flex justify-center">
                    {/* 2. Cambiamos el botón dinámicamente */}
                    <Button
                        onClick={onAddToCart}
                        className="w-full max-w-xs"
                        variant={isAdded ? 'success' : 'primary'} // Si isAdded es true, usamos la variante 'success'
                        disabled={isAdded} // Desactivamos el botón si el producto fue agregado
                    >
                        {isAdded ? (
                            <span className='flex items-center justify-center'>
                                <Check size={20} className="mr-2" /> Agregado
                            </span>
                        ) : (
                            'Agregar'
                        )}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;