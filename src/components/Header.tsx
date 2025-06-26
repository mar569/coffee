import React from 'react';
import logoImage from '../assets/logo/logo-header.svg';

export const Header: React.FC = React.memo(() => {
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
        <header className='header'>
            <div className='flex flex-col justify-between h-full'>
                <div className='pt-[47px] flex flex-row justify-evenly items-center'>
                    <div className='p-2'>
                        <a href="/" onClick={(e) => { e.preventDefault(); scrollToSection('product'); }}>
                            <img src={logoImage} alt="Логотип" className='max-w-[280px] w-full h-auto' />
                        </a>
                    </div>
                    <div className='header_wrapper-nav'>
                        <ul className='header__nav-list'>
                            <li className='header__list-item'>
                                <a
                                    href="#product"
                                    onClick={(e) => { e.preventDefault(); scrollToSection('product'); }}
                                    className='header__list-link'
                                >
                                    Наш товар
                                </a>
                            </li>
                            <li className='header__list-item'>
                                <a
                                    href="#form-opto"
                                    onClick={(e) => { e.preventDefault(); scrollToSection('form-opto'); }}
                                    className='header__list-link'
                                >
                                    Получить прайс
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='pb-[41px] justify-center flex'>
                    <button className='bg-[#010100] cursor-pointer hover:bg-[#ded6b349] text-white font-bold text-[15px] line-through-[20px] rounded-4xl transition-all ease h-12 w-74 duration-500 transform hover:scale-105'>
                        <a
                            href="#form-opto"
                            onClick={(e) => { e.preventDefault(); scrollToSection('form-opto'); }}
                            className='header__link-item'
                        >
                            Получить оптовый прайс
                        </a>
                    </button>

                </div>
            </div>
        </header>
    );
});
