import React, {useState} from "react";
import Link from "next/link"
import icon from "@/static/images/icon.png";

const Nav = () => {
    const [nav, setNav] = useState(false);
    const navigate = (url) => {
        window.location.href = url
    }
    const toggleNav = () => {
        setNav(!nav);
    }
    return (
        <>
            <nav className="index-nav">
                <ul>
                    {/* eslint-disable-next-line */}
                    <li className="index-nav-title"><img src={icon.src} width="32" height="32" style={{ verticalAlign: "middle", borderRadius: "24px" }} alt="NoobScience Icon" /> <span role="button" onClick={() => { navigate("/") }}>NoobScience</span></li>
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
                        <Link href="/github" className="underline">GitHub</Link>
                    </li>
                    <li>
                        <Link href="/social" className="underline">Social</Link>
                    </li>
                </ul>
            </nav>
            <nav className="index_m_nav">
                <ul>
                    {/* eslint-disable-next-line */}
                    <li className="nav-title"><img src={icon.src} width="32" style={{ verticalAlign: "middle", borderRadius: "24px" }} alt="NoobScience Icon" /> <span role="button" onClick={() => { navigate("/") }}>NoobScience</span><button onClick={toggleNav} style={{ fontSize: "1.4rem", margin: "0 1rem", }} id="op_toggle"><i className="bi bi-list" id="nav_icon"></i></button></li>
                    <div style={{display: nav ? "inline":"none",}} className="nav-content">
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
                            <Link href="/github" className="underline">GitHub</Link>
                        </li>
                        <li>
                            <Link href="/social" className="underline">Social</Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </>
    )
}

export default Nav