import React from "react";

import Layout from "@/components/layout";
import { Seo } from "@/components/seo"
import Link from "next/link";
import TypeWriter from "@/components/typewriter";
import useSwr from "swr";
import { marked } from "marked";
import Router from "next/router";

const Home = () => {
    const scroll = () => {
        window.scrollTo({
            top: document.getElementById('scroll').offsetTop,
            behavior: "smooth"
        });
    }
    const [terminal, setTerminal] = React.useState(true);
    const delete_terminal = () => {
        setTerminal(false);
    }
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data, error } = useSwr('/api/v1/updates', fetcher);
    let count = 0
    const does = ["Student at GRIET", "Full Stack Developer", "Opinionated Writer", "Open Source Enthusiast", "Always on GitHub", "Dog Bro :)"];
    return (
        <Layout>
            <Seo title="NoobScience | Student and Open Source Enthusiast" description="Home Page" />
            <div style={
                (terminal) ? { display: "block" } : { display: "none" }
            } id="scroll" className="terminal">
                <div className="terminal__header">
                    <span style={{cursor: "pointer",}} onClick={() => {delete_terminal()}} className="circle circle--red"></span>
                    <span onClick={() => {Router.push("/add/")}} className="circle circle--yellow"></span>
                    <span className="circle circle--green"></span>
                    Ishan_101.exe
                </div>
                <div>{"~>   "}
                    <span>
                        {/* Ishan */}
                        <TypeWriter
                            data={does}
                        ></TypeWriter>
                    </span>
                    <span className="terminal_cursor animate__animated animate__flash animate__infinite animate__slow">|</span>
                </div>
            </div>
            <div>
                <div className="main-title">
                    <p className="intro_heading animate__animated animate__fadeInDown">Hi friend,</p>
                    <h1 className="styled_link main-title__heading animate__animated animate__fadeInDown animate__delay-1s">I'm <span className="name">Ishan</span></h1>
                </div>
                <div className="intro animate__animated animate__fadeIn animate__delay-2s">
                    <p>
                        Cool name right?
                        Hang around and we might become internet buddies.
                        First up. I'm a student at GRIET, Hyderabad. I'm a Full Stack Developer and an Open Source Enthusiast.
                        I'm also a writer. I love to write about tech and my experiences.
                    </p>
                    <p>
                        Currently, I mainly work with JavaScript and Python. But, my journey, as a developer, has been a roller coaster ride.
                        I started coding and well, developing when I was 17. I started with Python and then moved to JavaScript.
                    </p>
                    <p>
                        I've worked with React, Next.js, Node.js, Express.js, MongoDB, and a lot more recently.
                        But, Flask, python and Django always will have a special place in my heart.
                    </p>
                    <p>
                        I still have a lot to talk about. So, let's get to know each other better.
                        You can visit my <Link href="/about">About</Link> page to know more about me.
                        And you can also check out my <Link href="/social">Social</Link> page to connect with me.
                        And I know this is a lot of ands but, I also have a <Link href="/blog">Blog</Link> and <Link href="/journal">Journal</Link> where I write about tech and my experiences.
                    </p>
                </div>
                <div className="updates">
                    <h2 className="updates__heading">Updates</h2>
                    <p>
                        I tried something new. So, I made a <Link href="/blog">blog</Link> and it's more of a article site.
                        So, I wanted a place where I could share my thoughts. Sort of like a custom twitter board.
                        And I wanted to avoid hosting costs. So, I made a blog using Next.js and Vercel and used a json file as a database. Yes.
                        You heard it right. I used a json file as a database. I know it's not the best way to do it. But, it's a start. The json file is
                        hosted on <i className="bi bi-github"></i> GitHub and I'm using the GitHub API to fetch the data.
                        Here are a few of my latest updates
                    </p>
                    <div className="updates__content">
                        {
                            (error)? <>Error Loading</>:
                            (!data) ? <>Loading</> :
                                data.slice(0).reverse().map((update) => {
                                    const url = "/updates/" + update.hash
                                    count++
                                    if (count < 4) {
                                        return (
                                            <div className="update" key={update._id}>
                                                <span>
                                                    <h3 className="update__heading"><Link href={url}>{update.name}</Link></h3>
                                                    <p className="update__date">{update.date}</p>
                                                </span>
                                                <p dangerouslySetInnerHTML={{
                                                    __html: marked.parse(update.content.toString().substring(0, 400) + "...")
                                                }} className="update__content"></p>
                                            </div>
                                        )
                                    }
                                }
                                )
                        }
                    </div>
                </div>
                <div className="latest_blog">
                    <h2 className="blog__heading">Latest Blog Post</h2>
                    <p>
                        I write alot on my <Link href="/blog">blog</Link>. The blog is called <i>Ishan Writes</i>.
                        This is the latest blog post.
                        I highly recommend you to check out my blog. It's a great place to learn about tech and my experiences.
                    </p>
                    <h2>
                        Anyways...
                    </h2>
                    <p>
                        It's been a pleasure to have you here. I hope you enjoyed your stay.
                        I'm always open to new opportunities. So, if you have any, feel free to <Link href="/social">contact</Link> me.
                    </p>
                    <p>
                        BTW, all this home page mess is just for the sake of a home page. This nextjs site is still has nearly 40 unique pages and I suggest you check them all out.
                        I'm still working on the site. So, expect a few changes here and there.
                        Moreover, I am also working on a dynamic site map for this site. So, you can easily navigate through the site.
                        You can access my whole site from the nav bar. Press the button below to scroll back to the top. <span>
                            <button
                                style={{
                                    border: "none",
                                    backgroundColor: "transparent",
                                    color: "white",
                                }}
                                onClick={scroll}><p style={{ cursor: "pointer", }}> <i className="bi bi-arrow-up"></i> </p></button>
                        </span>
                    </p>
                </div>
                <div className="animate__animated animate__fadeOutDown animate__delay-5s notification">
                    <div className="notification__content">
                        <p onClick={
                            () => {
                                window.location.href = "/services"
                            }
                        }>
                            <i className="bi bi-megaphone"></i> New Services Page! Click to Check it out
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home