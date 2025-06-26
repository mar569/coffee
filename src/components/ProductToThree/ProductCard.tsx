import React, { useState, useRef } from 'react';
import type { Product } from '../types/types';

interface ProductCardProps {
    product: Product;
    onOpen: (id: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = React.memo(({ product, onOpen }) => {
    const [isActive, setIsActive] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const handleInteractionStart = () => setIsActive(true);
    const handleInteractionEnd = () => setIsActive(false);

    return (
        <div
            ref={cardRef}
            className={`rounded-4xl overflow-hidden relative h-full transition-shadow duration-300 ${isActive ? 'shadow-md shadow-[#3E5912]' : ''
                }`}

            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
            onTouchCancel={handleInteractionEnd}
        >
            <figure className="relative w-full h-full">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover select-none touch-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-12 left-0 right-0 flex justify-center">
                    <button
                        onClick={() => onOpen(product.id)}
                        className="border cursor-pointer border-white bg-white/10 text-white px-12 py-3 rounded-2xl hover:bg-white/40 transition-all duration-300 sm:active:bg-white/20 sm:active:scale-95"
                    >
                        Подробнее
                    </button>
                </div>
            </figure>
        </div>
    );
});
