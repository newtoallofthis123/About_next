import { useRouter } from 'next/router';
import useSwr from 'swr';
import { marked } from 'marked';
import LoadingScreen from '@components/loading';
import hljs from 'highlight.js';
import Layout from '@components/layout';

export default function UpdatesID() {
    const router = useRouter();
    const { id } = router.query;
    const param = id;
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSwr(
        `/api/v2/notes/get/${param}`,
        fetcher
    );
    if (isLoading)
        return (
            <div>
                <LoadingScreen></LoadingScreen>
            </div>
        );
    if (error) return <div>Failed to load</div>;

    const renderer = new marked.Renderer();
    renderer.code = function (code: string, language: string) {
        const className = `hls ${language}`;
        const highlightedCode = language
            ? hljs.highlight(language, code).value
            : code;
        return `<pre class="${className}"><cod class="language-${language}"e>${highlightedCode}</code></pre>`;
    };

    if (data) {
        const note = data;
        if (!note) return <div>404</div>;
        const htmlContent = (content: string) => {
            const html = marked(content, { renderer });
            hljs.highlightAll();
            return { __html: html };
        };
        if (note) {
            return (
                <Layout>
                    <div className="normalize">
                        <div className="notes_div">
                            <h1>{note.title}</h1>
                            <p
                                dangerouslySetInnerHTML={htmlContent(
                                    note.content
                                )}
                            ></p>
                        </div>
                    </div>
                </Layout>
            );
        } else {
            <div>404</div>;
        }
    }
}
