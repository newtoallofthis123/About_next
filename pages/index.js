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
    const send = (url) => {
        Router.push(url)
    }
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data, error } = useSwr('https://raw.githubusercontent.com/newtoallofthis123/Assets/main/data.json', fetcher);
    let count = 0
    const does = ["is a Student at GRIET", "is a Full Stack Developer", "is a Opinionated Writer", "is an Open Source Enthusiast", "'s Always on GitHub", "Loves Dogs"];
    return (
        <Layout>
            <Seo title="NoobScience | Student and Open Source Enthusiast" description="Home Page" />
            <div id="scroll" className="terminal">
                <div className="terminal__header">
                    <span className="circle circle--red"></span>
                    <span className="circle circle--yellow"></span>
                    <span className="circle circle--green"></span>
                    Ishan_101.exe
                </div>
                <div>{"~>   "}
                    <span>
                        Ishan
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
                    <h1 className="main-title__heading animate__animated animate__fadeInDown animate__delay-1s">I'm <span className="name">Ishan</span></h1>
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
                        You can access my whole site from the nav bar. Press the button below to scroll back to the top. <span>
                            <button onClick={scroll}><p style={{ cursor: "pointer", }}> <i className="bi bi-arrow-up"></i> </p></button>
                        </span>
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
                                data.updates.slice(0).reverse().map((update) => {
                                    const url = "/updates/" + update.id
                                    count++
                                    if (count < 3) {
                                        return (
                                            <div className="update" key={update.id}>
                                                <span>
                                                    <h3 className="update__heading"><Link href={url}>{update.name}</Link></h3>
                                                    <p className="update__date">{update.date}</p>
                                                </span>
                                                <p dangerouslySetInnerHTML={{
                                                    __html: marked.parse(update.content)
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
                </div>
            </div>
        </Layout>
    )
}

export default Home