'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { useState } from 'react';
import type { Product } from '@/types/product';

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  const addToCart = useCartStore((state) => state.addToCart);
  const [isLoading, setIsLoading] = useState(Boolean(product.image));
  const [hasError, setHasError] = useState(false);

  return (
    <article className="card-surface overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center group">
        {isLoading && !hasError && (
          <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-amber-50 animate-pulse" />
        )}
        {hasError || !product.image ? (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
            <span className="text-sm text-amber-800 font-medium">Imagen no disponible</span>
          </div>
        ) : (
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onLoadingComplete={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setHasError(true);
            }}
          />
        )}
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{product.title}</h3>
            <p className="mt-2 text-sm text-amber-800 font-medium">{product.category}</p>
          </div>
          {product.badge ? (
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">{product.badge}</span>
          ) : null}
        </div>
        <p className="text-sm leading-6 text-slate-600">{product.description}</p>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-2xl font-semibold text-primary">€{product.price.toFixed(2)}</p>
            <p className="mt-1 text-sm text-slate-500">Valoración {product.rating.toFixed(1)}</p>
          </div>
          <div className="flex items-center gap-2">
            <Link href={`/product/${product.slug}`} className="text-sm font-medium text-slate-700 hover:text-primary transition">
              Ver
            </Link>
            <button
              type="button"
              onClick={() => addToCart(product)}
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-900"
            >
              Añadir
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
