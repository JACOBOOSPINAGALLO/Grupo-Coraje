'use client';

import Link from 'next/link';
import { Header } from '@/components/Header';
import { CategoryFilter } from '@/components/CategoryFilter';
import { ProductGrid } from '@/components/ProductGrid';
import { CartSummary } from '@/components/CartSummary';
import { allProducts } from '@/lib/products';
import type { Product } from '@/types/product';
import { useState } from 'react';

const featured: Product[] = [
  allProducts.find((product) => product.category === 'Pescuezo'),
  allProducts.find((product) => product.category === 'CORAJE SPORT'),
  allProducts.find((product) => product.category === 'CORAJE CAFFE')
].filter(Boolean) as Product[];

export default function HomePage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const filtered = selectedCategories.length
    ? allProducts.filter((product) => selectedCategories.includes(product.category))
    : allProducts;

  const handleSelect = (category: string) => {
    setSelectedCategories((current) =>
      current.includes(category) ? current.filter((c) => c !== category) : [...current, category]
    );
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#4b1d0b] via-[#b45309] to-[#111827] p-10 text-white shadow-soft shadow-black/20">
              <div className="pointer-events-none absolute inset-0 opacity-90">
                <div className="absolute left-10 top-10 h-52 w-52 rounded-full bg-white/10 blur-3xl animate-blob" />
                <div className="absolute right-10 top-28 h-44 w-44 rounded-full bg-amber-200/15 blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute left-1/2 top-40 h-72 w-72 -translate-x-1/2 rounded-full bg-slate-900/10 blur-3xl animate-blob animation-delay-4000" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_40%)]" />
              </div>
              <div className="relative z-10">
                <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.2em] text-slate-100">
                  Multimarca Coraje: Café, deporte y pescuezo premium
                </span>
                <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">GRUPO CORAJE: Café con coraje, deporte sin límites.</h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-100/90">Descubre nuestra selección de Pescuezo, CORAJE CAFFE y artículos para hacer deporte en CORAJE SPORT. Todo en tres productos premium con estilo Grupo Coraje.</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/categories" className="btn-primary bg-white text-slate-900 hover:bg-slate-100 hover:text-slate-950 transition-all">
                    Explorar categorías
                  </Link>
                  <Link href="/cart" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                    Ver carrito
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {featured.map((product) => (
                <article key={product.id} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">{product.category}</p>
                  <h2 className="mt-3 text-xl font-semibold text-slate-900">{product.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
                  <Link href={`/product/${product.slug}`} className="mt-4 inline-flex text-sm font-semibold text-primary hover:text-slate-900">
                    Ver producto →
                  </Link>
                </article>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-[32px] bg-white p-8 shadow-soft">
              <h2 className="text-xl font-semibold text-slate-900">Filtrar por categorías</h2>
              <p className="mt-2 text-sm text-slate-600">Selecciona varias categorías para ver productos combinados.</p>
              <div className="mt-6">
                <CategoryFilter selected={selectedCategories} onSelect={handleSelect} />
              </div>
            </div>
            <CartSummary />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-amber-700">Catálogo</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Productos destacados</h2>
          </div>
          <p className="max-w-xl text-sm text-slate-600">Explora el catálogo de productos con fichas claras, precios competitivos y una experiencia visual tipo ecommerce premium.</p>
        </div>
        <ProductGrid products={filtered} />
      </section>
    </main>
  );
}
