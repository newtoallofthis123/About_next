import Layout from '@components/layout';
import Link from 'next/link';
import { connectToDatabase } from 'utils/db';

type Props = {
    data: {
        _id: string;
        title: string;
        hash: string;
    }[];
};

export default function Code({ data }: Props) {
    return (
        <Layout>
            <div className="normalize">
                <div className="full-content-div notes__showcase content-div-yellow">
                    <h1>Interested in the Noob's Code Snippets?</h1>
                    <ul
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        {data.map((code) => {
                            return (
                                <li key={code._id}>
                                    <Link href={`/code/${code.hash}`}>
                                        <p>{code.title}</p>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <h2
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Wondering Why This isn't public?
                    </h2>
                    <p
                        style={{
                            margin: '0 2%',
                            textAlign: 'center',
                        }}
                    >
                        This would be a nightmare to maintain if it was public.
                        Moreover, moderation would be a nightmare. I'm not going
                        to make a registration system for this, so I'm just
                        going to keep it private. So, if you want to see the
                        code snippets, just ask me for the password.
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export async function getServerSideProps() {
    const { db } = await connectToDatabase();
    const response = await db.collection('code').find({}).toArray();
    const data = response.map(({ _id, ...rest }) => rest);
    if (!data)
        return {
            notFound: true,
        };
    return {
        props: {
            data,
        },
    };
}
