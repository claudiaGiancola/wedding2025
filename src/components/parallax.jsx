import { useRef, useEffect, useState } from 'react';
import invitoMatrimonio from '../assets/Invito Matrimonio cropped.jpeg';
import Countdown from "./countdown";

export function HeroParallax() {
    const containerRef = useRef(null);
    const backgroundRef = useRef(null);
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        setWindowHeight(window.innerHeight);

        const handleScroll = () => {
            if (!containerRef.current || !backgroundRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();

            // Calculate how far the container is from the viewport top
            // and move background slower to create parallax effect
            const offset = -rect.top * 0.5;

            // Limit transform to avoid excessive movement
            backgroundRef.current.style.transform = `translateY(${offset}px)`;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // initialize on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative overflow-hidden flex justify-center items-end"
            style={{ minHeight: '100vh' }}
        >
            {/* Background layer */}
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
        const handleScroll = () => {
            if (!containerRef.current || !backgroundRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const offset = -rect.top * 0.3; // slower parallax effect, tweak multiplier as you like

            backgroundRef.current.style.transform = `translateY(${offset}px)`;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // initialize on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative overflow-hidden flex flex-col justify-center items-center"
            style={{ minHeight: '25vh', width: '100%' }}
        >
            {/* Background */}
            <div
                ref={backgroundRef}
                style={{
                    backgroundImage: `url(${invitoMatrimonio})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center center',
                    // backgroundRepeat: 'no-repeat',
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

            {/* Content can go here if needed */}
        </div>
    );
}