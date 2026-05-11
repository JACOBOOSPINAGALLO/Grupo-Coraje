# Valen Ecommerce Frontend

Estructura inicial de tienda online multimarca premium para productos deportivos y café.

## Arquitectura propuesta

- `app/`: rutas principales usando Next.js App Router
- `components/`: componentes reutilizables para UI, tarjetas y filtros
- `store/`: estado global del carrito con Zustand
- `lib/`: lógica de productos y utilidades de datos
- `data/`: mock JSON con catálogo de productos
- `types/`: definiciones TypeScript para modelos

## Páginas implementadas

- `/`: Home con hero, filtro y productos destacados
- `/categories`: vista de catálogo y filtrado por categorías
- `/product/[slug]`: ficha de producto individual
- `/cart`: carrito con gestión de cantidades

## Componentes principales

- `Header`: navegación, marca y contador de carrito
- `ProductCard`: tarjeta de producto con imagen, precio y acción
- `ProductGrid`: grid responsive para mostrar varios productos
- `CategoryFilter`: filtro de categoría reusable
- `CartSummary`: resumen rápido del carrito en Home

## Estado del carrito

- `store/cartStore.ts` gestiona:
  - añadir producto
  - remover producto
  - actualizar cantidad
  - limpiar carrito
  - total de ítems y total del pedido

## Buenas prácticas incluidas

- App Router con `app/`
- Tipado estricto en TypeScript
- Tailwind CSS con diseño responsive
- Componentes reutilizables y separación de responsabilidades
- Preparado para integración de pasarela de pago
- SEO básico con metadata en `app/layout.tsx`

## Siguientes mejoras UX/UI recomendadas

- implementación de búsqueda global y sugerencias predictivas
- filtros avanzados por precio, marca y rating
- carrusel de promociones y banners de campaña
- estados de carga y placeholders para imágenes
- validación de stock y recomendaciones de productos complementarios

## Comandos

```bash
npm install
npm run dev
```
