// src/app/carrito/page.tsx
'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import { Plus, Minus, Trash2 } from 'lucide-react';

export default function CartPage() {
    const { state, dispatch } = useCart();

    const handleQuantityChange = (id: string, quantity: number) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    };

    const handleRemoveItem = (id: string) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
    };

    const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Si el carrito está vacío, mostramos un mensaje
    if (state.items.length === 0) {
        return (
            <div className="text-center py-20">
                <h1 className="text-4xl font-serif text-white mb-4">Tu carrito está vacío</h1>
                <Link href="/">
                    <Button>Seguir comprando</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-serif text-white mb-8">Mi Carrito</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Columna Izquierda: Lista de productos */}
                <div className="lg:col-span-2 bg-zinc-900 p-6 rounded-lg">
                    <ul role="list" className="divide-y divide-gray-700">
                        {state.items.map((item) => (
                            <li key={item.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-700">
                                    <Image src={item.image} alt={item.name} width={96} height={96} className="h-full w-full object-cover object-center" />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                        <div className="flex justify-between text-base font-medium text-white">
                                            <h3>{item.name}</h3>
                                            <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-400">${item.price.toFixed(2)} c/u</p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                        <div className="flex items-center border border-gray-600 rounded">
                                            <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} className="p-2 text-gray-400 hover:text-white"><Minus size={16} /></button>
                                            <p className="px-3 text-white">{item.quantity}</p>
                                            <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} className="p-2 text-gray-400 hover:text-white"><Plus size={16} /></button>
                                        </div>
                                        <div className="flex">
                                            <button onClick={() => handleRemoveItem(item.id)} type="button" className="font-medium text-indigo-500 hover:text-indigo-400 flex items-center">
                                                <Trash2 size={16} className="mr-1" /> Quitar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Columna Derecha: Resumen del pedido */}
                <div className="lg:col-span-1">
                    <div className="bg-zinc-900 p-6 rounded-lg sticky top-24">
                        <h2 className="text-lg font-medium text-white">Resumen del Pedido</h2>
                        <div className="mt-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-300">Subtotal</p>
                                <p className="text-sm font-medium text-white">${subtotal.toFixed(2)}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-300">Envío</p>
                                <p className="text-sm font-medium text-white">Gratis</p>
                            </div>
                            <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                                <p className="text-base font-medium text-white">Total del Pedido</p>
                                <p className="text-base font-medium text-white">${subtotal.toFixed(2)}</p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <Link href="/checkout" className="w-full">
                                <Button className="w-full">Finalizar Compra</Button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}