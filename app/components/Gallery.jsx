'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslations } from 'next-intl';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {slidesMobile, slidesDesktop} from '../lib/gallery'

export const Gallery = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeIndex, setActiveIndex] = useState(2);
    const swiperRef = useRef(null);

    const t = useTranslations('GallerySection');

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1440);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!swiperRef.current || swiperRef.current.destroyed) return;

            if (e.key === 'ArrowLeft') {
                swiperRef.current.slidePrev();
            } else if (e.key === 'ArrowRight') {
                swiperRef.current.slideNext();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    const slideWidth = isMobile ? 320 : 310;
    const slideHeight = isMobile ? 460 : 420;
    const centerSlideWidth = 320;
    const centerSlideHeight = 460;
    const gap = isMobile ? 16 : 24;

    const goPrev = () => swiperRef.current?.slidePrev();
    const goNext = () => swiperRef.current?.slideNext();

    return (
        <section id='gallery' className="py-10 xl:pt-20 xl:pb-[106px]">
            <h2 className="text-center uppercase italic text-[22px]/[30px] xl:text-[36px]/[42px] mb-6 xl:mb-10">{t('gallery')}</h2>

            <div className="relative max-w-[1440px] mx-auto overflow-hidden px-4">
                <style jsx global>{`div .swiper-slide {display: flex}`}</style>
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    modules={[Navigation]}
                    slidesPerView="auto"
                    centeredSlides
                    loop
                    speed={500}
                    spaceBetween={gap}
                    initialSlide={2}
                    className="!overflow-visible"
                >
                    {(isMobile ? slidesMobile : slidesDesktop).map((src, index) => {
                        const isActive = !isMobile && index === activeIndex;
                        const currentWidth = isActive ? centerSlideWidth : slideWidth;
                        const currentHeight = isActive ? centerSlideHeight : slideHeight;

                        return (
                            <SwiperSlide
                                key={index}
                                className="flex items-center justify-center self-center"
                                style={{ width: `${currentWidth}px`, height: `${currentHeight}px` }}
                            >
                                <div
                                    className="relative transition-all duration-500 ease-in-out"
                                    style={{ width: `${currentWidth}px`, height: `${currentHeight}px` }}
                                >
                                    <Image
                                        src={src}
                                        alt={`${t('alt')} ${index + 1}`}
                                        fill
                                        sizes="(max-width: 1439px) 320px, (min-width: 1440px) 310px"
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>

                <div className="flex justify-between items-center mt-4 xl:mt-8 px-4 xl:px-8">
                    <button onClick={goPrev} aria-label={t('left')}>
                        <BsArrowLeft size={isMobile ? 32 : 40} className="fill-white hover:fill-hover active:fill-main" />
                    </button>
                    <Link href='/gallery' aria-label={t('link')} className="uppercase italic text-sm xl:text-[16px] border-white text-white hover-border hover-text border-[0.5px] border-solid bg-white/1 shadow-[inset_0px_0px_68px_0px_rgba(221,216,216,0.05)] backdrop-blur-[48px] px-6 py-1 xl:px-8 xl:py-2">{t('more')}</Link>
                    <button onClick={goNext} aria-label={t('right')}>
                        <BsArrowRight size={isMobile ? 32 : 40} className="fill-white hover:fill-hover active:fill-main" />
                    </button>
                </div>
            </div>
        </section>
    );
};