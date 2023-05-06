import React, { useRef, useEffect } from 'react';
import hljs from 'highlight.js';

type Props = {
    children: React.ReactNode;
    language: string;
};

export default function Hightlight({ children, language }: Props) {
    const codeRef = useRef<HTMLElement>(null);
    useEffect(() => {
        if (codeRef.current) {
            hljs.highlightBlock(codeRef.current);
        }
    }, [language]);

    return (
        <pre
            className={`hljs ${language}`}
            style={{
                backgroundColor: '#23241f',
                padding: '1rem',
                border: '3px solid white',
            }}
        >
            <code ref={codeRef} className={`language-${language}`}>
                {children}
            </code>
        </pre>
    );
}
