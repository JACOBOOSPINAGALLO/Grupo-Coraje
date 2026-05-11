'use client';

import { categories } from '@/lib/products';

interface Props {
  selected: string[];
  onSelect: (category: string) => void;
}

export function CategoryFilter({ selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const active = selected.includes(category);
        return (
          <button
            type="button"
            key={category}
            onClick={() => onSelect(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              active ? 'border-primary bg-primary text-white' : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
