'use client';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const slides = [
  '/slider/slide1.jpg',
  '/slider/slide2.jpg',
  '/slider/slide3.jpg',
  '/slider/slide4.jpg',
  '/slider/slide5.jpg',
  '/slider/slide6.jpg',
  '/slider/slide7.jpg',
];

export const Gallery = () => {
    const sliderRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(2);
    const arrowSize = isMobile ? 32 : 40;

    useEffect(() => {
        const checkSize = () => setIsMobile(window.innerWidth < 1440);
        checkSize();
        window.addEventListener('resize', checkSize);
        return () => window.removeEventListener('resize', checkSize);
    }, []);

    const handlePrev = () => sliderRef.current?.slickPrev();
    const handleNext = () => sliderRef.current?.slickNext();

    const settings = {
        className: 'center',
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        initialSlide: 2,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: isMobile ? 1.12 : 4.3,
        beforeChange: (_, newIndex) => {
            setCurrentSlide(newIndex);
        },
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 1.12,
                }
            }
        ]
    };

    return (
        <section className="py-10 xl:pt-20 xl:pb-[106px]">

            <h2 className="block text-center mb-6 xl:mb-14 italic text-[22px]/[30px] xl:text-[36px]/[42px]">
                ГАЛЕРЕЯ
            </h2>

            <div className="relative mx-auto max-w-[1440px] overflow-x-clip">
                <style jsx global>{`div .slick-list {overflow: visible}`}</style>

                <Slider {...settings} ref={sliderRef}>
                    {slides.map((slide, i) => {
                        const isActive = i === currentSlide;
                        const width = isMobile ? 320 : 310;
                        const height = isMobile ? 460 : 420

                        return (
                            <div
                                key={i}
                                className='shrink-0 flex justify-center'
                            >
                                <div
                                    className={`transition-all duration-500 ${!isMobile && isActive && 'scale-[1.095] w-80 px-[9px]'}`}
                                    style={{ width, height }}
                                >
                                    <Image
                                        src={slide}
                                        alt={`Слайд ${i + 1}`}
                                        width={width}
                                        height={height}
                                        className='object-cover w-full h-full'
                                        priority
                                    />
                                </div>
                            </div>
                        );
                    })}
                </Slider>

                <div className="flex justify-between items-center mt-2 xl:mt-8 px-4 xl:px-18 h-8 xl:h-10">
                    <button onClick={handlePrev} aria-label="стрілка назад">
                        <BsArrowLeft size={arrowSize} className="fill-white hover:fill-hover active:fill-main" />
                    </button>
                    <span className="cursor-pointer text-center text-sm xl:text-base italic text-white">БІЛЬШЕ</span>
                    <button onClick={handleNext} aria-label="стрілка вперед">
                        <BsArrowRight size={arrowSize} className="fill-white hover:fill-hover active:fill-main" />
                    </button>
                </div>

            </div>
        </section>
    );
};