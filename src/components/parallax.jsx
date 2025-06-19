import { useRef, useEffect } from 'react';
import invitoMatrimonio from '../assets/Invito Matrimonio cropped.jpeg';
import Countdown from "./countdown";

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
            bgElem.style.backgroundPositionY = `${-offset * 0.5}px`; // Background
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