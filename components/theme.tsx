'use client';
import React from 'react';

export default function Theme() {
    const toggleTheme = (theme: string) => {
        let set_theme = theme;
        if (theme === 'system') {
            if (
                window.matchMedia &&
                window.matchMedia('(prefers-color-scheme: dark)').matches
            ) {
                set_theme = 'dark';
            } else {
                set_theme = 'light';
            }
        }
        document.documentElement.setAttribute('data-theme', set_theme);
        localStorage.setItem('theme', theme);
    };
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            const theme = localStorage.getItem('theme');
            if (theme) {
                toggleTheme(theme);
            } else {
                toggleTheme('system');
            }
        }
    }, []);
    return <></>;
}
