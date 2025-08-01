import { useState, useEffect, useRef } from 'react';

export const useHeaderTheme = (sectionRefs) => {
    const [theme, setTheme] = useState('dark'); // Default theme for the header
    const observer = useRef(null);

    useEffect(() => {
        if (observer.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const newTheme = entry.target.dataset.theme || 'dark';
                        setTheme(newTheme);
                    }
                });
            },
            {
                rootMargin: '-50% 0px -50% 0px', // Triggers when a section is at the vertical center
                threshold: 0,
            }
        );

        const { current: currentObserver } = observer;

        sectionRefs.forEach((sectionRef) => {
            if (sectionRef.current) {
                currentObserver.observe(sectionRef.current);
            }
        });

        return () => currentObserver.disconnect();
    }, [sectionRefs]);

    return theme;
};