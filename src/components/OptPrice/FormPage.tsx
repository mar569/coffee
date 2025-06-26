import wing from '../../assets/absolute/wing.png'
import wingRight from '../../assets/absolute/wing_right.png';
import RightCol from './RightCol';


export function FormPage() {
    return (
        <div className='w-full rounded-2xl bg-[#110f13cc] flex flex-col md:flex-row relative'>
            <div
                style={{
                    backgroundImage: `url(${wing})`,
                    position: 'absolute',
                    left: '10%',
                    top: '28px',
                    width: '220px',
                    height: '220px',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    transform: 'translate(-50%, -58px)',
                }}
            />
            <div
                style={{
                    backgroundImage: `url(${wingRight})`,
                    position: 'absolute',
                    left: '73%',
                    top: '28px',
                    width: '200px',
                    height: '200px',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    transform: 'translate(10%, 450px)',
                }}
            />
            <div className='flex flex-col items-center p-4 pb-[75px] pt-[60px] w-full'>
                <h1 className='text-center text-[34px] text-white font-medium text-2xl md:text-4xl mb-6'>ПОЛУЧИ
                    <span className='text-[#F8E4BECC]'> ОПТОВЫЙ ПРАЙС </span>
                    ПРЯМО СЕЙЧАС!
                </h1>
                <RightCol />
            </div>
        </div>
    )
}

