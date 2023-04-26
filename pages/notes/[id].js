import Layout from "@/components/layout";
import Markdown from '@/components/md'
import { connectToDatabase } from "@/utils/db";
import Head from "next/head";

export default function UpdatesID({data}) {
    const note = data
    return (
        <Layout>
            <div className="normalize">
                <Head>
                    <title>
                        {note.title} | Ishan's Notes
                    </title>
                    <meta name="description" content={
                        note.content.slice(0, 100)
                    } />
                </Head>
                <div className='notes_div'>
                    <h1>
                        {
                            note.title
                        }
                    </h1>
                    <Markdown content={note.content}></Markdown>
                </div>
            </div>
        </Layout>
    )
}


export async function getServerSideProps({ params }) {
    const { id } = params
    const param = id
    const { db } = await connectToDatabase();
    const response = await db.collection("notes").find({ slug: param }).toArray();
    if (!response[0]) return {
        notFound: true,
    }
    const data = {
        title: response[0].title || null,
        content: response[0].content || null,
    }
    return {
        props: {
            data,
        }
    }
}