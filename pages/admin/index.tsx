import Link from "next/link";
import Head from "next/head";

export default function AdminPage() {
    return (
        <div
            style={{
                textAlign: "center",
            }}
            className="page-div admin_div"
        >
            <Head>
                <title>Admin Page</title>
            </Head>
            <h1>Admin Page</h1>
            <p>Here are some useful links</p>
            <ul
                style={{
                    listStyleType: "none",
                }}
            >
                <li><Link href="/admin/add">Add</Link></li>
                <li><Link href="/admin/view">View</Link></li>
                <li><Link href="/admin/delete">Delete</Link></li>
                <li><Link href="/admin/edit">Edit</Link></li>
                <li><Link href="/">Back</Link></li>
            </ul>
        </div>
    )
}