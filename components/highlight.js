import React, { useEffect, useRef } from "react";
import hljs from "highlight.js";

const Highlight = ({ children, language }) => {
    const codeRef = useRef(null);
    useEffect(() => {
        hljs.highlightBlock(codeRef.current);
    }, [language]);

    return (
        <pre
            className={`hljs ${language}`}
            style={{
                backgroundColor: "#23241f",
                padding: "1rem",
                border: "3px solid white",
            }}
        >
            <code ref={codeRef} className={`language-${language}`}>
                {children}
            </code>
        </pre>
    );
};

export default Highlight;