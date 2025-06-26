import logoImage from '../assets/logo/logo-header.svg';

export function Footer() {
    return (
        <section className='max-w-[1920px] mx-auto pt-12'>
            <div className='pt-[61px] pb-[57px]'>
                <img src={logoImage} alt="logo" className="w-full h-auto max-w-[400px] mx-auto" />
            </div>
        </section>

    )
}
