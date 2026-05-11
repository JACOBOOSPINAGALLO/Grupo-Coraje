'use client';

import Link from 'next/link';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <div className="mx-auto max-w-3xl rounded-[32px] border border-slate-200 bg-white p-10 shadow-soft">
        <h1 className="text-4xl font-bold">Algo salió mal</h1>
        <p className="mt-4 text-slate-600">Lo siento, hubo un error interno en la aplicación.</p>
        <pre className="mt-6 rounded-2xl bg-slate-100 p-4 text-sm text-slate-700">{error.message}</pre>
        <div className="mt-8 flex gap-4">
          <button onClick={() => reset()} className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-amber-900">
            Reintentar
          </button>
          <Link href="/" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
            Ir al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
