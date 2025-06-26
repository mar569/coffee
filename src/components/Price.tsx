import React from 'react';
import coffeePrice from '../assets/absolute/coffee-making.png';

export const Price: React.FC = () => {
    return (
        <section className='max-w-[1920px] mx-auto'>
            <div className='container'>
                <div
                    className='w-full h-[638.773px] bg-cover bg-no-repeat bg-center rounded-[12px] bg-blend-screen'
                    style={{
                        backgroundImage: `url(${coffeePrice})`,
                        boxShadow: '10px 40px 80px rgba(4, 38, 10, 0.2)',
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}
                >
                    <div className='pt-[59px] pr-[30px] pl-[30px] md:pt-[102px] md:pr-[113px] md:pl-[113px]'>
                        <h2
                            className='font-bold pb-[53px] w-[250px] md:w-full'
                            style={{
                                fontSize: '28px',
                                lineHeight: '32px',
                            }}
                        >
                            Выгодная цена
                        </h2>

                        <div style={{ maxWidth: '100%' }}>
                            <p
                                className='text-[17px] md:text-[28px] pb-[62px] leading-[18px] md:leading-[29px]'
                            >
                                Собственное производство и прямые поставки <br /> сырья от надежных производителей создают <br /> основу для наших преимущественных цен как в <br /> розницу, так и оптом.
                                Наша способность <br /> контролировать каждый этап производства и <br /> обеспечивать значительные объемы дает нам <br /> возможность предлагать вам выгодные тарифы, <br />
                                сочетая исключительное качество с доступностью.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
