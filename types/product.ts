export type Category = 'CORAJE SPORT' | 'CORAJE CAFFE' | 'Pescuezo';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: Category;
  tags: string[];
  slug: string;
  image: string;
  rating: number;
  badge?: string;
}
