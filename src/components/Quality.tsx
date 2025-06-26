import React from 'react';
import qualityImage from '../assets/absolute/qualiti.png';

export const Quality: React.FC = () => {
    return (
        <section className='max-w-[1920px] mx-auto'>
            <div className='container'>
                <div
                    className='w-full h-[638.773px] bg-cover bg-no-repeat rounded-[12px] bg-blend-screen'
                    style={{
                        backgroundImage: `url(${qualityImage})`,
                        boxShadow: '4px 30px 80px rgba(4, 38, 10, 0.4)', // Темно-зеленая тень
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '20px',
                    }}
                >
                    <div>
                        <h2
                            className='font-bold pt-[64px] md:pt-[100px] pb-[53px] w-[250px] md:w-full pl-4'
                            style={{
                                fontSize: '28px',
                                lineHeight: '32px',
                                textAlign: 'center',
                            }}
                        >
                            Гарантия качества!
                        </h2>
                    </div>
                    <div style={{ padding: '0 20px', maxWidth: '100%' }}>
                        <p
                            className='text-center text-[17px] md:text-[28px] leading-[16px] md:leading-[29px]'
                        >
                            На нашем производстве мы используем передовые технологии обжарки зерна, которые обеспечивают <br />
                            полный контроль над ароматом, текстурой и вкусом. Контроль качества обжарки на каждом этапе. <br />
                            Мы гарантируем поставки только высококачественного готового продукта с равномерной степенью обжарки.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
