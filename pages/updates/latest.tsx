import useSwr from 'swr';
import Link from 'next/link';
import Head from 'next/head';
import LoadingScreen from '@components/loading';
import { marked } from 'marked';

type Update = {
    _id: string;
    name: string;
    content: string;
    hash: string;
    date: string;
};

export default function UpdateLatest() {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSwr(`/api/v1/updates`, fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateOnMount: true,
    });
    if (isLoading)
        return (
            <div>
                <LoadingScreen></LoadingScreen>
            </div>
        );
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>404</div>;
    let max = 3;
    const updates = data.slice(0).reverse();
    return (
        <div className="page-div updates_div">
            <Head>
                <title>{updates[0].name} | Ishan's Updates</title>
            </Head>
            <h2>{updates[0].name}</h2>
            <p>{updates[0].date}</p>
            <p>{updates[0].author}</p>
            <p
                dangerouslySetInnerHTML={{
                    __html: marked.parse(updates[0].content),
                }}
            ></p>
            <nav>
                <Link href="/updates">Back</Link>
            </nav>
            <h2>Other Updates</h2>
            {updates.map((update: Update) => {
                if (update.hash !== updates[0].hash && max > 0) {
                    max -= 1;
                    return (
                        <div key={update._id}>
                            <Link href={`/updates/${update.hash}`}>
                                {update.name}
                            </Link>
                        </div>
                    );
                }
            })}
        </div>
    );
}
