import React, { useEffect, useRef, useState } from 'react';
import styles from './CursorGradient.module.scss';

export const CursorGradient = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const cursorRef = useRef(null);

    useEffect(() => {
        const updateCursor = (e) => {
            const x = e.clientX;
            const y = e.clientY;
            setCursorPosition({ x, y });
        };

        document.addEventListener('mousemove', updateCursor);

        return () => {
            document.removeEventListener('mousemove', updateCursor);
        };
    }, []);

    const { x, y } = cursorPosition;

    return (
        <div
            ref={cursorRef}
            className={styles.cursor}
            style={{
                background: `radial-gradient(600px at ${x}px ${y}px, rgba(47, 59, 84, 0.15), transparent 80%)`,
            }}
        />
    );
};