import React from 'react'
import {toast} from 'react-toastify'

type Props = {}

export default function CommentInsert({ }: Props) {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const title = e.currentTarget.comment_title.value;
        const author = e.currentTarget.author.value;
        const content = e.currentTarget.content.value
        const res = await fetch('/api/v2/discuss/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                author,
                content
            })
        })
        console.log(res)
        if(res.ok) {
            toast.success('Comment Inserted! It should be visible in a few seconds')
        }
        else {
            toast.error('Error Inserting Comment')
        }
    };
    return (
        <>
            <div className="admin_div">
                <h1>Insert Comment</h1>
                <form onSubmit={handleSubmit} method="POST">
                    <p>
                        Enter Title
                    </p>
                    <input type="text" name="comment_title" />
                    <p>
                        Enter Author
                    </p>
                    <input type="text" name="author" />
                    <p>Enter Content</p>
                    <textarea
                        name="content"
                        id=""
                        cols={30}
                        rows={5}
                    ></textarea>
                    <p>
                        <button type="submit">Submit</button>
                    </p>
                </form>
            </div>
        </>
    );
}