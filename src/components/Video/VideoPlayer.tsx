import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import play from '../../assets/logo/play.png';

interface IVideoPlayerProps {
    videoSrc: string;
    poster?: string;
    className?: string;
}

export const VideoPlayer: React.FC<IVideoPlayerProps> = ({
    videoSrc,
    poster,
    className = '',
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <section className='max-w-[1920px] mx-auto'>
            <div className={`relative pt-12 ${className}`}>

                <div
                    className="flex justify-center"
                    onClick={openModal}
                >
                    {poster && (
                        <img
                            src={poster}
                            alt="Video poster"
                            className="w-full max-w-[1100px] h-auto rounded-lg transition-transform duration-400 group-hover:scale-102"
                        />

                    )}
                    <div className="absolute top-10 inset-0 flex items-center justify-center ">
                        <img
                            className="w-16 md:w-32 h-16 md:h-32 text-white bg-white/20 rounded-full cursor-pointer hover:bg-white/40 transition-all duration-300 sm:active:bg-white/20 sm:active:scale-95"
                            src={play}
                        />
                    </div>
                </div>

                {isModalOpen && ReactDOM.createPortal(
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/90 p-4">
                        <div className="relative max-w-4xl">
                            <button
                                onClick={closeModal}
                                className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl"
                            >
                                &times;
                            </button>

                            <video
                                className="rounded-lg"
                                src={videoSrc}
                                poster={poster}
                                controls
                                autoPlay
                                playsInline
                            >
                                Ваш браузер не поддерживает видео.
                            </video>
                        </div>
                    </div>,
                    document.body
                )}
            </div>

        </section>

    );
};
