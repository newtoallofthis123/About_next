import useSWR from "swr"
import React from 'react'
import { marked } from 'marked'
import Head from "next/head"

type Props = {}

export default function Comments({ }: Props) {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR("/api/v2/discuss", fetcher);
    let comments_number = 0
    if (error) return <div>failed to load</div>
    if (!data) return <div>Loading Data...</div>
    if(data.length === 0) return <div>No Comments Found! Add Yours Now!</div>
    return (
        <>
            <div>
                <Head>
                    <title>Comments For The Noob</title>
                </Head>
                <h1>
                    Comments
                </h1>
                <p>
                    Till now there are {data.length} Comments. Add yours now!
                </p>
                <p>
                    Small Note: The comments are not moderated. So, please don't post anything that you don't want to be seen by others.
                </p>
                {
                    data?.slice(0).reverse().map((comment: any) => (
                        <div className="comment" key={comment._id}>
                            <small>
                                Comment {comments_number += 1} {"~>"} #{comment._id} 
                            </small>
                            <h1>{comment.title}</h1>
                            <p
                                dangerouslySetInnerHTML={
                                    {
                                        __html: marked.parse(comment.content)
                                    }
                            }
                            ></p>
                            <p style={{
                                borderTop: '1px solid #ccc',
                                paddingTop: '1rem'
                            }}>
                                Posted by <em>{comment.author}</em> at {comment.date}
                            </p>
                        </div>
                    ))
                }
            </div>
        </>
  )
}