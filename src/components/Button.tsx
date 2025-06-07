// src/components/Button.tsx
import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    variant?: 'primary' | 'success'; // 1. Añadimos la prop 'variant'
    disabled?: boolean; // Añadimos la prop 'disabled'
};

const Button = ({
    children,
    onClick,
    type = 'button',
    className = '',
    variant = 'primary', // Por defecto, el botón será primario
    disabled = false,
}: ButtonProps) => {
    // 2. Definimos las clases para cada variante
    const baseClasses = 'font-sans font-semibold py-2 px-6 rounded-lg shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950';

    const variantClasses = {
        primary: 'bg-indigo-900 text-white hover:bg-indigo-600 focus:ring-indigo-500',
        success: 'bg-green-600 text-white cursor-not-allowed', // El cursor cambiará para indicar que no es clickeable
    };

    return (
        <button
            type={type}
            onClick={onClick}
            // 3. Aplicamos las clases de la variante seleccionada
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            disabled={disabled} // El botón se desactivará en el estado de 'éxito'
        >
            {children}
        </button>
    );
};

export default Button;