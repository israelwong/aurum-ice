// src/app/checkout/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import Button from '@/components/Button';
import { CheckCircle } from 'lucide-react';

export default function CheckoutPage() {
    const [step, setStep] = useState(1);
    const { dispatch } = useCart();
    const router = useRouter();

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const handleNextStep = () => {
        setStep(2);
    };

    // 1. AÑADIMOS ESTA FUNCIÓN PARA REGRESAR
    const handlePreviousStep = () => {
        setStep(1);
    };

    const handleFinalizePurchase = () => {
        console.log('Procesando pago...');
        dispatch({ type: 'CLEAR_CART' });
        setStep(3);
        setTimeout(() => {
            router.push('/');
        }, 3000);
    };

    return (
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white">
            {/* El paso 1 (Dirección) no cambia */}
            {step === 1 && (
                <div>
                    <h1 className="text-3xl font-serif mb-6">Dirección de Entrega</h1>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nombre Completo</label>
                            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm p-2" />
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-300">Dirección</label>
                            <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm p-2" />
                        </div>
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-300">Ciudad</label>
                            <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm p-2" />
                        </div>
                        <div>
                            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-300">Código Postal</label>
                            <input type="text" id="postalCode" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm p-2" />
                        </div>
                        <div className="pt-4">
                            <Button onClick={handleNextStep} className="w-full">Siguiente</Button>
                        </div>
                    </div>
                </div>
            )}

            {/* 2. ACTUALIZAMOS EL PASO 2 (PAGO) */}
            {step === 2 && (
                <div>
                    <h1 className="text-3xl font-serif mb-6">Información de Pago</h1>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-300">Número de Tarjeta</label>
                            <input type="text" id="cardNumber" placeholder="0000 0000 0000 0000" className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm p-2" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-300">Fecha de Caducidad</label>
                                <input type="text" id="expiryDate" placeholder="MM/AA" className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm p-2" />
                            </div>
                            <div>
                                <label htmlFor="cvv" className="block text-sm font-medium text-gray-300">CVV</label>
                                <input type="text" id="cvv" placeholder="123" className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm p-2" />
                            </div>
                        </div>
                        {/* 3. AÑADIMOS EL BOTÓN 'ANTERIOR' Y ORGANIZAMOS AMBOS BOTONES */}
                        <div className="pt-4 flex flex-col-reverse sm:flex-row gap-4">
                            <Button onClick={handlePreviousStep} className="w-full bg-gray-600 hover:bg-gray-500">
                                Anterior
                            </Button>
                            <Button onClick={handleFinalizePurchase} className="w-full">
                                Finalizar Compra
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* El paso 3 (Confirmación) no cambia */}
            {step === 3 && (
                <div className="text-center py-20 flex flex-col items-center">
                    <CheckCircle className="text-green-500 h-24 w-24 mb-4" />
                    <h1 className="text-4xl font-serif text-white">¡Gracias por tu compra!</h1>
                    <p className="mt-2 text-gray-300">Tu pedido ha sido realizado con éxito.</p>
                    <p className="mt-1 text-sm text-gray-400">Serás redirigido al inicio en 3 segundos...</p>
                </div>
            )}
        </div>
    );
}