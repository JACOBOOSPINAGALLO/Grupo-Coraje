'use client';

import type { Product } from '@/types/product';
import { ProductCard } from '@/components/ProductCard';

interface Props {
  products: Product[];
}

export function ProductGrid({ products }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
