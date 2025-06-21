import { useRef, useEffect, useState } from 'react';
import invitoMatrimonio from '../assets/Invito Matrimonio cropped.jpeg';
import Countdown from "./countdown";

export function HeroParallax() {
    const containerRef = useRef(null);
    const backgroundRef = useRef(null);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (!containerRef.current || !backgroundRef.current) return;

                    const rect = containerRef.current.getBoundingClientRect();
                    const offset = -rect.top * 0.5;

                    backgroundRef.current.style.transform = `translateY(${offset}px)`;
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative overflow-hidden flex justify-center items-end"
            style={{ minHeight: '100vh' }}
        >
            <div
                ref={backgroundRef}
                style={{
                    backgroundImage: `url(${invitoMatrimonio})`,
                    backgroundSize: 'cover',
                    backgroundPosition: '44% center',
                    backgroundRepeat: 'no-repeat',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    transform: 'translateY(0)',
                    willChange: 'transform',
                    zIndex: -1,
                }}
            />
            <div className="pb-32">
                <Countdown />
            </div>
        </div>
    );
}

export function ParallaxReveal() {
    const containerRef = useRef(null);
    const backgroundRef = useRef(null);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (!containerRef.current || !backgroundRef.current) return;

                    const rect = containerRef.current.getBoundingClientRect();
                    const offset = -rect.top * 0.3;

                    backgroundRef.current.style.transform = `translateY(${offset}px)`;
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative overflow-hidden flex flex-col justify-center items-center"
            style={{ minHeight: '55vh', width: '100%' }}
        >
            {/* Background with vertical repeat */}
            <div
                ref={backgroundRef}
                style={{
                    backgroundImage: `url(${invitoMatrimonio})`,
                    backgroundSize: '100%',
                    backgroundPosition: 'center bottom',
                    backgroundRepeat: 'no-repeat',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    transform: 'translateY(0)',
                    willChange: 'transform',
                    zIndex: -1,
                }}
            />
        </div>
    );
}