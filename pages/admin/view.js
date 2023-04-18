import React from 'react'
import { connectToDatabase } from '@/utils/db'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Seo} from "@/components/seo";

export default function DbView({ data }) {
    const [auth, setAuth] = React.useState(false)
    const [password, setPassword] = React.useState("")
    const NS_PWD = process.env.NEXT_PUBLIC_NS_PWD
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handlePasswordSubmit = (e) => {
        e.preventDefault()
        if (password === NS_PWD) {
            setAuth(true)
            toast("Welcome back Admin. We missed you 😎")
        }
        else {
            toast("Wrong Password! Are you a Hacker? 🧑‍💻")
        }
    }
    const handleSubmit = (topic) => (e) => {
        const choice = window.confirm("Are you sure you want to delete this item?")
        if (!choice)
            return
        e.preventDefault();
        const id = e.target.del_id.value;
        if (!id) {
            toast("Something went wrong")
            return
        }
        if (topic === "page") {
            topic = "updates"
        }
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
                    console.log(err)
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
            {
                (auth) ? (
                    <div>
                        <h1>View</h1>
                        {
                            data.map((collection, index) => {
                                const topics = ["page", "links", "notes"]
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
                ) : (
                    <div className='password_div'>
                        <Seo title="Login to view admin page"></Seo>
                        <h1>Admin Page!</h1>
                        <form onSubmit={handlePasswordSubmit}>
                            <p>Enter Your Password</p>
                            <input type="password" name="password" id="password" onChange={handlePassword} />
                            <p></p>
                            <button type="submit">Submit</button>
                        </form>
                        <p>
                            Hey! First off, Hi! Thanks for your interest in the site.
                            I use this page for the admin stuff. If you are a hacker, you can try to hack me.
                            If you are a friend, you can try to get the password from me.
                        </p>
                        <p>
                            With that said, If you are indeed able to hack into the site, please don't do anything bad.
                            I am not a big company, I am just a student trying to learn new things.
                            So, just report it to me and I will fix it.
                            I have a lot to learn, so please don't be mean.
                        </p>
                    </div>
                )}
        </div>
    )
}

export async function getServerSideProps() {
    const { db } = await connectToDatabase();
    let data = []
    data[0] = await db.collection("page").find({}).sort({ _id: -1 }).toArray();
    data[1] = await db.collection("go").find({}).toArray();
    data[2] = await db.collection("notes").find({}).toArray();
    return {
        props: {
            data: JSON.parse(JSON.stringify(data)),
        },
    }
}