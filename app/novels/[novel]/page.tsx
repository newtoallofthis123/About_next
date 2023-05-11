import novel_data from "app/novels/data.json"
import { redirect } from "next/navigation"
import Link from "next/link"

type Props = {
    params: {
        novel: string
    }
}

async function getNovelData(novel: string) {
    if(!novel_data[novel]) redirect("/novels")
    return novel_data[novel]
}

export default async function NovelPage({params: {novel}}: Props) {
    const data = await getNovelData(novel)
    return (
        <div className="gap page-div">
            <h1>
                {data.title}
            </h1>
            <p>
                {data.description}
            </p>
            <div>
                <button className="fancy_btn">
                    <Link href={`/novels/${novel}/1`}>
                        Read the First Chapter
                    </Link>
                </button>
            </div>
        </div>
    )
}