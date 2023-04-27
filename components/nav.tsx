import React, {useState} from "react";
import Link from "next/link"
import Head from "next/head";

const Nav = () => {
    const [nav, setNav] = useState(false);
    const navigate = (url: string) => {
        window.location.href = url
    }
    const toggleNav = () => {
        setNav(!nav);
    }
    return (
        <>
            <Head>
                <title>
                    NoobScience | Open Source Enthusiast
                </title>
            </Head>
            <nav className="nav-normal-m">
                <ul>
                    {/* eslint-disable-next-line */}
                    <li className="nav-title"><img src="/logo192.png" width="32" style={{ verticalAlign: "middle", borderRadius: "24px" }} alt="NoobScience Icon" /> <span role="button" onClick={() => { navigate("/") }}>NoobScience</span><button onClick={toggleNav} style={{ fontSize: "1.4rem", margin: "0 1rem", }} id="op_toggle"><i className="bi bi-list" id="nav_icon"></i></button></li>
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
                            <Link href="/contact" className="underline">Contact</Link>
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
            <nav className="nav-normal">
                <ul>
                    {/* eslint-disable-next-line */}
                    <li className="nav-title"><img src="/logo192.png" width="36" style={{ verticalAlign: "middle", borderRadius: "24px" }} alt="NoobScience Icon" /> <span role="button" onClick={() => { navigate("/") }}>NoobScience</span></li>
                    <>
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
                            <Link href="/contact" className="underline">Contact</Link>
                        </li>
                        <li>
                            <Link href="/github" className="underline">GitHub</Link>
                        </li>
                        <li>
                            <Link href="/social" className="underline">Social</Link>
                        </li>
                    </>
                </ul>
            </nav>
        </>
    )
}

export default Nav