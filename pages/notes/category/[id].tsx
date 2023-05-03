import { useRouter } from 'next/router';
import useSwr from 'swr';
import Link from 'next/link';
import Layout from '@components/layout';
import LoadingScreen from '@components/loading';

type Note = {
    _id: string;
    title: string;
    slug: string;
    content: string;
    category: string;
};

export default function UpdatesID() {
    const router = useRouter();
    const { id } = router.query;
    const param = id;
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSwr(
        `/api/v2/notes/category/${param}`,
        fetcher
    );
    if (isLoading)
        return (
            <div>
                <LoadingScreen></LoadingScreen>
            </div>
        );
    if (error) return <div>Failed to load</div>;

    if (data) {
        const notes = data;
        if (!notes) return <div>404</div>;
        if (notes) {
            return (
                <Layout>
                    <div className="normalize">
                        <div className="page-div">
                            <h1>Notes in {param}</h1>
                            {notes.length === 0 ? (
                                <p>🔴 No notes in this category</p>
                            ) : (
                                <p>🟢 Following Notes were found</p>
                            )}
                            <ul>
                                {notes.map((note: Note) => {
                                    return (
                                        <li key={note._id}>
                                            <Link href={`/notes/${note.slug}`}>
                                                {note.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </Layout>
            );
        } else {
            <div>404</div>;
        }
    }
}
