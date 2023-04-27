import { marked } from 'marked';
import hljs from 'highlight.js';

type Props = {
    content: string;
};

export default function Markdown({ content }) {
    const renderer = new marked.Renderer();

    renderer.code = function (code, language) {
        const className = `hls ${language}`;
        const highlightedCode = language ?
            hljs.highlight(language, code).value :
            code;
        return `<pre class="${className}"><code class="language-${language}">${highlightedCode}</code></pre>`;
    };

    const html = marked(content, { renderer });

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
