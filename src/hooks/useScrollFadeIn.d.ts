import { CSSProperties, RefObject } from 'react';

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

declare const useScrollFadeIn: (
    { direction, duration, delay }?: Props,
) => {
    ref: RefObject<HTMLDivElement>;
    style: AnimatedStyle;
};

export default useScrollFadeIn;
