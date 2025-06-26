import { useCallback, useState } from "react";
import { ProductList } from "../ProductToThree/ProductList";
import { Modal } from "../ProductToThree/Modal";
import { products } from "../../data/product";


export const ProductPageSecondary: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

    const openModal = useCallback((productId: number) => {
        setSelectedProduct(productId);
    }, []);

    const closeModal = useCallback(() => {
        setSelectedProduct(null);
    }, []);

    const filteredProducts = products.filter(product => product.id >= 4 && product.id <= 6);
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
}