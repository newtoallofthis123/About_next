//! Will Not be implemented in typescript
//? This is a simple test page to test out monaco-editor.
//? It's not really used for anything else.

import React from 'react'
import Editor, { useMonaco } from '@monaco-editor/react';
import Layout from '@/components/layout';

export default function EditorIndex() {
    const monaco = useMonaco();
    React.useEffect(() => {
        if (monaco) {
            console.log('Initialized Monaco');
        }
    }, [monaco]);
    const [code, setCode] = React.useState('// type your code...');
    const handleCodeChange = (newValue, e) => {
        setCode(newValue);
    };
    const [language, setLanguage] = React.useState('javascript');
    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };
    return (
        <Layout>
            <div style={{
                marginTop: '6%',
            }} className='editor normalize'>
                <h1>
                    Noob's Code Editor
                </h1>
                <div style={{
                    textAlign: "center",
                }}>
                    <select value={language} onChange={handleLanguageChange}>
                        <option value="javascript">JavaScript</option>
                        <option value="typescript">TypeScript</option>
                        <option value="css">CSS</option>
                        <option value="html">HTML</option>
                        <option value="json">JSON</option>
                        <option value="markdown">Markdown</option>
                        <option value="python">Python</option>
                        <option value="java">Java</option>
                        <option value="c">C</option>
                        <option value="cpp">C++</option>
                        <option value="csharp">C#</option>
                        <option value="go">Go</option>
                        <option value="kotlin">Kotlin</option>
                        <option value="php">PHP</option>
                        <option value="ruby">Ruby</option>
                        <option value="rust">Rust</option>
                        <option value="scala">Scala</option>
                        <option value="swift">Swift</option>
                        <option value="yaml">YAML</option>
                    </select>
                </div>
                <Editor
                    height="90vh"
                    defaultValue={code}
                    defaultLanguage='javascript'
                    language={language}
                    onChange={handleCodeChange}
                    theme='vs-dark'
                />;
            </div>
      </Layout>
  )
}
