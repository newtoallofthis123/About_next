import React from 'react'
import { connectToDatabase } from '@/utils/db'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DbView({ data }) {
    const handleSubmit = (topic) => (e) => {
        const choice = window.confirm("Are you sure you want to delete this item?")
        if (!choice)
            return
        e.preventDefault();
        const id = e.target.del_id.value;
        fetch(`/api/v1/delete/${topic}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    toast("Something went wrong")
                } else {
                    toast("Successfully Deleted")
                }
            })
            .catch((err) => {
                toast("Error posting Link")
            }
        )
    }
    return (
        <div className='db_div'>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
            <h1>View</h1>
            {
                data.map((collection, index) => {
                    const topics = ["page", "links", "go", "journal"]
                    const actions = ["edit", "delete", "add", "view"]
                    return (
                        <div key={index}>
                            <h2>{topics[index]}</h2>
                            <table>
                                <tbody>
                                    {
                                        collection.map((item, sub_index) => {
                                            return (
                                                <tr key={sub_index}>
                                                    {
                                                        Object.keys(item).map((key, index) => { 
                                                            if (key !== "_id" && key !== "collection" && key !== "content")
                                                                return (
                                                                    <td key={index}>{item[key]}</td>
                                                                )
                                                        })
                                                    }
                                                    <td>
                                                        <form action={`/admin/${actions[0]}/${topics[index]}`} method="POST">
                                                            <input type="hidden" name="id" value={item._id} />
                                                            <input type="submit" value="Edit" />
                                                        </form>
                                                    </td>
                                                    <td>
                                                        <form onSubmit={handleSubmit(topics[index])} method='POST'>
                                                            <input type="hidden" name={`del_id`} value={item._id} />
                                                            <input type="submit" value="Delete" />
                                                        </form>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                })
            }
        </div>
  )
}

export async function getServerSideProps() {
    const { db } = await connectToDatabase();
    let data = []
    data[0] = await db.collection("page").find({}).sort({ _id: -1 }).toArray();
    data[1] = await db.collection("links").find({}).toArray();
    data[2] = await db.collection("go").find({}).toArray();
    data[3] = await db.collection("journal").find({}).toArray();
    return {
        props: {
            data: JSON.parse(JSON.stringify(data)),
        },
    }
}