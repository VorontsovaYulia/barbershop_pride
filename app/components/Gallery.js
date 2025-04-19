'use client';

import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useEffect, useState } from 'react';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

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

    useEffect(() => {
        const checkSize = () => {
            setIsMobile(window.innerWidth < 1440);
        };

        checkSize();
        window.addEventListener('resize', checkSize);
        return () => window.removeEventListener('resize', checkSize);
    }, []);

    const handlePrev = () => sliderRef.current?.slickPrev();
    const handleNext = () => sliderRef.current?.slickNext();

    const settings = {
        className: 'center',
        centerMode: true,
        centerPadding: '0px',
        initialSlide: 2,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: isMobile ? 1.06 : 4.35,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 1.06,
                }
            }
        ]
    };

    return (
        <section className="py-10 xl:pt-20 xl:pb-[106px]">
            <h2 className="block text-center mb-6 xl:mb-10 italic text-[22px]/[30px] xl:text-[36px]/[42px] ">
                ГАЛЕРЕЯ
            </h2>

            <div className="slider-container relative mx-auto max-w-[1440px]">
                <Slider {...settings} ref={sliderRef}>
                    {slides.map((slide, i) => (
                        <div
                            key={i}
                            className={`shrink-0 ${isMobile ? 'px-2' : 'px-3'}`}
                        >
                            <div className="w-full">
                                <Image
                                    src={slide}
                                    alt={`Слайд ${i + 1}`}
                                    width={isMobile ? 338 : 308}
                                    height={isMobile ? 462 : 421}
                                    priority
                                />
                            </div>
                        </div>
                    ))}
                </Slider>

                <div className="flex justify-between items-center mt-2 xl:mt-6 px-4 xl:px-18 h-8 xl:h-10">
                    <button
                        onClick={handlePrev}
                        aria-label="стрілка назад"
                    >
                        {isMobile ? <BsArrowLeft size={32} className="fill-white"/> : <BsArrowLeft size={40} className="fill-white"/>}
                    </button>
                    <span className="text-center text-sm xl:text-base italic text-white">БІЛЬШЕ</span>
                    <button
                        onClick={handleNext}
                        aria-label="стрілка вперед"
                    >
                        {isMobile ? <BsArrowRight size={32} className="fill-white"/> : <BsArrowRight size={40} className="fill-white"/>}
                    </button>
                </div>
            </div>
        </section>
    );
};