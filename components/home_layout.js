import React from "react";
import Nav from "./nav"
import Settings from "./settings";
import Footer from "./footer";
import { Seo } from "./seo";
import Link from "next/link";
import Router from "next/router";
import icon from "@/static/images/icon.png";
import Head from "next/head";

export default function HomeLayout({ children }) {
    const [nav, setNav] = React.useState(false);
    const navigate = (url) => {
        window.location.href = url
    }
    const toggleNav = () => {
        setNav(!nav);
    }
    return (
        <div className="home">
            {/* <Nav></Nav> */}
            <Head>
                <title>
                    NoobScience | Open Source Enthusiast
                </title>
                <meta name="theme-color" content="#ffd845" />
            </Head>
            <nav>
                <div className="nav" onClick={
                    () => {
                        Router.push("/");
                    }
                }>
                    <div className="nav__img">
                        <img src="/logo512.png" alt="logo" />
                    </div>
                    <div className="nav__title">
                        <h1>NoobScience</h1>
                    </div>
                </div>
                <div className="nav__content">
                    <ul>
                        <li><Link className="underline" href="/about">About</Link></li>
                        <li><Link className="underline" href="/blog">Blog</Link></li>
                        <li><Link className="underline" href="/projects">Projects</Link></li>
                        <li><Link className="underline" href="/skills">Skills</Link></li>
                        <li><Link className="underline" href="/contact">Resume</Link></li>
                        <li>
                            <Link className="underline" href="/updates">Updates</Link>
                        </li>
                        <li>
                            <Link className="underline" href="/credits">Credits</Link>
                        </li>
                        <li>
                            <Link className="underline" href="/services">Services</Link>
                        </li>
                        <li>
                            <Link className="underline" href="/social">Social</Link>
                        </li>
                        <li>
                            <Link className="underline" href="/github">GitHub</Link>
                        </li>
                        <li>
                            <Link className="underline" href="/notes">Notes</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className="nav-normal-m">
                <ul>
                    {/* eslint-disable-next-line */}
                    <li className="nav-title"><img src={icon.src} width="32" style={{ verticalAlign: "middle", borderRadius: "24px" }} alt="NoobScience Icon" /> <span role="button" onClick={() => { navigate("/") }}>NoobScience</span><button onClick={toggleNav} style={{ fontSize: "1.4rem", margin: "0 1rem", }} id="op_toggle"><i className="bi bi-list" id="nav_icon"></i></button></li>
                    <span style={
                        (nav) ? {
                            color: "black",
                        }
                            : {
                                display: "none",
                            }
                    }>
                        <li>
                            <Link href="/about" className="underline">About</Link>
                        </li>
                        <li>
                            <Link href="/blog" className="underline">Blog</Link>
                        </li>
                        <li>
                            <Link href="/projects" className="underline">Projects</Link>
                        </li>
                        <li>
                            <Link href="/skills" className="underline">Skills</Link>
                        </li>
                        <li>
                            <Link href="/resume" className="underline">Resume</Link>
                        </li>
                        <li>
                            <Link href="/updates" className="underline">Updates</Link>
                        </li>
                        <li>
                            <Link href="/notes" className="underline">Notes</Link>
                        </li>
                        <li>
                            <Link href="/services" className="underline">Services</Link>
                        </li>
                        <li>
                            <Link href="/github" className="underline">GitHub</Link>
                        </li>
                        <li>
                            <Link href="/social" className="underline">Social</Link>
                        </li>
                    </span>
                </ul>
            </nav>
            <Seo></Seo>
            {/* <Settings ></Settings> */}
            {children}
            <Footer></Footer>
        </div>
    )
}