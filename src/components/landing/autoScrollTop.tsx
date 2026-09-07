'use client';

import { useEffect } from 'react';
import { useLenis } from '@/lib/lenis';

export default function AutoScrollTop() {
    const lenis = useLenis();

    useEffect(() => {
        // Prevent browser's default scroll restoration from keeping a scrolled position on page refresh or navigation
        if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        const scrollToTop = () => {
            if (lenis) {
                lenis.scrollTo(0, { immediate: true });
            }
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
        };

        // Scroll to top immediately on mount
        scrollToTop();

        // Extra animation frame and brief timeouts to account for layout shifts and Lenis initialization
        const rafId = requestAnimationFrame(scrollToTop);
        const timer1 = setTimeout(scrollToTop, 50);
        const timer2 = setTimeout(scrollToTop, 150);

        return () => {
            cancelAnimationFrame(rafId);
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [lenis]);

    return (
        <div
            id="top"
            tabIndex={-1}
            aria-hidden="true"
            className="absolute top-0 left-0 w-0 h-0 pointer-events-none opacity-0 outline-none"
        />
    );
}
