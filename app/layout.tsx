import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GRUPO CORAJE',
  description: 'Tienda online multimarca Grupo Coraje con productos deportivos y café premium. Navega productos, categorías y tu carrito sin complicaciones.',
  icons: {
    icon: '/Logo-pestaña.png'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
