
import React from 'react';
import type { Product } from '../types/types';
import { ProductCard } from './ProductCard';

interface ProductListProps {
    products: Product[];
    onOpen: (id: number) => void;
}

export const ProductList: React.FC<ProductListProps> = React.memo(({ products, onOpen }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
                <ProductCard key={product.id} product={product} onOpen={onOpen} />
            ))}
        </div>
    );
});

