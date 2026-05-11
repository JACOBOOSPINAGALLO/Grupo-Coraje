import products from '@/data/products.json';
import type { Product, Category } from '@/types/product';

export const allProducts: Product[] = products as Product[];

export const categories: Category[] = ['CORAJE SPORT', 'CORAJE CAFFE', 'Pescuezo'];

export const getProductBySlug = (slug: string): Product | undefined => {
  return allProducts.find((product) => product.slug === slug);
};

export const getProductsByCategory = (category: Category): Product[] => {
  return allProducts.filter((product) => product.category === category);
};
