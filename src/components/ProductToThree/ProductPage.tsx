
import React, { useCallback, useState } from 'react';
import { Modal } from './Modal';
import { products } from '../../data/product';
import { ProductList } from './ProductList';

export const ProductPage: React.FC = React.memo(() => {
    const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

    const openModal = useCallback((productId: number) => {
        setSelectedProduct(productId);
    }, []);

    const closeModal = useCallback(() => {
        setSelectedProduct(null);
    }, []);

    const filteredProducts = products.filter(product => product.id >= 1 && product.id <= 3);
    const selectedProductData = products.find(p => p.id === selectedProduct);

    return (
        <section id="product" className="max-w-[1920px] mx-auto py-12">
            <div className="container">
                <ProductList products={filteredProducts} onOpen={openModal} />
            </div>
            {selectedProductData && (
                <Modal product={selectedProductData} onClose={closeModal} />
            )}
        </section>
    );
});
