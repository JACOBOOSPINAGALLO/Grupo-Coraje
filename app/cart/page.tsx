'use client';

import { useCartStore } from '@/store/cartStore';
import { Header } from '@/components/Header';
import Link from 'next/link';

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.totalPrice());
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  if (!items.length) {
    return (
      <main className="min-h-screen bg-slate-50">
        <Header />
        <section className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-amber-700">Carrito</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900">Tu carrito está vacío</h1>
          <p className="mt-4 text-slate-600">Añade productos y vuelve cuando estés listo para revisar tu pedido.</p>
          <Link href="/categories" className="mt-8 inline-flex btn-primary">
            Ver catálogo
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-6 rounded-[32px] bg-white p-8 shadow-soft">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-amber-700">Carrito</p>
                <h1 className="mt-3 text-3xl font-semibold text-slate-900">Revisa tus productos</h1>
              </div>
              <button onClick={clearCart} className="rounded-full border border-slate-300 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                Vaciar carrito
              </button>
            </div>
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex flex-col gap-4 rounded-3xl border border-slate-200 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
                    <p className="mt-2 text-sm text-slate-600">{item.category}</p>
                    <p className="mt-3 text-sm font-semibold text-slate-900">Precio unitario €{item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="inline-flex rounded-full border border-slate-200 bg-slate-50">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-4 py-2 text-sm font-semibold text-slate-700">-</button>
                      <span className="px-5 py-2 text-sm font-semibold text-slate-900">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-4 py-2 text-sm font-semibold text-slate-700">+</button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-sm font-semibold text-rose-600 hover:text-rose-800">
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <aside className="space-y-6 rounded-[32px] bg-white p-8 shadow-soft">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-amber-700">Resumen</p>
              <p className="mt-3 text-3xl font-semibold text-slate-900">Total €{totalPrice.toFixed(2)}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6 text-sm text-slate-600">
              <p className="font-semibold text-slate-900">Preparado para pasarela de pago</p>
              <p className="mt-3">La estructura actual permite integrar Stripe, PayPal o un checkout para CORAJE SPORT y CAFÉ sin rehacer la lógica de carrito.</p>
            </div>
            <button type="button" className="btn-primary w-full">
              Iniciar pago (próximamente)
            </button>
          </aside>
        </div>
      </section>
    </main>
  );
}
