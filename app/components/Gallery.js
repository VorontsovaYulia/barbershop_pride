'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const SLIDES = [
  '/slider/slide1.jpg',
  '/slider/slide2.jpg',
  '/slider/slide3.jpg',
  '/slider/slide4.jpg',
  '/slider/slide5.jpg',
  '/slider/slide6.jpg',
  '/slider/slide7.jpg',
];

export const Gallery = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeIndex, setActiveIndex] = useState(2);
    const swiperRef = useRef(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1440);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const slideSize = isMobile ? 320 : 310;
    const centerSlideSize = 320;
    const slideHeight = isMobile ? 460 : 420;
    const centerSlideHeight = 460;
    const gap = isMobile ? 16 : 24;

    const goPrev = () => swiperRef.current?.slidePrev();
    const goNext = () => swiperRef.current?.slideNext();

    return (
        <section className="py-10 xl:pt-20 xl:pb-[106px]">
            <h2 className="text-center italic text-[22px]/[30px] xl:text-[36px]/[42px] mb-6 xl:mb-10">ГАЛЕРЕЯ</h2>

            <div className="relative max-w-[1440px] mx-auto overflow-hidden px-4">
                <style jsx global>{`div .swiper-slide {display: flex}`}</style>
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    modules={[Navigation]}
                    slidesPerView="auto"
                    centeredSlides
                    loop
                    spaceBetween={gap}
                    initialSlide={2}
                    className="!overflow-visible"
                >
                    {SLIDES.map((src, index) => (
                        <SwiperSlide
                            key={index}
                            className="flex items-center justify-center self-center"
                            style={{
                                width: !isMobile && index === activeIndex ? `${centerSlideSize}px` : `${slideSize}px`,
                                height: !isMobile && index === activeIndex ? `${centerSlideHeight}px` : `${slideHeight}px`,
                            }}
                        >
                            <div
                                className="relative transition-all duration-500 ease-in-out"
                                style={{
                                    width: !isMobile && index === activeIndex ? `${centerSlideSize}px` : `${slideSize}px`,
                                    height: !isMobile && index === activeIndex ? `${centerSlideHeight}px` : `${slideHeight}px`,
                                }}
                            >
                                <Image
                                    src={src}
                                    alt={`Slide ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>

                <div className="flex justify-between items-center mt-4 px-4 xl:px-8">
                    <button onClick={goPrev} aria-label="стрілка назад">
                        <BsArrowLeft size={isMobile ? 32 : 40} className="fill-white hover:fill-hover active:fill-main" />
                    </button>
                    <span className="cursor-pointer text-center text-sm xl:text-base italic text-white">БІЛЬШЕ</span>
                    <button onClick={goNext} aria-label="стрілка вперед">
                        <BsArrowRight size={isMobile ? 32 : 40} className="fill-white hover:fill-hover active:fill-main" />
                    </button>
                </div>
            </div>
        </section>
    );
};
