import React from "react";

import Layout from "@/components/layout";
import { Seo } from "@/components/seo"
import Link from "next/link";
import TypeWriter from "@/components/typewriter";

import light_pfp from "@/static/images/profile-light.webp"
import dark_pfp from "@/static/images/profile-dark.webp"

const Home = () => {
    const does = ["Student at GRIET", "Full Stack Developer", "Open Source", "Always on GitHub", "Loves Dogs"];
    return (
        <Layout>
            <div className="hero">
                <h1 className="index-title">
                    <span>{/* eslint-disable-next-line */}
                        <img src={light_pfp.src} alt="Light Profile Picture" className="light-pfp profile-pic" />
                        {/* eslint-disable-next-line */}
                        <img src={dark_pfp.src} alt="Dark Profile Picture" className="dark-pfp profile-pic" />
                    </span><p></p>
                    <span style={{ color: "var(--blue)", }}>I</span>shan <span style={{ color: "var(--green)", }}>J</span>oshi
                </h1>
                <TypeWriter data={does} />
                <h2 className="sub_title"><Link href="/about" style={{ background: "#75f0f3" }}>Student</Link><Link href="/skills" style={{ background: "#95ee65" }}>Full Stack Dev</Link><Link href="/projects" style={{ background: "#f888d6" }}>Open Source</Link></h2>
                <h2 className="m_sub_title"><Link href="/about" style={{ background: "#75f0f3", borderRadius: "12px", padding: "12px", margin: "40px" }}>Student</Link></h2>
                <h2 className="m_sub_title"><Link href="/skills" style={{ background: "#95ee65", borderRadius: "12px", padding: "12px" }}>Full Stack</Link></h2>
                <h2 className="m_sub_title"><Link href="/projects" style={{ background: "#f888d6", borderRadius: "12px", padding: "12px" }}>Open Source</Link></h2>
                <div style={{ textAlign: "center" }}>
                    {/* eslint-disable-next-line */}
                    <button className='scroll_btn'><i className="bi bi-chevron-compact-down"></i></button>
                </div>
            </div>
            <div id='intro' style={{ backgroundColor: "var(--green)" }} className='color-div'>
                <h1>Hello! Do you know me?</h1>
                <p>
                    I am a student and a full stack developer. I love to code and I love to learn new things.
                    I am primarily a web developer and I love to work with React and python.
                    I started programming about 3 years ago and never looked back since.
                    Well, living in the terminal is my thing and I love to work with linux.
                    BTW, like the terminal?
                </p>
                <p>
                    Under development <i className="bi bi-tools"></i> by the way.
                    One more thing, I love to contribute to open source and I am currently working on a project called <a className='link' href="https://github.com/newtoallofthis123/pyblog">pyblog</a>.
                    It is a blogging platform written in python and it is still in development.
                </p>
            </div>
            <div id='projects' style={{ backgroundColor: "var(--red)" }} className='color-div'>
                <h1>School Stuff</h1>
                <p>
                    I am currently in my 1st year of B.Tech in Computer Science and Engineering.
                    I study at <a href="https://griet.ac.in" className="link">GRIET</a>, Hyderabad.
                    Well, student life is fun and I love to code and learn new things.
                    WIP
                </p>
            </div>
        </Layout>
    )
}

export const Head = () => {
    return (
        <Seo title="NoobScience | Student and Open Source Enthusiast" description="Home Page" />
    )
}

export default Home