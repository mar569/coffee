import React from 'react';
import individImage from '../assets/absolute/fon_coffee.png';

export const IndividPage: React.FC = () => {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    return (
        <section className='max-w-[1920px] mx-auto'>
            <div className='container'>
                <div
                    style={{
                        width: '100%',
                        height: '638.773px',
                        backgroundImage: `url(${individImage})`,
                        boxShadow: '1px 4px 40px rgba(4, 38, 10, 0.4)',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        borderRadius: '12px',
                        backgroundBlendMode: 'screen',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',

                    }}
                >
                    <div className='pt-[59px] pl-[30px] pr-[30px] md:pt-[102px] md:pl-[130px] md:pr-[113px] '>
                        <h2
                            className='font-bold pt-[14px] md:pt-[10px] pb-[53px] w-[250px] md:w-full '
                            style={{
                                fontSize: '28px',
                                lineHeight: '32px',
                                textAlign: 'left',
                            }}
                        >
                            Индивидуальный подход
                        </h2>

                        <div style={{ maxWidth: '100%' }}>
                            <p
                                className='text-left text-[17x] md:text-[28px] pb-[62px] leading-[18px] md:leading-[29px] '

                            >
                                В центре нашей философии лежит индивидуальность.
                                Мы приглашаем вас <br /> в мир гибкого и индивидуального партнерства.
                                Наша компания с готовностью предоставляет <br /> уникальные условия сотрудничества для предприятий малого и среднего бизнеса, <br />
                                а также для сферы HoReCa.
                                Мы тщательно учитываем уникальные потребности каждого клиента <br /> и создаем наилучшие возможности сотрудничества,
                                гарантируя вам доступ к продукту высочайшего качества
                            </p>
                        </div>
                        <div>
                            <a className='border cursor-pointer border-white text-[16px] px-15 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 sm:active:bg-white/20 sm:active:scale-95'
                                href="#form-opto"
                                onClick={(e) => { e.preventDefault(); scrollToSection('form-opto'); }}> Свяжитесь с нами</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
