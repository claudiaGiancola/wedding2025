import { useRef, useEffect } from 'react';
import invitoMatrimonio from '../assets/Invito Matrimonio cropped.jpeg';
import invitoMatrimonioRevealed from '../assets/Invito Matrimonio regalo modified.png';

import Countdown from "./countdown";
import { Typography } from '@material-tailwind/react';

export function HeroParallax() {
    const backgroundRef = useRef(null);

    const backgroundStyle = {
        backgroundImage: `url(${invitoMatrimonio})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: '44%',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
    };

    useEffect(() => {
        const bgElem = backgroundRef.current;

        const onScroll = () => {
            const offset = window.pageYOffset;
            bgElem.style.backgroundPositionY = `${-offset * 0.5}px`;
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div
            ref={backgroundRef}
            style={backgroundStyle}
            className="hero-parallax flex justify-center items-end"
        >
            <div className="pb-32">
                <Countdown />
            </div>
        </div>
    );
}

export function ParallaxReveal() {
    const backgroundStyle = {
        backgroundImage: `url(${invitoMatrimonio})`,
        backgroundSize: 'contain',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        minHeight: '25vh',
    };

    return (
        <div style={backgroundStyle} className='flex flex-col justify-center items-center'>
        </div>
    );
}