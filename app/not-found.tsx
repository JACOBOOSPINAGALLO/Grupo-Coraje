import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <div className="mx-auto max-w-3xl rounded-[32px] border border-slate-200 bg-white p-10 shadow-soft">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-4 text-slate-600">No se encontró la página que buscas.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
