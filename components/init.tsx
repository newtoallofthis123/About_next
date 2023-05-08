import React from 'react';

export default function Init() {
    const [icon, setIcon] = React.useState('bi-moon');
    const setTheme = (theme: string) => {
        if (typeof window !== 'undefined') {
            document.documentElement.setAttribute('data-theme', theme);
        }
    }
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
        if (set_theme === 'dark' || set_theme === 'monokai' || set_theme === 'dracula' || set_theme === 'nord' || set_theme === 'synthwave' || set_theme === 'github' || set_theme === 'nightowl'){
            setIcon('bi-sun');
        } else {
            setIcon('bi-moon');
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
    return (
        <>
            Toggle Mode:
            <button
                style={{
                    marginLeft: '0.5rem',
                    background: 'none',
                    color: 'var(--color)',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1.5rem',
                }}
                onClick={() => {
                    const theme = localStorage.getItem('theme');
                    if (theme === 'dark') {
                        toggleTheme('light');
                    } else {
                        toggleTheme('dark');
                    }
                }}
            >
                <i className={`bi ${icon}`}></i>
            </button>{' '}
            or
            <button
                style={{
                    marginLeft: '0.5rem',
                    background: 'none',
                    color: 'var(--color)',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1.5rem',
                }}
                onClick={() => {
                    toggleTheme('system');
                }}
            >
                <i className="bi bi-repeat"></i>
            </button>{' '}
            <div>
                <span>Special Themes:</span>
                <button
                    style={{
                        marginLeft: '0.5rem',
                        background: 'none',
                        color: 'var(--color)',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '1rem',
                    }}
                    onClick={() => {
                        toggleTheme('monokai');
                    }}
                >
                    Monokai
                </button>
                <button
                    style={{
                        marginLeft: '0.5rem',
                        background: 'none',
                        color: 'var(--color)',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '1rem',
                    }}
                    onClick={() => {
                        toggleTheme('purple');
                    }}
                >
                    Voila
                </button>
                <button
                    style={{
                        marginLeft: '0.5rem',
                        background: 'none',
                        color: 'var(--color)',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '1rem',
                    }}
                    onClick={() => {
                        toggleTheme('dracula');
                    }}
                >
                    Dracula
                </button>
            </div>
        </>
    );
}
