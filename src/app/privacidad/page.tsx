// src/app/privacidad/page.tsx

export default function PrivacidadPage() {
    return (
        <div className="bg-gray-950 text-white">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight">
                        Políticas de Privacidad
                    </h1>
                </div>

                <div className="bg-gray-800 p-8 md:p-10 rounded-2xl text-gray-300 space-y-6 text-lg">
                    <p>
                        En Aurum Ice valoramos y respetamos tu privacidad. Por eso, nos comprometemos a proteger tus datos personales de forma segura y transparente.
                    </p>
                    <p>
                        Solo recolectamos la información necesaria para ofrecerte un servicio personalizado y mejorar tu experiencia con nosotros. Toda la información que compartes es tratada con estrictas medidas de seguridad, tanto digitales como físicas.
                    </p>
                    <p>
                        No compartimos ni cedemos tus datos a terceros sin tu consentimiento explícito.
                    </p>
                    <p>
                        Tienes derecho a acceder, corregir o eliminar tu información personal cuando lo desees. Para ello, solo necesitas solicitarlo a través de nuestros canales de contacto.
                    </p>
                    <p className="border-t border-gray-700 pt-6">
                        Cumplimos plenamente con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares en México, asegurando que tu información esté siempre en buenas manos.
                    </p>
                </div>
            </main>
        </div>
    );
}