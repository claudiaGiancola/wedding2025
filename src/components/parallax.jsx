import { useRef, useEffect } from 'react';
import invitoMatrimonio from '../assets/Invito Matrimonio cropped.jpeg';

export function HeroParallax() {
    const ref = useRef(null);

    const backgroundStyle = {
        backgroundImage: `url(${invitoMatrimonio})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: '45%',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
    };

    useEffect(() => {
        const elem = ref.current;
        if (!elem) return;

        const onScroll = () => {
            const offset = window.pageYOffset;
            elem.style.backgroundPositionY = `${-offset * 0.5}px`;
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return <>
        <div ref={ref} style={backgroundStyle} className="hero-parallax" />
    </>
}

export default HeroParallax;
