import Link from "next/link";
import React from "react";
import Image from "next/image";

const BlogNav = () => {
    return (
        <>
            <nav className="blog-nav">
                <ul>
                    <li><Link href="/blog" className="wavyline nav-title"> Ishan Writes...</Link></li>
                    <li><Link href="/blog/archive"> Archives</Link></li>
                    <li><Link href="/blog/latest"> Latest</Link></li>
                    <li><Link href="/social/github">GitHub</Link></li>
                    <li>
                        <Link href="/"> Author</Link>
                    </li>
                </ul>
            </nav>
            <nav className="blog-m_nav">
                <ul>
                    <li><Link href="/blog" className="nav-title"> Ishan Writes...</Link></li>
                    <li><Link href="/blog/archive"> Archives</Link></li>
                    <li><Link href="/blog/latest"> Latest</Link></li> 
                    <li>
                        <Link href="/"> Author</Link>
                    </li>   
                </ul>
            </nav>
        </>
    )
}

export default BlogNav