import { useEffect, useState } from 'react';
import logoImage from '../assets/logo/logo-header.svg';
import arrowUpIcon from '../assets/logo/arrow-top-icon.svg';

export function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 1200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <>
            <section className='footer-container'>
                <div className='footer-logo-container'>
                    <img src={logoImage} alt="Логотип компании" className="footer-logo" />
                </div>

                <button
                    onClick={scrollToTop}
                    className={`scroll-top-btn ${isVisible ? 'showed' : ''}`}
                    aria-label="Наверх"
                    type="button"
                >
                    <div className="btn-icon">
                        <img src={arrowUpIcon} alt="Стрелка вверх" />
                    </div>
                </button>
            </section>


        </>
    );
}
