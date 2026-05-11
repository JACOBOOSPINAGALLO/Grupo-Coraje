'use client';

import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Categorías', href: '/categories' },
  { label: 'Carrito', href: '/cart' }
];

export function Header() {
  const totalItems = useCartStore((state) => state.totalItems());

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#3D2817] transition hover:opacity-80"
        >
          <img src="/Logo_coraje.png" alt="Logo Grupo Coraje" className="h-14 w-14" />
          <span>GRUPO CORAJE</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-[#3D2817]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/cart"
            className="relative inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-slate-300 hover:text-[#3D2817]"
          >
            Carrito

            <span className="ml-2 inline-flex h-7 min-w-[1.75rem] items-center justify-center rounded-full bg-[#3D2817] px-2 text-xs font-semibold text-white">
              {totalItems}
            </span>
          </Link>
        </div>

      </div>
    </header>
  );
}