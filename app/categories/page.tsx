'use client';

import { useMemo, useState } from 'react';
import { Header } from '@/components/Header';
import { ProductGrid } from '@/components/ProductGrid';
import { CategoryFilter } from '@/components/CategoryFilter';
import { allProducts } from '@/lib/products';

export default function CategoriesPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const filteredProducts = useMemo(() => {
    if (!selectedCategories.length) return allProducts;
    return allProducts.filter((product) => selectedCategories.includes(product.category));
  }, [selectedCategories]);

  const handleSelect = (category: string) => {
    setSelectedCategories((current) =>
      current.includes(category) ? current.filter((c) => c !== category) : [...current, category]
    );
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-[32px] bg-white p-10 shadow-soft">
          <p className="text-sm uppercase tracking-[0.2em] text-amber-800">Categorías Grupo Coraje</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900">Explora Pescuezo, CORAJE CAFFE y CORAJE SPORT</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">Selecciona tus categorías favoritas y descubre los tres productos premium de Grupo Coraje: Pescuezo, café con coraje y artículos para hacer deporte.</p>
          <div className="mt-8">
            <CategoryFilter selected={selectedCategories} onSelect={handleSelect} />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <ProductGrid products={filteredProducts} />
      </section>
    </main>
  );
}
