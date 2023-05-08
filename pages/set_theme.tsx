import { Seo } from '@components/seo';
import React from 'react';
import Theme from '@components/theme';

type Props = {};

export default function setTheme({}: Props) {
    const setTheme = (theme: string) => {
        if (typeof window !== 'undefined') {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        }
    };

    return (
        <>
            <Seo></Seo>
            <Theme></Theme>
            <div
                style={{
                    margin: '10%',
                }}
                className="redirect password_div"
            >
                <h1>Enter Theme to Set</h1>
                <p>
                    Choose from: dark, light, monokai, dracula, nord,
                </p>
                <form
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault();
                        setTheme(e.currentTarget.theme.value);
                    }}
                >
                    <input type="text" placeholder='Press Enter To Set' name="theme" id="theme" />
                </form>
            </div>
        </>
    );
}
