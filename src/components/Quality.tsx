import React from 'react';
import qualityImage from '../assets/absolute/qualiti.png';

export const Quality: React.FC = () => {
    return (
        <section className='max-w-[1920px] mx-auto'>
            <div className='container'>
                <div
                    style={{
                        width: '100%',
                        height: '638.773px',
                        backgroundImage: `url(${qualityImage})`,
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '12px',
                        backgroundBlendMode: 'screen',
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
                            className='text-center text-[17x] md:text-[28px] leading-[16px] md:leading-[29px]'

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
