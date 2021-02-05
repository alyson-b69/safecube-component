import React, { useRef, useEffect } from 'react';

export function useInterval(callback: any, delay: number | null) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(
        () => {
            if (callback) {
                savedCallback.current = callback;
            }
        },
        [callback],
    );

    // Set up the interval.
    useEffect(
        () => {
            function tick() {
                //@ts-ignore
                savedCallback.current();
            }
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        },
        [delay],
    );
};
