import novel_data from 'app/novels/data.json';
import { redirect } from 'next/navigation';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Link from 'next/link';

type Props = {
    params: {
        novel: string;
        chapter: string;
    };
};

export const metadata = {
    title: `Novels by Ishan - ${new Date().getFullYear()}`,
};

//? Sends the user to the last chapter if they try to access a chapter that doesn't exist
async function getChapterData(novel: string, chapter: string) {
    if (!novel_data[novel]['content'][parseInt(chapter)])
        redirect(
            '/novels/' +
                novel +
                '/' +
                String(novel_data[novel]['content'].length)
        );
    return novel_data[novel]['content'][parseInt(chapter)];
}

export default async function NovelPage({ params: { novel, chapter } }: Props) {
    const data = await getChapterData(novel, chapter);
    return (
        <>
            <div className="book_div">
                <div className="book_content gap">
                    {chapter == '0' ? (
                        <>
                            <h1>Prologue</h1>
                        </>
                    ) : (
                        <h1>Chapter {chapter}</h1>
                    )}
                    <div className="novel-content">
                        <ReactMarkdown>{data}</ReactMarkdown>
                    </div>
                    <div className="book__meta">
                        {chapter != '0' ? (
                            <p className="chapter-name">{chapter}</p>
                        ) : (
                            <p className="chapter-name">Prologue</p>
                        )}
                        <p className="novel-name">
                            {novel_data[novel]['title']}
                        </p>
                    </div>
                </div>
            </div>
            <div className="book_btns">
                <button
                    style={{
                        backgroundColor: 'var(--blue)',
                        borderRadius: '12px',
                    }}
                    className="btn"
                >
                    <Link href={`/novels/${novel}/${parseInt(chapter) - 1}`}>
                        <i className="bi bi-arrow-left"></i>
                    </Link>
                </button>
                <button
                    style={{
                        backgroundColor: 'var(--yellow)',
                        borderRadius: '12px',
                    }}
                    className="btn"
                >
                    <Link href={`/novels/${novel}/${parseInt(chapter) + 1}`}>
                        <i className="bi bi-arrow-right"></i>
                    </Link>
                </button>
            </div>
        </>
    );
}
