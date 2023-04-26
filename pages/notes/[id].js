import React from 'react'
import { useRouter } from 'next/router'
import useSwr, {preload} from "swr"
import { marked } from 'marked'
import LoadingScreen from '@/components/loading'
import hljs from "highlight.js";
import Layout from "@/components/layout";
import Markdown from '@/components/md'
import { connectToDatabase } from "@/utils/db";

export default function UpdatesID({data}) {

    if (data) {
        const note = data
        if(!note) return <div>404</div>
        if (note) {
            return (
                <Layout>
                    <div className="normalize">
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
        } else {
            <div>404</div>
        }
    }
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