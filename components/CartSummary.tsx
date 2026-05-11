'use client';

import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';

export function CartSummary() {
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.totalPrice());

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
      <h2 className="text-lg font-semibold text-slate-900">Resumen del carrito</h2>
      <p className="mt-1 text-sm text-slate-600">{items.length} producto{items.length === 1 ? '' : 's'} en el carrito.</p>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between text-sm text-slate-700">
          <span>Subtotal</span>
          <span>€{totalPrice.toFixed(2)}</span>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
          <p className="font-medium text-slate-900">Listo para pagar más adelante</p>
          <p className="mt-2">Este carrito está preparado para integración futura de pasarela de pago.</p>
        </div>
        <Link href="/cart" className="btn-primary w-full text-center">
          Ver carrito
        </Link>
      </div>
    </div>
  );
}
