import React from 'react'
import Comments from '@components/comments';
import CommentInsert from '@components/comment_insert';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {}

export default function Discuss({ }: Props) {
    const [comments, setComments] = React.useState<boolean>(false)
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="discussion">
                <h1>Talk about The Noob</h1>
                <p>Why talk outside when you can talk here?</p>
                <button
                    onClick={() => setComments(!comments)}
                    className="fancy_btn"
                >
                    {comments ? 'Hide The Form' : 'Add A Comment'}
                </button>
                {comments && <CommentInsert></CommentInsert>}
                <Comments ></Comments>
            </div>
        </>
    );
}