import Layout from "@/components/layout"
import Link from "next/link"

const Tool = () => {
    return (
        <Layout>
            <div className="tools-div">
                <h1>Tools</h1>
                <p>
                    Here are some tools that I have made. You can
                    access them by clicking on the links below in the site itself.
                </p>
                <ol>
                    <li>
                        <Link className="text-link link" href="/write">HTMLER</Link> - Convert Markdown to HTML.
                    </li>
                    <li>
                        <Link className="text-link link" href="/tools/qr">QrCode</Link> - Generate QR Codes.
                    </li>
                    <li>
                        <Link className="text-link link" href="/tools/editor">Editor</Link> - A simple text editor.
                    </li>
                    <li>
                        <Link className="text-link link" href="/tools/git">Git Info</Link> - Get info about a GitHub repo.
                    </li>
                    <li>
                        <Link className="text-link link" href="/tools/random">Random Generator</Link> - Generate random identity.
                    </li>
                </ol>
                <p className="center">
                    All of these tools are made using ReactJS.
                    They are all open source and you can find
                    them on my <a className="text-link link" href="https://github.com/newtoallofthis123/About">GitHub</a>.
                    If you want to contribute, you can open an issue or a pull request. Meanwhile, these are free to use. Enjoy :)
                </p>
            </div>
        </Layout>
    )
}

export default Tool