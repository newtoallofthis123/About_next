import BlogLayout from "@/components/blog_layout";
import Link from "next/link";
import useSwr from 'swr'
import { Seo } from "@/components/seo";
import LoadingScreen from "@/components/loading";

export default function Blog() {
    const fetcher = (url) => fetch(url).then((res) => res.json())
    const { data, error, isLoading } = useSwr('/api/all', fetcher)

    if (error) return <div>Failed to load users</div>
    if (isLoading) return <div><LoadingScreen></LoadingScreen></div>
    if (!data) return null
    return (
        <BlogLayout>
            <Seo title="Ishan Writes | Archives"></Seo>
            <main>
                <h1>Blog Archives</h1>
                <p>
                    Here are all the blog posts I've written so far. I hope you enjoy them!
                </p>
                {
                    data.blogs.map((post) => {
                        if (!post.wip)
                            return (
                                <div key={post.id} className="recommendations">
                                    <div className="recommend">
                                        <div className="img">
                                            <img src={`/assets/blog/images/${post.img}`} alt="Blog Post Image" />
                                        </div>
                                        <div className="content">
                                            <h3><Link href={`posts/${post.slug}`}>{post.title}</Link></h3>
                                            <p>
                                                {post.description}
                                            </p>
                                            <button><Link href={`/blog/posts/${post.slug}`} >Read the Article!</Link></button>
                                            <button><Link href={`/blog/pdfs/${post.slug}`}>Download The PDF</Link></button>
                                        </div>
                                    </div>
                                </div>
                            )
                    })
                }
            </main>
        </BlogLayout>
    );
}