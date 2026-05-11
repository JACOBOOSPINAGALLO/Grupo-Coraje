'use client';

import { useCartStore } from '@/store/cartStore';
import type { Product } from '@/types/product';

interface Props {
  product: Product;
}

export function AddToCartButton({ product }: Props) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <button
      type="button"
      onClick={() => addToCart(product)}
      className="btn-primary w-full text-center sm:w-auto"
    >
      Añadir al carrito
    </button>
  );
}
