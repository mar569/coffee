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
                    className='w-full h-[638.773px] bg-cover bg-no-repeat bg-center rounded-[12px] bg-blend-screen'
                    style={{
                        backgroundImage: `url(${individImage})`,
                        boxShadow: '1px 20px 40px rgba(4, 38, 10, 0.5)',
                    }}
                >
                    <div className='pt-[50px] pl-[30px] pr-[30px] md:pt-[80px] md:pl-[130px] md:pr-[113px]'>
                        <h2
                            className='font-bold text-[#EBF5E4] pt-[10px] md:pt-[8px] pb-[53px] w-[250px] md:w-full'
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
                                className='text-left text-[17px] md:text-[28px] pb-[48px] leading-[18px] md:leading-[29px] text-[#EBF5E4]'
                            >
                                В центре нашей философии лежит индивидуальность.
                                Мы приглашаем вас <br /> в мир гибкого и индивидуального партнерства.
                                Наша компания с готовностью предоставляет <br /> уникальные условия сотрудничества для предприятий малого и среднего бизнеса, <br />
                                а также для сферы HoReCa.
                                Мы тщательно учитываем уникальные потребности каждого клиента <br /> и создаем наилучшие возможности сотрудничества,
                                гарантируя вам доступ к продукту высочайшего качества.
                            </p>
                        </div>
                        <div>
                            <a className='border cursor-pointer border-white text-[16px] text-[#EBF5E4] px-15 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 sm:active:bg-white/20 sm:active:scale-95'
                                href="#form-opto"
                                onClick={(e) => { e.preventDefault(); scrollToSection('form-opto'); }}> Связаться </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
