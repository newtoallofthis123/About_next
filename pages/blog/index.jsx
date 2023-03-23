import Link from "next/link";
import useSwr from 'swr'
import { Seo } from "@/components/seo";
import BlogLayout from "@/components/blog_layout";
import Router from "next/router";

export default function Blog() {
    const ran_color = () => {
        const choices = ["red", "yellow", "violet", "green"];
        const random = choices[Math.floor(Math.random() * choices.length)];
        return `var(--${random})`
    };
    const send = (post) => {
        Router.push("/blog/posts/"+post)
    }
    const fetcher = (url) => fetch(url).then((res) => res.json())
    const { data, error, isLoading } = useSwr('/api/all', fetcher)

    if (error) return <div>Failed to load users</div>
    if (isLoading) return <div>Loading...</div>
    if (!data) return null
    let count = 0
    return (
        <BlogLayout>
            <Seo title="Ishan Writes | Opinions on Tech"></Seo>
            <main>
                <p>
                    Hi! I am Ishan! I go by <a href="https://noobscience.rocks">NoobScience</a> online.
                    I am a student and technology is my <em>JAM</em>. I do have an official
                    blog on <a href="https://blog.noobscience.rocks">Hashnode</a> but I wanted a more
                    personal space to write about my thoughts and ideas. I am a big fan of
                    the vanilla web and I wanted to build this blog from scratch. So I am using
                    a NextJS base for my site. All blog posts are indiviual javascript files and
                    are compiled into static HTML pages. No database, no server side rendering.
                    No Complex CSS frameworks too.
                </p>
                <h2>📚 Recommended Reading</h2>
            {
                data.blogs.map((post) => {
                    count += 1
                    if(count < 8 && !post.wip)
                    return (
                        <div key={post.id} className="recommendations">
                            <div style={{ backgroundColor: ran_color(),}} onClick={() => {send(post.slug)}} className="recommend">
                                <div className="img">
                                    <img src={`/assets/blog/images/${post.img}`} alt="Blog Post Image" />
                                </div>
                                <div className="content">
                                    <h3><Link href={`posts/${post.slug}`}>{post.title}</Link></h3>
                                    <p>
                                        {post.description}
                                    </p>
                                    <button><Link href={`blog/posts/${post.slug}`} >Read the Article!</Link></button>
                                    <button><Link href={`/assets/blog/pdfs/${post.slug}.pdf`}>Download The PDF</Link></button>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
                <p>
                    Okay, as you can see I want to be not talking about technology, but it
                    leaks into my words. Anyways, this is a place I just randomly share my thoughts.
                    There's a plan for more improvements and features, but for now, this is it.
                    If you want to discuss something, please feel free to reach out on <i className="bi bi-twitter"></i><a href="https://twitter.com/noobscience1">Twitter</a>
                    . One more thing, I am not a native English speaker, so please excuse any
                    grammatical errors.
                </p>
                <p>
                    I hope you enjoy your stay here. I'll try to keep this blog updated as much
                    as I can. I'll see you around!
                </p>
                <h2>
                    Trying something out
                </h2>
                <p>
                    I have been thinking about this for quite a while now and I want to try it
                    out. So this blog is a subsidiary of the main site <a href="https://noobscience.rocks">NoobScience</a> and
                    is hosted on the same server. The code is available on <i className="bi bi-github"></i>
                    <a href="https://github.com/newtoallofthis123/About">GitHub</a>.
                    So, if you want to write a article on this blog, you can just fork the repo,
                    write your article and send a pull request. I'll review it and merge it.
                    Cool Right ?! Feel free to try it out. More info and guidelines <em>coming soon</em>.
                </p>
            </main>
        </BlogLayout>
    );
}