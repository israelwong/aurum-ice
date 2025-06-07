// src/context/CartContext.tsx
'use client';

import React, { createContext, useReducer, useContext, ReactNode, useEffect } from 'react';

// Tipos
export type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
};

type CartState = {
    items: CartItem[];
};

// AÑADIMOS NUEVAS ACCIONES
type Action =
    | { type: 'ADD_TO_CART'; payload: CartItem }
    | { type: 'REMOVE_FROM_CART'; payload: { id: string } }
    | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } } // <-- Nueva acción para cambiar cantidad
    | { type: 'INITIALIZE_CART'; payload: CartItem[] }
    | { type: 'CLEAR_CART' }

const initialState: CartState = {
    items: [],
};

// ACTUALIZAMOS EL REDUCER CON LA NUEVA LÓGICA
const cartReducer = (state: CartState, action: Action): CartState => {
    switch (action.type) {
        case 'INITIALIZE_CART':
            return { ...state, items: action.payload };

        case 'ADD_TO_CART':
            const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex > -1) {
                const updatedItems = state.items.map((item, index) =>
                    index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
                );
                return { ...state, items: updatedItems };
            } else {
                return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
            }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
            };

        case 'UPDATE_QUANTITY':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ).filter(item => item.quantity > 0), // Si la cantidad es 0, se elimina
            };

        case 'CLEAR_CART':
            // También limpiamos el localStorage
            localStorage.removeItem('aurum-cart');
            return { ...state, items: [] };

        default:
            return state;
    }
};

// El resto del archivo no cambia
const CartContext = createContext<{
    state: CartState;
    dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        try {
            const savedCart = localStorage.getItem('aurum-cart');
            if (savedCart) {
                const parsedCart: CartItem[] = JSON.parse(savedCart);
                dispatch({ type: 'INITIALIZE_CART', payload: parsedCart });
            }
        } catch (error) {
            console.error("No se pudo cargar el carrito desde localStorage", error);
        }
    }, []);

    useEffect(() => {
        if (state.items.length > 0 || localStorage.getItem('aurum-cart')) {
            localStorage.setItem('aurum-cart', JSON.stringify(state.items));
        }
    }, [state.items]);


    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart debe ser usado dentro de un CartProvider');
    }
    return context;
};