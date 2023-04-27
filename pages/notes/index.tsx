import Layout from '@components/layout';
import Link from 'next/link'
import useSwr from "swr";
import LoadingScreen from '@components/loading';

type Note = {
    _id: string,
    title: string,
    slug: string,
    category: string,
    content: string,
}

export default function Notes() {
    const fetcher = (url:string) => fetch(url).then(res => res.json())
    const { data, error, isLoading } = useSwr(`/api/v2/notes/all`, fetcher)
    if (isLoading) return <div><LoadingScreen></LoadingScreen></div>
    if (error) return <div>Failed to load</div>
  return (
    <Layout>
        <div className="normalize">
            <div className="full-content-div content-div-blue">
                <h1>
                    Interested in the Noob's Notes?
                </h1>
                <p className="text-div">
                    I have a <Link href="/notes">Notes</Link> page where I write down my notes on various topics.
                    These notes are mostly for my own reference, but I thought I'd share them with you.
                    Now remember, these are just my notes, so they may not be the best, but I hope they can help you.
                    The notes themselves are written in Markdown, and I use Next.js to render them.
                    I set up a small CMS to make it easier for me to write and edit my notes.
                    I also use a custom API to fetch the notes from the database.
                    Please get in touch if you have any questions or suggestions.
                </p>
            </div>
            <div className="two-content-divs">
                <div className="notes__showcase content">
                    <h1>
                        Algorithms
                    </h1>
                    <ul>
                        {
                            data.map((note: Note) => {
                                    if (note.category === "algos") {
                                        return (
                                            <li key={note._id}>
                                                <Link href={`/notes/${note.slug}`}>
                                                    <p>
                                                        {note.title}
                                                    </p>
                                                </Link>
                                            </li>
                                        )
                                    }
                                }
                            )
                        }
                    </ul>
                </div>
                <div className="notes__showcase content">
                    <h1>
                        Other Notes
                    </h1>
                    <ul>
                        {
                            data.map((note: Note) => {
                                    if (note.category != "algos") {
                                        return (
                                            <li key={note._id}>
                                                <Link href={`/notes/${note.slug}`}>
                                                    <p>
                                                        {note.title}
                                                    </p>
                                                </Link>
                                            </li>
                                        )
                                    }
                                }
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    </Layout>
  )
}
