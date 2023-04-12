import NotesLayout from '@/components/notes_layout'
import Link from 'next/link'

export default function IndexAlgo() {
    return (
        <NotesLayout>
            <div className="notes">
                <h1>List of Algorithm Notes</h1>
                <p>
                    WIP: Work in progress.
                </p>
                <ul>
                    <li>
                        <Link href="algos/bubble">
                            Bubble Sort
                        </Link>
                    </li>
                    <li>
                        <Link href="algos/selection">
                            Selection Sort
                        </Link>
                    </li>
                </ul>
            </div>
        </NotesLayout>
    )
}
