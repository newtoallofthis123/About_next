import Link from 'next/link'
import Head from 'next/head'
import { connectToDatabase } from '@/utils/db'
import Markdown from '@/components/md'

export default function UpdatesID({ data, recommends }) {
    const update = data
    const updates = recommends
    return (
        <div className='page-div updates_div'>
            <Head>
                <title>{update.name} | Ishan's Updates</title>
            </Head>
            <h1>
                Ishan's Updates
            </h1>
            <p>
                {update.date}
            </p>
            <p>
                {update.author}
            </p>
            <nav>
                <Link href='/updates'>Back</Link>
            </nav>
            <div className="main_update">
                <h2>{update.name}</h2>
                <Markdown content={update.content}></Markdown>
            </div>
            {
                (updates.length > 0) ?
                    <h2>Other Updates</h2> : <h2>No Previous Found</h2>
            }
            {
                updates.map(update => {
                        return (
                            <div key={update._id}>
                                <Link href={`/updates/${update.hash}`}>
                                    {update.name}
                                </Link>
                            </div>
                        )
                })
            }
        </div>
    )
}

export async function getServerSideProps({ params }) {
    const { id } = params
    const param = id
    const { db } = await connectToDatabase();
    const response = await db.collection("page").find({}).toArray();
    const result = response.find(({ hash }) => hash === param)
    if (!result) {
        return {
            notFound: true,
        }
    }
    const data = {
        name: result.name || null,
        content: result.content || null,
        author: result.author || null,
        date: result.date || null,
    }
    let recommends = []
    const param_id = result._id
    response.forEach(update => {
        if (update.hash !== param && update._id > param_id) {
            recommends.push(update)
        }
    })
    recommends = recommends.map(({ _id, ...rest }) => rest)
    return {
        props: {
            data,
            recommends
        }
    }
}