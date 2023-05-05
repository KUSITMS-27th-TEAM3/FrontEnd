import { useRef, useEffect, useCallback, CSSProperties } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

interface Props {
    direction?: Direction;
    duration?: number;
    delay?: number;
}

interface AnimatedStyle extends CSSProperties {
    opacity: number;
    transform: string;
}

const useScrollFadeIn = ({
    direction = 'up',
    duration = 1,
    delay = 0,
}: Props = {}): { ref: React.RefObject<HTMLDivElement>, style: AnimatedStyle } => {
    const element = useRef<HTMLDivElement>(null);

    const handleDirection = (name: Direction): string => {
        switch (name) {
            case 'up':
                return 'translate3d(0, 50%, 0)';
            case 'down':
                return 'translate3d(0, -50%, 0)';
            case 'left':
                return 'translate3d(50%, 0, 0)';
            case 'right':
                return 'translate3d(-50%, 0, 0)';
            default:
                return '';
        }
    };

    // const hasIntersectedRef = useRef(false);

    // useEffect(() => {
    //     if (hasIntersectedRef.current === false) {
    //         const { current } = element;
    //         const { top = 0, bottom = 0 } = current?.getBoundingClientRect() || {};
    //         const { innerHeight } = window;


    //         if (top <= innerHeight * 0.4 && bottom >= 0) {
    //             hasIntersectedRef.current = true;
    //         }
    //     }
    // }, [element]);

    const onScroll = useCallback(([entry]: IntersectionObserverEntry[]) => {
        const { current } = element;
        // if (entry.isIntersecting) {
        //     console.log(current)
        // }

        if (entry.isIntersecting) {
            current?.style.setProperty('transition-property', 'all');
            current?.style.setProperty('transition-duration', `${duration}s`);
            current?.style.setProperty('transition-timing-function', 'cubic-bezier(0, 0, 0.2, 1)');
            current?.style.setProperty('transition-delay', `${delay}s`);
            current?.style.setProperty('opacity', '1');
            current?.style.setProperty('transform', 'translate3d(0, 0, 0)');
        }
    }, [delay, duration]);

    useEffect(() => {
        let observer: IntersectionObserver | undefined;
        if (element.current) {
            observer = new IntersectionObserver(onScroll, { threshold: 0.4 });
            observer.observe(element.current);
        }
        return () => observer?.disconnect();
    }, [onScroll]);

    const animatedStyle: AnimatedStyle = {
        opacity: 0,
        transform: handleDirection(direction),
    };

    return { ref: element, style: animatedStyle };
};

export default useScrollFadeIn;
