import Image from 'next/image';
import Link from 'next/link';
import { getProductBySlug } from '@/lib/products';
import { Header } from '@/components/Header';
import { notFound } from 'next/navigation';
import { AddToCartButton } from '@/components/AddToCartButton';
import type { Product } from '@/types/product';

interface PageProps {
  params: { slug: string };
}

export default function ProductPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr]">
          <div className="rounded-[32px] bg-white p-8 shadow-soft">
            <div className="relative h-[520px] overflow-hidden rounded-[32px] bg-slate-100">
              {product.image ? (
                <Image src={product.image} alt={product.title} fill className="object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center bg-slate-200 text-slate-600">Imagen no disponible</div>
              )}
            </div>
            <div className="mt-8 space-y-4">
              <span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">{product.category}</span>
              <h1 className="text-4xl font-semibold text-slate-900">{product.title}</h1>
              <p className="max-w-3xl text-sm leading-7 text-slate-600">{product.description}</p>
              <div className="flex flex-wrap items-center gap-4">
                {product.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <p className="text-4xl font-semibold text-primary">€{product.price.toFixed(2)}</p>
                <span className="rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">Valoración {product.rating.toFixed(1)}</span>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <AddToCartButton product={product} />
                <Link href="/categories" className="inline-flex rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400">
                  Ver más productos
                </Link>
              </div>
            </div>
          </div>
          <aside className="space-y-6">
            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-xl font-semibold text-slate-900">Prepárate para un checkout avanzado</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">La arquitectura ya está pensada para incorporar pagos y pedidos con validaciones progresivas.</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600">
                <li>✔️ Stock y variantes futuras</li>
                <li>✔️ Adición rápida al carrito</li>
                <li>✔️ Datos preparados para checkout</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
