import React from 'react';
import OzonIcon from '../../assets/logo/OZON.svg';
import WBIcon from '../../assets/logo/WB.svg';
import YandexIcon from '../../assets/logo/YA-LOGO.svg';
import type { Product } from '../types/types';

interface ModalProps {
    product: Product;
    onClose: () => void;
}
export const Modal: React.FC<ModalProps> = React.memo(({ product, onClose }) => {
    return (
        <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-2 sm:p-4 md:p-6 transition-opacity duration-300 ease-in-out"
            onClick={onClose}
        >
            <div
                className="bg-black/60 rounded-xl w-full max-w-[70%] md:max-w-[600px] max-h-[90vh] md:max-h-[80vh] relative "
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute  top-0 right-0 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-900 transition-colors z-10"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="p-2 sm:p-6 md:p-8 ">
                    <figure className="relative h-60 sm:h-84 mb-4 sm:mb-6 p-2 mt-3 rounded-lg overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.subtitle}
                            className="w-full h-full object-cover blur-[2px]"
                        />
                        <div className="absolute inset-0 rounded-2xl flex items-center justify-center p-4" />
                    </figure>

                    <div className="mb-4 sm:mb-6 text-center">
                        <h3 className="text-lg sm:text-xl font-medium ">
                            {product.subtitle}
                        </h3>
                    </div>

                    <div className="text-sm sm:text-base space-y-1 sm:space-y-3 mb-4 sm:mb-8">
                        <p><strong>Состав:</strong> {product.description}</p>
                        <p><strong>Условия хранения:</strong> {product.storage}</p>
                        <p><strong>Срок годности:</strong> {product.shelfLife}</p>
                        <p><strong>Масса нетто:</strong> {product.netWeight}</p>
                        <p><strong>Стандарт:</strong> {product.gost}</p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:gap-4 ">
                        <a href={product.links.ozon} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-2 sm:py-3 px-3 sm:px-4 bg-transparent hover:bg-white/20 shadow-md hover:shadow-[#3E5912] text-white hover:text-black rounded-2xl transition-colors border-1 border-[#fff] duration-700">
                            <span>Купить на</span>
                            <img src={OzonIcon} alt="Ozon" className="h-4 " />
                        </a>
                        <a href={product.links.wildberries} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-2 sm:py-3 px-3 sm:px-4 bg-transparent hover:bg-white/20 shadow-md hover:shadow-[#3E5912] text-white hover:text-black rounded-2xl transition-colors border-1 border-[#fff] duration-700">
                            <span>Купить на</span>
                            <img src={WBIcon} alt="Wildberries" className="h-4 " />
                        </a>
                        <a href={product.links.yandex} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-2 sm:py-3 px-3 sm:px-4 bg-transparent hover:bg-white/20 shadow-md hover:shadow-[#3E5912] text-white hover:text-black rounded-2xl transition-colors border-1 border-[#fff] duration-700">
                            <span>Купить на</span>
                            <img src={YandexIcon} alt="Yandex" className="h-4 " />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
});
